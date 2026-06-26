import { processContactSubmission, type RawAttachmentInput } from '../utils/contactService'
import { isContactError } from '../errors/contactErrors'

export default defineEventHandler(async (event) => {
  assertMethod(event, 'POST')

  const parts = await readMultipartFormData(event)
  if (!parts) {
    throw createError({ statusCode: 400, statusMessage: 'No form data received.' })
  }

  const fields: Record<string, string> = {}
  let attachment: RawAttachmentInput | undefined

  for (const part of parts) {
    if (!part.name) continue

    if (part.filename) {
      if (!attachment && part.data.length > 0) {
        attachment = { buffer: part.data, filename: part.filename, mimeType: part.type ?? 'application/octet-stream' }
      }
    } else {
      fields[part.name] = part.data.toString('utf-8')
    }
  }

  const clientIdentifier =
    getRequestHeader(event, 'x-forwarded-for') ??
    event.node.req.socket.remoteAddress ??
    'unknown'

  try {
    const result = await processContactSubmission({ fields, attachment, clientIdentifier })
    setResponseStatus(event, 200)
    return result
  } catch (err) {
    if (isContactError(err)) {
      throw createError({ statusCode: err.statusCode, statusMessage: err.message })
    }

    console.error('[contact] Unexpected error:', err)
    throw createError({ statusCode: 500, statusMessage: 'Something went wrong. Please try again later.' })
  }
})
