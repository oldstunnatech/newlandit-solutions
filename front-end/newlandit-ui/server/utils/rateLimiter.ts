interface RateLimitEntry {
  count: number
  windowStart: number
}

const WINDOW_MS = 60 * 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 5

const store = new Map<string, RateLimitEntry>()

function pruneExpired(now: number) {
  for (const [key, entry] of store) {
    if (now - entry.windowStart > WINDOW_MS) store.delete(key)
  }
}

export function checkRateLimit(identifier: string): boolean {
  const now = Date.now()
  pruneExpired(now)

  const entry = store.get(identifier)

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    store.set(identifier, { count: 1, windowStart: now })
    return true
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return false
  }

  entry.count += 1
  return true
}
