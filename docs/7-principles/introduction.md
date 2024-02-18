# Principles, standards, and checks

w3C Web accessibility Initiative (WAI) guidelines for digital accessibility, includes:


- **[Web content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)**: defines requirements on how to make Web content such as text, images, multimedia, etc. accessible to people with disabilities. It is the most well known and widely used set of guidelines. It is also the most technical and is aimed at web developers and designers.
- **[Authoring Tool Accessibility Guidelines (ATAG)](https://www.w3.org/WAI/standards-guidelines/atag/)**: defines requirements on how to make the authoring tools themselves accessible, so that people with disabilities can create web content. It also defines requirements how authors can create accessible web content and conform to WCAG.
- **[User Agent Accessibility Guidelines (UAAG)](https://www.w3.org/WAI/standards-guidelines/uaag/)**: provides guidance on how to make user agents accessible to poeple with disabilities. User agents include web browsers, browser extension, media players, readers.

These address different aspects, from creation of digital content by designers, developers, and content authors, to use and interaction by people. All these parts are equally important to ensure accessibliity.


> [!NOTE]
> **W3C Test page:**
> - [Demo page before - unaccessible](https://www.w3.org/WAI/demos/bad/before/home.html)
> - [Demo page after - accessible](https://www.w3.org/WAI/demos/bad/after/home.html)
>
> **Tools**
> - [Wave browser extension](https://wave.webaim.org/extension/)
> - [Web Developer tools](https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm)

# POUR principless

The [**W3C Web Content Accessibility Guidelines (WCAG)**](https://www.w3.org/WAI/standards-guidelines/wcag/) defines four principles:

1. **Perceivable** - information can be **<u>presented in different ways</u>**; for example, in braille, different text size, text-to-speech, symbols, pictures, etc.
2. **Operable** - functionality can be **<u>used in different ways</u>**; for example, keyboard, mouse, voice, touch, etc
3. **Undestandable** - **<u>information and functionality is understandable</u>**; for example consistent navigation, simple language, etc.
4. **Robust** - content can be **<u>interpreted reliably by a wide variety of user agents</u>**, such as browser, media player and assistive technologies.

There area currently **two stable version** of WCAG that are both supported by W3C:
- **WCAG 2.0**: published in December 2008, it is the most widely used version of WCAG. It is also the basis for most accessibility laws and policies around the world. It defines 12 Guidelines under the four POUR principles. Under each guideline there are more specif *Success Criteria* divided into three **Conformance Levels: A, AA, AAA**. WCAG 2.0 defines 61.
- **WCAG 2.1**: published in June 2018, to better address accessibility for people with cognitive and learning disabilities, people with low vision and people with disabilities using mobile devices. WCAG 2.1 is fully backward compatibile with WCAG 2.0, so that if your content conforms to WCAG 2.1 it also conforms to WCAG 2.0.
It defines 13 Guidelines under the four POUR principles and 78 *Success Criteria*.

> **Many policies require conformance to <u>WCAG Level AA</u>** and sometimes WCAG is adopted directly, for example by reference, in a policy. At other times it is adopted indirectly, for example throught the European Standard "EN 301 549", which includes all requirements from WCAG 2.1.
>
> WCAG is a normative W3C web standard called "W3C Recommendation". It is designed to be technology-agnorstic so that it applies to different technologies. For example, it does not specify how to code a heading, list or table, but it requires that such structures are present. This allows WCAG to be applicable to a wide range of technologies, including HTML, CSS, SVG, PDF, etc. The W3C Recommendation are developed transparently in a open collaborative space and are developed with the involvement of many experts from around the world. During the development of W3C standards, working groups regularly issue Working Drafts for review and commets by any member of the public.