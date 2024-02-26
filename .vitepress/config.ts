import { defineConfig } from 'vitepress'
import { GITHUB_LINK } from './constants'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Accessibility Notes",
  description: "Web Accessibility Notes",
  lastUpdated: true,
  cleanUrls: true,
  srcDir: "docs",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'home_img.png' }],    //favicon
    ['meta', { name: 'lang', content: 'en-US' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Accessibility Notes' }],
    ['meta', { property: 'og:site_name', content: 'Accessibility Notes' }],
    // ['meta', { property: 'og:image', content: 'home_img.png' }],
    // ['meta', { property: 'og:url', content: 'https://vitepress.dev/' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: 'home_img.png', width: 24, height: 24 },
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Guide', link: '/0-accessibility-notes' },
      { text: 'Credits', link: '/credits' },
      {
        text: 'Quick Resources',
        items: [
          { text: 'Resources and Tools', link: '/10-resources' },
          {
            text: "WCAG", items: [
              { text: 'WCAG 2.2', link: 'https://www.w3.org/TR/WCAG22/', },
              { text: 'WCAG Quick Reference', link: 'https://www.w3.org/WAI/WCAG22/quickref/', },
            ]
          },
          { text: "WAI-ARIA 1.2", link: 'https://www.w3.org/TR/wai-aria-1.2/' },
          { text: "WAI Tutorial", link: 'https://www.w3.org/WAI/tutorials/' },
          { text: 'ARIA Authoring Practices Guide', link: 'https://www.w3.org/WAI/ARIA/apg/' }
        ]
      }
    ],
    footer: {
      message: 'Accessibility is essential for some, useful for all.',
      copyright: 'Copyright © 2024-present Alessio Scarfone'
    },
    sidebar: [
      {
        text: 'Introduction and references',
        link: '/0-accessibility-notes',
      },
      { text: 'What is web accessibility?', link: '/1-what-is-web-accessibility' },
      { text: 'Technology enabling people with disabilities', link: '/2-technology-enabling-people-with-disabilities' },
      {
        text: 'Accessibility is for everyone',
        collapsed: false,
        items: [
          {
            text: "Accessibility, Usability, and Inclusion",
            link: "/3-accessibility-for-everyone/accessibility-usability-inclusion"
          },
          {
            text: "Impact and Benefits for Everyone",
            link: "/3-accessibility-for-everyone/impact-and-benefit-for-everyone"
          }
        ]
      },
      {
        text: "People and digital technology",
        collapsed: false,
        items: [
          {
            text: "Physical disabilities",
            link: "/4-people-and-digital-technology/physical-disabilities"
          },
          {
            text: "Hearing and speech disabilities",
            link: "/4-people-and-digital-technology/hearing-and-speech-disabilities"
          },
          {
            text: "Cognition and learning disabilities",
            link: "/4-people-and-digital-technology/cognition-and-learning-disabilities"
          },
        ]
      },
      {
        text: "Essential components of accessibility",
        link: "/5-essential-components-of-accessibility"
      },
      {
        text: "Business cases and benefits",
        link: "/6-business-cases-and-benefits"
      },
      {
        text: "Principles, standards, and checks",
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/7-principles/introduction.md"
          },
          {
            text: "I. Perceivable",
            link: "/7-principles/perceivable.md"
          },
          {
            text: "II. Operable",
            link: "/7-principles/operable.md"
          },
          {
            text: "III. Understandable",
            link: "/7-principles/understandable.md"
          },
          {
            text: "IV. Robust",
            link: "/7-principles/robust.md"
          },
        ]
      },
      {
        text: 'Accessible Rich Internet Applications',
        // collapsed: false,
        items: [
          {
            text: "WAI-ARIA",
            link: "/8-wai-aria/wcag"
          },
          {
            text: "No ARIA is better than Bad ARIA",
            link: "/8-wai-aria/no-aria-better-than-bad-aria"
          }
        ]
      },
      {
        text: 'Accessibility in your organization',
        // collapsed: false,
        items: [
          {
            text: "Discover and Plan",
            link: '/9-accessibility-in-your-organization/discover-and-plan',
          },
          {
            text: "Implement and Maintain",
            link: '/9-accessibility-in-your-organization/implement-and-maintain.md',
          }
        ]
      },
      { text: 'Resources', link: '/10-resources' },
    ],

    socialLinks: [
      { icon: 'github', link: GITHUB_LINK }
    ]
  }
})
