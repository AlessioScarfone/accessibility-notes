import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Accessibility Notes ♿",
  description: "Web Accessibility Notes",
  lastUpdated: true,
  cleanUrls: true,
  srcDir: "docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Guide', link: '/0-accessibility-notes' },
    ],
    footer: {
      message: 'Accessibility is essential for some, useful for all.',
      copyright: 'Copyright © 2014-present Alessio Scarfone'
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
      { icon: 'github', link: 'https://github.com/AlessioScarfone' }
    ]
  }
})
