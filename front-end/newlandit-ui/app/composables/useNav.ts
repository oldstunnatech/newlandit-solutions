import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n, useLocalePath } from '#imports'

export interface NavChild {
  name: string
  href: string
  children?: NavChild[]
}
export interface NavItem extends NavChild {
  icon: string
}

/**
 * Single source of truth for the primary navigation, shared by SideNav,
 * MobileNav and the default layout. Labels come from i18n; hrefs are run
 * through localePath so the English locale gets its /en prefix.
 */
export function useNav() {
  const { t } = useI18n()
  const localePath = useLocalePath()
  const route = useRoute()

  const navItems = computed<NavItem[]>(() => [
    { name: t('nav.home'), href: localePath('/'), icon: 'lucide:home' },
    {
      name: t('nav.solutions'),
      href: localePath('/solutions'),
      icon: 'lucide:share-2',
      children: [
        {
          name: t('nav.softwareDevelopment'),
          href: localePath('/solutions/software-development'),
          children: [{ name: t('nav.cmsWebsites'), href: localePath('/solutions/cms-websites') }],
        },
        {
          name: t('nav.itConsulting'),
          href: localePath('/solutions/it-consulting'),
          children: [{ name: t('nav.itSupport'), href: localePath('/solutions/it-support') }],
        },
        { name: t('nav.digitalStrategy'), href: localePath('/solutions/digital-strategy') },
      ],
    },
    { name: t('nav.about'), href: localePath('/about'), icon: 'lucide:user' },
    { name: t('nav.contact'), href: localePath('/contact'), icon: 'lucide:mail' },
  ])

  const home = computed(() => localePath('/'))
  const isActive = (href: string) =>
    href === home.value ? route.path === href : route.path === href || route.path.startsWith(href + '/')

  return { navItems, isActive }
}
