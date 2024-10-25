export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'strf0x's blog,
  DESCRIPTION:
    'blog on my cyber to ai journey',
  EMAIL: 'str.f0x@protonmail.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://voluble-figolla-716fdd.netlify.app/blog/',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/strf0x1', label: 'GitHub' },
  { href: 'https://twitter.com/strf0x1', label: 'Twitter' },
  { href: 'str.f0x@protonmail.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
