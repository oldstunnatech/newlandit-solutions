/**
 * Generates Open Graph images (SEO-008). Run after changing service titles:
 *   npm run og:generate
 * Output is committed to public/images/og/ — nothing runs at request time.
 */
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import sharp from 'sharp'
import { CONTACT } from '../shared/utils/contact.ts'
import { OG_IMAGE_SIZE, OG_DEFAULT_IMAGE, SERVICE_OG_IMAGES } from '../shared/utils/og-images.ts'

const ROOT = resolve(import.meta.dirname, '..')
const { width: W, height: H } = OG_IMAGE_SIZE
const nl = JSON.parse(readFileSync(resolve(ROOT, 'i18n/locales/nl.json'), 'utf8'))

const escapeXml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Greedy word wrap by character budget (font is proportional, so budget is conservative). */
function wrap(text: string, maxChars: number): string[] {
  const lines: string[] = []
  let line = ''
  for (const word of text.split(/\s+/)) {
    const next = line ? `${line} ${word}` : word
    if (next.length > maxChars && line) {
      lines.push(line)
      line = word
    } else {
      line = next
    }
  }
  if (line) lines.push(line)
  return lines
}

async function logoDataUri(): Promise<string> {
  const png = await sharp(resolve(ROOT, 'app/assets/company_logo.png')).resize({ width: 380 }).png().toBuffer()
  return `data:image/png;base64,${png.toString('base64')}`
}

function serviceSvg(eyebrow: string, headline: string, logo: string): string {
  const lines = wrap(headline, 28).slice(0, 2)
  const lineHeight = 74
  const firstY = 375
  const headlineTspans = lines
    .map((l, i) => `<tspan x="80" y="${firstY + i * lineHeight}">${escapeXml(l)}</tspan>`)
    .join('')
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0d4226"/>
      <stop offset="0.45" stop-color="#156534"/>
      <stop offset="1" stop-color="#1d8044"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.9" cy="0.1" r="0.6">
      <stop offset="0" stop-color="#22c55e" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#22c55e" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="60" y="56" width="420" height="140" rx="20" fill="#fbf6da"/>
  <image href="${logo}" x="80" y="78" width="380" height="117" preserveAspectRatio="xMidYMid meet"/>
  <text x="80" y="290" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="4" fill="#4ade80">${escapeXml(eyebrow.toUpperCase())}</text>
  <text font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="62" font-weight="800" fill="#fbf6da">${headlineTspans}</text>
  <rect x="80" y="540" width="80" height="6" rx="3" fill="#4ade80"/>
  <text x="180" y="550" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="26" font-weight="600" fill="#fbf6da" fill-opacity="0.75">${escapeXml(CONTACT.websiteDisplay ?? CONTACT.website)}</text>
</svg>`
}

async function main() {
  const logo = await logoDataUri()

  for (const [slug, { detailKey, image }] of Object.entries(SERVICE_OG_IMAGES)) {
    const detail = nl.detail[detailKey]
    const svg = serviceSvg(detail.eyebrow, detail.h1, logo)
    await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(resolve(ROOT, 'public', `.${image}`))
    console.log(`✔ ${slug} → ${image}`)
  }

  // Fallback: the site hero, cropped to OG size and compressed (source is a 6000×4000 original).
  await sharp(resolve(ROOT, 'public/images/IMG_8959.jpg'))
    .rotate()
    .resize(W, H, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(resolve(ROOT, 'public', `.${OG_DEFAULT_IMAGE}`))
  console.log(`✔ default → ${OG_DEFAULT_IMAGE}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
