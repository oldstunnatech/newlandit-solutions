import { contactFormSchema } from '~~/shared/schemas/contact.schema'
import type { ContactSubmissionResult } from '~~/shared/types/contact'
import { ContactValidationError, ContactRateLimitError } from '../errors/contactErrors'
import { checkRateLimit } from './rateLimiter'
import { validateAttachment, type ValidatedAttachment } from './attachmentValidator'
import { saveContactSubmission, uploadAttachment } from './sanityClient'
import { sendContactNotification } from './emailClient'

export interface RawAttachmentInput {
  buffer: Buffer
  filename: string
  mimeType: string
}

export interface ProcessSubmissionInput {
  fields: Record<string, string>
  attachment?: RawAttachmentInput
  clientIdentifier: string
}

export async function processContactSubmission(input: ProcessSubmissionInput): Promise<ContactSubmissionResult> {
  if (!checkRateLimit(input.clientIdentifier)) {
    throw new ContactRateLimitError()
  }

  const parsed = contactFormSchema.safeParse(input.fields)
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]
    throw new ContactValidationError(firstIssue?.message ?? 'Invalid submission.')
  }

  if (parsed.data.website) {
    return { success: true, message: 'Thanks! We will be in touch shortly.' }
  }

  const formData = parsed.data

  let validatedAttachment: ValidatedAttachment | undefined
  if (input.attachment) {
    validatedAttachment = validateAttachment(input.attachment.buffer, input.attachment.filename, input.attachment.mimeType)
  }

  let assetId: string | undefined
  if (validatedAttachment) {
    assetId = await uploadAttachment(validatedAttachment.buffer, validatedAttachment.filename, validatedAttachment.mimeType)
  }

  await saveContactSubmission({
    ...formData,
    attachment: validatedAttachment && assetId
      ? { filename: validatedAttachment.filename, mimeType: validatedAttachment.mimeType, size: validatedAttachment.size, assetId }
      : undefined,
  })

  await sendContactNotification({ ...formData, hasAttachment: Boolean(validatedAttachment) })

  return { success: true, message: 'Thanks! We will be in touch shortly.' }
}
