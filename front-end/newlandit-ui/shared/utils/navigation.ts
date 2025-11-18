// Utility helpers for navigation
// Keep functions pure to make them easy to test and reuse.

export type IsActiveOptions = {
  exact?: boolean // if true, require exact path match
}

const normalizePath = (p: string | undefined): string => {
  if (!p) return '/'
  // ensure p is a string now
  const s: string = String(p)
  // remove query/hash
  const cleaned: string = (s.split('?')[0].split('#')[0]) as string
  // collapse multiple slashes and trim trailing (but keep root "/")
  const trimmed: string = cleaned.replace(/\/+/g, '/').replace(/\/$/, '')
  return trimmed === '' ? '/' : trimmed
}

/**
 * Determine if a navigation target (href) is active compared to the current path.
 * - href can be a path like `/solutions` or `/`.
 * - currentPath should be the router path (route.path) and may include trailing slashes.
 * - By default, matches if current path equals href or is a subpath (startsWith). Use `exact` for full equality.
 */
export function isActivePath(href: string, currentPath: string | undefined, opts: IsActiveOptions = {}): boolean {
  const { exact = false } = opts
  const target = normalizePath(href)
  const current = normalizePath(currentPath)

  if (exact) return current === target

  if (target === '/') return current === '/'

  // Match when current is exactly target or starts with target + '/'
  return current === target || current.startsWith(target + '/')
}
