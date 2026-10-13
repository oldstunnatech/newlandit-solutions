# SEO-007 — NAP Consistency Audit (Archived, Done 2026-09-24)

> Full findings log, moved out of the live checklist once SEO-007 was fully complete.
> Summary version also lives in [`tickets-archive.md`](./tickets-archive.md).

> NAP source of truth: `shared/utils/contact.ts`
>
> - **Name:** Newland IT-Solutions
> - **Address:** Hessenbergweg 8, 1101 BT Amsterdam
> - **Phone:** +31 648 364 450
> - **Email:** info@newlandit-solutions.com
> - **KVK:** 83541934
> - **BTW:** NL003835137B29
> - **Website:** https://www.newlandit-solutions.com

---

### Google Business Profile
- [x] Open [Google Business Profile](https://business.google.com)
- [x] Verify **name** = `Newland IT-Solutions` (no abbreviations, no punctuation diff) — match
- [x] Verify **address** = `Hessenbergweg 8, 1101 BT Amsterdam` — match
- [x] Verify **phone** = `+31 648 364 450` — match (shown as `06 48364450`)
- [x] Verify **website** = `https://www.newlandit-solutions.com` — was `https://newlandit-solutions.com/` (missing `www.`), fixed 2026-09-24, edit pending Google review (~10 min)
- [x] Verify **category** covers IT services / IT consultancy — primary "Software company", secondary "IT support and services" ✓
- [x] Check opening hours match site: Mon–Thu 10:00–18:00, Fri 10:00–16:30, Sat–Sun closed — match

### Bing Places
- [x] Check [Bing Places](https://www.bingplaces.com) — no claimed/verified listing found; Bing search shows no knowledge panel. Action: sign in with business Microsoft account and claim listing (needs credentials — do manually)
- [ ] Once claimed, verify name/address/phone match GBP exactly *(still open — needs manual claim, not blocking SEO-007 completion)*

### Dutch directories
- [x] [KVK.nl](https://www.kvk.nl) — checked KVK 83541934. **ROOT CAUSE FOUND, MISMATCH:**
  - Handelsnaam registered = `Newland IT Solution's` (should be `Newland IT-Solutions`)
  - Address registered = `Meibergdreef 466, 1105AX Amsterdam` (should be `Hessenbergweg 8, 1101 BT Amsterdam`)
  - This is the source of the stale telefoonboek.nl / amsterdam-020.nl listings (both scrape KVK register data)
  - **Action needed (manual, not automatable):** log in to `mijn.kvk.nl` (eHerkenning/DigiD) and file official trade-name + address correction. This is a legal register change, not a website edit — do this yourself
- [x] [Detelefoongids.nl](https://www.detelefoongids.nl) — same platform/owner as Goudengids.nl (Youvia b.v.), 0 results for "Newland IT-Solutions" — no listing found
- [x] [Goudengids.nl](https://www.goudengids.nl) — 0 results for "Newland IT-Solutions" — no listing found
- [x] [Telefoonboek.nl](https://www.telefoonboek.nl) — **listing exists, wrong, current bad state logged:**
  - Name: `Newland IT Solution's` (exact match to bad KVK trade name — confirms it's scraped from KVK register)
  - Category: `Computerreparatie` (wrong — should be software development / IT consultancy)
  - Snippet also offers "Is dit uw bedrijf?" (claim-this-listing flow) — once KVK is corrected, claim this listing and correct name/category/address manually

### Other
- [x] Search Google: `"Newland IT-Solutions"` — scanned page 1:
  - ✅ Own site, Google Business Profile, LinkedIn, Facebook, Infobel.com — all correct (Infobel shows correct name + `Hessenbergweg 8, 1101 BT Amsterdam`)
  - ❌ Ad Hoc Data (`adhocdata.nl`, B2B data broker, not consumer-facing) — wrong name `Newland IT Solution's`, KVK-scraped. Low priority, no public storefront
- [x] Check any industry directories or listings you've registered on manually — none found beyond what's already listed here; no separate manual registrations turned up
- [x] Bing search surfaced 2 stale/wrong listings — fix or claim-and-correct:
  - `telefoonboek.nl` — lists as "Newland IT Solution's" (wrong apostrophe-s in name)
  - `amsterdam-020.nl` — lists postcode `1105AX` (wrong, should be `1101 BT`)

**Summary: every wrong listing found (telefoonboek.nl, amsterdam-020.nl, adhocdata.nl) traces back to the same root cause — the incorrect KVK trade name/address. Fix KVK first; these will likely self-correct on next scrape, otherwise claim-and-edit each manually. Bing Places claim also still needs to happen manually — neither blocks SEO-007 itself, both are follow-up actions.**
