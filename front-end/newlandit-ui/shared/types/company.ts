export interface ContactInfo {
  phone: string
  phoneHref: string
  email: string
  emailHref: string
  website: string
  websiteDisplay?: string
  kvk: string
  btw: string
  startYear: number
  address: CompanyAddress
  openingHours: OpeningHoursEntry[]
  closedHolidays: string
}

export interface CompanyAddress {
  street: string
  postalCode: string
  city: string
  mapEmbedUrl: string
}

export interface OpeningHoursEntry {
  label: string
  hours: string
}
