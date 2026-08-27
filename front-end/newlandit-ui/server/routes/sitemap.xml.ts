import { defineEventHandler, setHeader, useRuntimeConfig } from '#imports'
import { NL_ROUTES, buildUrlBlock } from '../utils/sitemap-routes'

export default defineEventHandler((event) => {
  const base = String(useRuntimeConfig().public.siteUrl || '').replace(/\/+$/, '')
  const lastmod = new Date().toISOString().split('T')[0]

  const urls = NL_ROUTES.map((r) => buildUrlBlock(base, r, lastmod)).join('\n')

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset`,
    `  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`,
    `  xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
    urls,
    `</urlset>`,
  ].join('\n')

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return xml
})
