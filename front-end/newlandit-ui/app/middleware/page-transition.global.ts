// Picks the slide direction per navigation: going deeper into the site tree
// (parent -> child -> grandchild) slides left-to-right, everything else
// (going up, or to a sibling/top-level page) slides right-to-left.
const depth = (path: string) =>
  path.replace(/^\/en(?=\/|$)/, '').split('/').filter(Boolean).length

export default defineNuxtRouteMiddleware((to, from) => {
  const deeper = depth(to.path) > depth(from.path)
  to.meta.pageTransition = {
    name: deeper ? 'slide-ltr' : 'slide-rtl',
    mode: 'out-in',
  }
})
