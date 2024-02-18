# Accessible Rich Internet Applications (WAI-ARIA)

> [!IMPORTANT]
> **WAI-ARIA, the Accessible Rich Internet Applications Suite**, defines a way to make Web content and Web applications more accessible to people with disabilities. It especially helps with dynamic content and advanced user interface controls developed with HTML, JavaScript, and related technologies. 
>
> - [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/) was published as a completed W3C Recommendation on 6 June 2023.
> - [WAI-ARIA Overview](https://www.w3.org/WAI/standards-guidelines/aria/)

Without WAI-ARIA certain functionality used in Web sites is not available to some users with disabilities, especially people who rely on screen readers and people who cannot use a mouse. It provides semantics so authors can convey user interface behaviors and structural information to assistive technologies, it provides an ontology of roles, states, and properties that define accessible user interface elements.

In another way, WAI-ARIA defines a collection of attributes to help modify incorrect markup and bridge gaps in HTML to create more accessible experience to those using assistive technologies. It does not change your web page from visual prospective, unless you add styling to your CSS that specifically targets WAI-ARIA. This means that no one except assistive technology devices wil notice any differences between a page with WAI-ARIA and a page without it.

> [!WARNING]
> It is important to note that **<u>WAI-ARIA is not a replacement for proper HTML semantics</u>**, but rather a supplement to it.

## Technical Solutions

- WAI-ARIA provides a framework for adding attributes to identify features for user interaction, how they relate to each other, and their current state. 
- WAI-ARIA describes navigation techniques to mark regions and common Web structures as menus, primary content, secondary content, banner information, and other types of Web structures.
- WAI-ARIA also includes technologies to map controls, live regions, and events to accessibility application programming interfaces (APIs), including custom controls used for rich Internet applications. WAI-ARIA techniques apply to widgets such as buttons, drop-down lists, calendar functions, tree controls (for example, expandable menus), and others.

> It also includes modules for Graphics and Digital Publishing.

**WAI-ARIA provides Web authors with the following:**

- Roles to **describe the type of widget presented**, such as “menu”, “treeitem”, “slider”, and “progressbar”
- Roles to **describe the structure of the Web page**, such as headings, and regions
- Properties to **describe the state widgets** are in, such as “checked” for a check box, or “readonly” for most form controls
- Properties to **define live regions** of a page that are likely to get updates (such as stock quotes)
- A way to **provide keyboard navigation** for the Web objects and events, such as those mentioned above


> Example:
> Use role attributes to repurpose HTML elements used for tab controls and tab panels:
> - `role="tablist"`
> - `role="tab"`
> - `role = "tabpanel"`
> Use `aria-selected` attributes to expose status of the tab controls and tabpanels to assistive technologies.
> - `aria-selected="true"` indicates the tab control is actived and its associated panel is displayed.
> Use the other `aria-*` attributes and implement keyboard support needed.
>
> In this way, you can make the tabs and tabpanels UI machine-readable to user agents and assistive technologies. nad accessible to screen reader users and sighted keyboard users.

## Resources: Authoring Practices Guide (APG)

> [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/), recommends approaches to help web application developers make widgets, navigation, and behaviors accessible using WAI-ARIA roles, states, and properties.
>
> It describes considerations that might not be evident to most authors from the WAI-ARIA specification, which is oriented primarily at user agent implementers.
>
> - [Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/): Learn how to make accessible web components and widgets with ARIA roles, states and properties and by implementing keyboard support.
> - [Landmark Regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/): Learn how to use HTML sectioning elements and ARIA landmark roles to make it easy for assistive technology users to understand the meaning of the layout of a page.
> - [Providing Accessible Names and Descriptions](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/): Providing elements with accessible names and, where appropriate, accessible descriptions is one of the most important responsibilities authors have when developing accessible web experiences.
> - [And So Much More...](https://www.w3.org/WAI/ARIA/apg/practices/): Learn about other fundamental practices related to correctly using accessibility semantics, developing keyboard interfaces, and more.