import { defineConfig } from 'vitepress'
import { GITHUB_LINK } from './constants'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Accessibility Notes",
  description: "Web Accessibility Notes",
  // lastUpdated: true,
  cleanUrls: true,
  base: '/accessibility-notes/', //deploy on GH Page
  srcDir: "docs",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'home_img.png' }],    //favicon
    ['meta', { name: 'lang', content: 'en-US' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Accessibility Notes' }],
    ['meta', { property: 'og:site_name', content: 'Accessibility Notes' }],
    ['meta', { property: 'og:image', content: 'https://accessibility-notes.vercel.app/og_image.png' }],
    // ['meta', { property: 'og:url', content: 'https://vitepress.dev/' }],

    // Vercel Analytics
    ['script', { src: "/_vercel/insights/script.js", defer: 'true' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: 'home_img.png', width: 24, height: 24 },
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Guide', link: '/accessibility-notes' },
      { text: 'Credits', link: '/credits' },
      {
        text: 'Quick Resources',
        items: [
          { text: 'Resources and Tools', link: '/resources' },
          { text: 'Easy Checks', link: '/checklist' },
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
      message: '<i>Accessibility is essential for some, useful for all.</i>',
      copyright: 'Copyright © 2024-present Alessio Scarfone'
    },
    sidebar: [
      { text: 'Introduction and references', link: '/accessibility-notes', },
      {
        text: 'Accessibility is for everyone',
        collapsed: false,
        items: [
          { text: 'What is web accessibility?', link: '/accessibility-for-everyone/what-is-web-accessibility' },
          { text: 'Technology enabling people with disabilities', link: '/accessibility-for-everyone/technology-enabling-people-with-disabilities' },
          {
            text: "Accessibility, Usability, and Inclusion",
            link: "/accessibility-for-everyone/accessibility-usability-inclusion"
          },
          {
            text: "Impact and Benefits for Everyone",
            link: "/accessibility-for-everyone/impact-and-benefit-for-everyone"
          }
        ]
      },
      {
        text: "People and digital technology",
        collapsed: false,
        items: [
          {
            text: "Physical disabilities",
            link: "/people-and-digital-technology/physical-disabilities"
          },
          {
            text: "Hearing and speech disabilities",
            link: "/people-and-digital-technology/hearing-and-speech-disabilities"
          },
          {
            text: "Cognition and learning disabilities",
            link: "/people-and-digital-technology/cognition-and-learning-disabilities"
          },
          {
            text: "Essential components of accessibility",
            link: "/people-and-digital-technology/essential-components-of-accessibility"
          },
        ]
      },
      {
        text: "Principles, standards, and checks",
        collapsed: false,
        items: [
          {
            text: "Principles, standards, and checks",
            link: "/principles/principles-standard-checks.md"
          },
          {
            text: "I. Perceivable",
            link: "/principles/perceivable.md"
          },
          {
            text: "II. Operable",
            link: "/principles/operable.md"
          },
          {
            text: "III. Understandable",
            link: "/principles/understandable.md"
          },
          {
            text: "IV. Robust",
            link: "/principles/robust.md"
          },
        ]
      },
      {
        text: 'Accessible Rich Internet Applications',
        collapsed: false,
        items: [
          {
            text: "WAI-ARIA",
            link: "/wai-aria/wcag"
          },
          {
            text: "No ARIA is better than Bad ARIA",
            link: "/wai-aria/no-aria-better-than-bad-aria"
          }
        ]
      },
      {
        text: 'Accessibility in your organization',
        collapsed: false,
        items: [
          {
            text: "Business cases and benefits",
            link: "/accessibility-in-your-organization/business-cases-and-benefits"
          },
          {
            text: "Discover and Plan",
            link: '/accessibility-in-your-organization/discover-and-plan',
          },
          {
            text: "Implement and Maintain",
            link: '/accessibility-in-your-organization/implement-and-maintain.md',
          }
        ]
      },
      {
        text: 'Additional resources',
        // collapsed: false,
        items: [
          { text: 'Basic accessibility checklist', link: '/checklist' },
          { text: 'Resources', link: '/resources' },
        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: GITHUB_LINK }
    ]
  }
})
