import { ALLOWED_ATTACHMENT_TYPES, MAX_ATTACHMENT_SIZE_BYTES } from '~~/shared/schemas/contact.schema'
import { ContactAttachmentError } from '../errors/contactErrors'

const SIGNATURES: Array<{ mimeType: string; check: (buf: Buffer) => boolean }> = [
  { mimeType: 'application/pdf', check: (b) => b.subarray(0, 4).toString('ascii') === '%PDF' },
  { mimeType: 'image/png', check: (b) => b.subarray(0, 8).toString('hex') === '89504e470d0a1a0a' },
  { mimeType: 'image/jpeg', check: (b) => b.subarray(0, 3).toString('hex') === 'ffd8ff' },
  { mimeType: 'image/webp', check: (b) => b.subarray(0, 4).toString('ascii') === 'RIFF' && b.subarray(8, 12).toString('ascii') === 'WEBP' },
  { mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', check: (b) => b.subarray(0, 4).toString('hex') === '504b0304' },
  { mimeType: 'application/msword', check: (b) => b.subarray(0, 8).toString('hex') === 'd0cf11e0a1b11ae1' },
]

export interface ValidatedAttachment {
  buffer: Buffer
  filename: string
  mimeType: string
  size: number
}

export function validateAttachment(buffer: Buffer, filename: string, declaredMimeType: string): ValidatedAttachment {
  if (buffer.length === 0) {
    throw new ContactAttachmentError('Attachment is empty.')
  }

  if (buffer.length > MAX_ATTACHMENT_SIZE_BYTES) {
    throw new ContactAttachmentError(`Attachment exceeds the ${MAX_ATTACHMENT_SIZE_BYTES / (1024 * 1024)}MB limit.`)
  }

  if (!ALLOWED_ATTACHMENT_TYPES.includes(declaredMimeType as never)) {
    throw new ContactAttachmentError('Attachment file type is not supported.')
  }

  const signature = SIGNATURES.find((s) => s.mimeType === declaredMimeType)
  if (!signature || !signature.check(buffer)) {
    throw new ContactAttachmentError('Attachment content does not match its declared file type.')
  }

  const safeFilename = filename.replace(/^.*[\\/]/, '').slice(0, 200)

  return { buffer, filename: safeFilename, mimeType: declaredMimeType, size: buffer.length }
}
