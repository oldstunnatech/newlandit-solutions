import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().trim().email('Enter a valid email address').max(254, 'Email is too long'),
  phone: z.string().trim().max(30, 'Phone number is too long').regex(/^[+\d\s().-]*$/, 'Phone number contains invalid characters').optional().or(z.literal('')),
  company: z.string().trim().max(150, 'Company name is too long').optional().or(z.literal('')),
  address: z.string().trim().max(250, 'Address is too long').optional().or(z.literal('')),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(5000, 'Message is too long'),
  website: z.string().max(0, 'Spam detected').optional().or(z.literal('')),
})

export type ContactFormInput = z.infer<typeof contactFormSchema>

export const ALLOWED_ATTACHMENT_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/png',
  'image/jpeg',
  'image/webp',
] as const

export const MAX_ATTACHMENT_SIZE_BYTES = 5 * 1024 * 1024
