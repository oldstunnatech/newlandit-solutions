import { contactFormSchema } from '~~/shared/schemas/contact.schema'
import type { ContactSubmissionResult } from '~~/shared/types/contact'

export interface ContactFormState {
  name: string
  email: string
  phone: string
  company: string
  address: string
  message: string
  website: string
}

type FieldErrors = Partial<Record<keyof ContactFormState, string>>

function createEmptyState(): ContactFormState {
  return { name: '', email: '', phone: '', company: '', address:'', message: '', website: '' }
}

export function useContactForm() {
  const form = reactive<ContactFormState>(createEmptyState())
  const errors = ref<FieldErrors>({})
  const attachment = ref<File | null>(null)
  const attachmentError = ref<string | null>(null)

  const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const statusMessage = ref('')

  const MAX_ATTACHMENT_MB = 5
  const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx', '.png', '.jpg', '.jpeg', '.webp']

  function validate(): boolean {
    const result = contactFormSchema.safeParse(form)
    if (result.success) {
      errors.value = {}
      return true
    }

    const fieldErrors: FieldErrors = {}
    for (const issue of result.error.issues) {
      const key = issue.path[0] as keyof ContactFormState
      if (!fieldErrors[key]) fieldErrors[key] = issue.message
    }
    errors.value = fieldErrors
    return false
  }

  function onAttachmentChange(event: Event) {
    const input = event.target as HTMLInputElement
    const file = input.files?.[0]
    attachmentError.value = null

    if (!file) {
      attachment.value = null
      return
    }

    const ext = `.${file.name.split('.').pop()?.toLowerCase()}`
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      attachmentError.value = 'File type not supported.'
      attachment.value = null
      input.value = ''
      return
    }

    if (file.size > MAX_ATTACHMENT_MB * 1024 * 1024) {
      attachmentError.value = `File must be under ${MAX_ATTACHMENT_MB}MB.`
      attachment.value = null
      input.value = ''
      return
    }

    attachment.value = file
  }

  function clearAttachment() {
    attachment.value = null
    attachmentError.value = null
  }

  async function submit() {
    if (!validate()) {
      status.value = 'error'
      statusMessage.value = 'Please check the highlighted fields.'
      return
    }

    status.value = 'submitting'
    statusMessage.value = ''

    const body = new FormData()
    body.append('name', form.name)
    body.append('email', form.email)
    body.append('phone', form.phone)
    body.append('company', form.company)
    body.append('address', form.address)
    body.append('message', form.message)
    body.append('website', form.website)
    if (attachment.value) {
      body.append('attachment', attachment.value)
    }

    try {
      const result = await $fetch<ContactSubmissionResult>('/api/contact', {
        method: 'POST',
        body,
      })

      status.value = 'success'
      statusMessage.value = result.message
      Object.assign(form, createEmptyState())
      clearAttachment()
    } catch (err: any) {
      status.value = 'error'
      statusMessage.value =
        err?.data?.statusMessage ||
        err?.statusMessage ||
        'Something went wrong. Please try again later.'
    }
  }

  function reset() {
    Object.assign(form, createEmptyState())
    errors.value = {}
    clearAttachment()
    status.value = 'idle'
    statusMessage.value = ''
  }

  return {
    form,
    errors,
    attachment,
    attachmentError,
    status,
    statusMessage,
    onAttachmentChange,
    clearAttachment,
    submit,
    reset,
  }
}
