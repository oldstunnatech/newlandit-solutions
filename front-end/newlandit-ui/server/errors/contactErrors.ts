export class ContactValidationError extends Error {
  readonly statusCode = 400
  constructor(message: string) {
    super(message)
    this.name = 'ContactValidationError'
  }
}

export class ContactAttachmentError extends Error {
  readonly statusCode = 400
  constructor(message: string) {
    super(message)
    this.name = 'ContactAttachmentError'
  }
}

export class ContactRateLimitError extends Error {
  readonly statusCode = 429
  constructor(message = 'Too many submissions. Please try again later.') {
    super(message)
    this.name = 'ContactRateLimitError'
  }
}

export class ContactPersistenceError extends Error {
  readonly statusCode = 502
  constructor(message = 'Could not save your submission. Please try again.') {
    super(message)
    this.name = 'ContactPersistenceError'
  }
}

export type ContactError =
  | ContactValidationError
  | ContactAttachmentError
  | ContactRateLimitError
  | ContactPersistenceError

export function isContactError(err: unknown): err is ContactError {
  return (
    err instanceof ContactValidationError ||
    err instanceof ContactAttachmentError ||
    err instanceof ContactRateLimitError ||
    err instanceof ContactPersistenceError
  )
}
