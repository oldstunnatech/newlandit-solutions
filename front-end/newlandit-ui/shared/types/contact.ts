export interface ContactSubmission {
  name: string
  email: string
  phone?: string
  company?: string
  address?: string
  message: string
  attachment?: ContactAttachment
}

export interface ContactAttachment {
  filename: string
  mimeType: string
  size: number
}

export interface ContactSubmissionResult {
  success: boolean
  message: string
}
