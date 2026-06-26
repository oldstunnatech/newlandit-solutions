import { createClient, type SanityClient } from '@sanity/client'
import type { ContactFormInput } from '~~/shared/schemas/contact.schema'
import type { ContactAttachment } from '~~/shared/types/contact'
import { ContactPersistenceError } from '../errors/contactErrors'

let cachedClient: SanityClient | null = null

function getSanityWriteClient(): SanityClient {
  if (cachedClient) return cachedClient

  const config = useRuntimeConfig()

  if (!config.sanityApiToken) {
    throw new Error('SANITY_API_TOKEN is not configured. Set it in your .env file.')
  }

  cachedClient = createClient({
    projectId: config.public.sanityProjectId,
    dataset: config.public.sanityDataset,
    apiVersion: '2024-01-01',
    token: config.sanityApiToken,
    useCdn: false,
  })

  return cachedClient
}

export interface SaveSubmissionInput extends ContactFormInput {
  attachment?: ContactAttachment & { assetId?: string }
}

export async function saveContactSubmission(input: SaveSubmissionInput): Promise<{ id: string }> {
  const client = getSanityWriteClient()

  try {
    const doc = await client.create({
      _type: 'contactSubmission',
      name: input.name,
      email: input.email,
      phone: input.phone || undefined,
      company: input.company || undefined,
      address: input.address || undefined,
      message: input.message,
      submittedAt: new Date().toISOString(),
      ...(input.attachment?.assetId && {
        attachment: {
          _type: 'file',
          asset: { _type: 'reference', _ref: input.attachment.assetId },
        },
      }),
    })

    return { id: doc._id }
  } catch (err) {
    console.error('[contact] Sanity write failed:', err)
    throw new ContactPersistenceError()
  }
}

export async function uploadAttachment(buffer: Buffer, filename: string, mimeType: string): Promise<string> {
  const client = getSanityWriteClient()

  try {
    const asset = await client.assets.upload('file', buffer, { filename, contentType: mimeType })
    return asset._id
  } catch (err) {
    console.error('[contact] Sanity attachment upload failed:', err)
    throw new ContactPersistenceError('Could not upload attachment.')
  }
}
