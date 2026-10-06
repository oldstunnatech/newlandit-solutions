import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import sharp from 'sharp'
import nl from '../i18n/locales/nl.json'
import { OG_DEFAULT_IMAGE, OG_IMAGE_SIZE, SERVICE_OG_IMAGES } from '../shared/utils/og-images'

const ROOT = resolve(__dirname, '..')
const publicFile = (p: string) => resolve(ROOT, 'public', `.${p}`)

describe('OG images (SEO-008)', () => {
  const all = [OG_DEFAULT_IMAGE, ...Object.values(SERVICE_OG_IMAGES).map((s) => s.image)]

  it.each(all)('%s exists at 1200×630 and under 300 KB', async (image) => {
    const file = publicFile(image)
    expect(existsSync(file), `${image} missing; run npm run og:generate`).toBe(true)
    const meta = await sharp(file).metadata()
    expect(meta.width).toBe(OG_IMAGE_SIZE.width)
    expect(meta.height).toBe(OG_IMAGE_SIZE.height)
    expect(readFileSync(file).length).toBeLessThan(300 * 1024)
  })

  it.each(Object.entries(SERVICE_OG_IMAGES))('%s page passes its own OG image to useSeo', (slug) => {
    const src = readFileSync(resolve(ROOT, `app/pages/solutions/${slug}.vue`), 'utf8')
    expect(src).toContain(`image: SERVICE_OG_IMAGES['${slug}'].image`)
  })

  it.each(Object.values(SERVICE_OG_IMAGES))('$detailKey has nl eyebrow + h1 for the image text', ({ detailKey }) => {
    const detail = (nl.detail as Record<string, { eyebrow?: string; h1?: string }>)[detailKey]
    expect(detail?.eyebrow).toBeTruthy()
    expect(detail?.h1).toBeTruthy()
  })
})
