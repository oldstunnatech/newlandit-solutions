import { Resend } from 'resend'
import type { ContactFormInput } from '~~/shared/schemas/contact.schema'

let cachedClient: Resend | null = null

function getResendClient(): Resend {
  if (cachedClient) return cachedClient

  const config = useRuntimeConfig()
  if (!config.resendApiKey) {
    throw new Error('RESEND_API_KEY is not configured. Set it in your .env file.')
  }

  cachedClient = new Resend(config.resendApiKey)
  return cachedClient
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export interface NotificationInput extends ContactFormInput {
  hasAttachment: boolean
}

export async function sendContactNotification(input: NotificationInput): Promise<void> {
  const client = getResendClient()
  const config = useRuntimeConfig()

  const safe = {
    name: escapeHtml(input.name),
    email: escapeHtml(input.email),
    phone: input.phone ? escapeHtml(input.phone) : '—',
    company: input.company ? escapeHtml(input.company) : '—',
    address: input.address ? escapeHtml(input.address) : '—',
    message: escapeHtml(input.message).replace(/\n/g, '<br/>'),
  }

  try {
    await client.emails.send({
      from: config.contactNotificationFrom,
      to: config.contactNotificationTo,
      replyTo: input.email,
      subject: `New contact form submission from ${safe.name}`,
      html: `
        <h2>New contact submission</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Company:</strong> ${safe.company}</p>
        <p><strong>Address:</strong> ${safe.address}</p>
        <p><strong>Attachment:</strong> ${input.hasAttachment ? 'Yes (see Sanity Studio)' : 'No'}</p>
        <p><strong>Message:</strong></p>
        <p>${safe.message}</p>
      `,
    })
  } catch (err) {
    console.error('[contact] Email notification failed:', err)
  }
}
