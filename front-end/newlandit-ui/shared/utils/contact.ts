import type { ContactInfo } from '../types/company'

export const CONTACT: ContactInfo = {
  phone: '+31 648 364 450',
  phoneHref: 'tel:+31648364450',
  email: 'info@newlandit-solutions.com',
  emailHref: 'mailto:info@newlandit-solutions.com',
  website: 'https://www.newlandit-solutions.com',
  websiteDisplay: 'www.newlandit-solutions.com',
  kvk: '83541934',
  btw: 'NL003835137B29',
  startYear: 2021,
  address: {
    street: 'Hessenbergweg 8',
    postalCode: '1101 BT',
    city: 'Amsterdam',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Hessenbergweg+8,+1101+BT+Amsterdam&output=embed',
  },
  openingHours: [
    { label: 'Mon - Thu', hours: '10:00 - 18:00 (by appointment)' },
    { label: 'Fri', hours: '10:00 - 16:30 (by appointment)' },
    { label: 'Sat', hours: 'Closed' },
    { label: 'Sun', hours: 'Closed' },
  ],
  closedHolidays:
    "New Year's Day, Good Friday, Christmas Day and Boxing Day (December 25 & 26)",
}
