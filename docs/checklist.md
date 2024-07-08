# Basic accessibility easy checks

This page is a minimal entry-level guide with the aim of helping users to a minimal set of tests to check if web content is accessible.

> [!WARNING] 
> ⚠️ Remember: automatic tools not cover all possibilities and tests 

**References and useful resources:**
- [W3C - WAI: Accessibility Checklist](https://www.w3.org/WAI/test-evaluate/preliminary/)
- [WP: Accessibility Checklist](https://build.washingtonpost.com/resources/accessibility/accessibility-checklist)-
- [A11Y Project: Checklist](https://www.a11yproject.com/checklist/)

## Screen Reader & Keyboard

### Keyboard navigation

- Test navigation using the `Tab` (and `Shift` + `Tab`) key to cycle through interactive elements. Ensure elements receive appropriate focus styles and are clickable using the `Enter` and `Space` keys.
- Each `Tab` press should cause a visible change on the page; if not, there may be a **missing focus style or tab index issue**.

> **Minimal Keyborad controls:**
> 
> - `Tab`: Next focusable element
> - `Shift+Tab`: Previous focusable element
> - `Enter`: "Click" currently focused link or button
> - `Space`: Scroll down the page or — if applicable — "click" currently focused button (includes toggling a checkbox or radio > button)
> - `Up/Down arrows`: Scroll up/down the page or — if applicable — move between radio buttons and, in some cases, menu links
> - `Right/Left arrows`: Adjust sliders in audio and video players or, in some cases, move between menu links
> - `Escape`: Close an element that has appeared dynamically (ex: popup menu or dialog). After the element closes, focus should return to where it was before the element was opened.

### Test with screen reader
- Use a screen reader to navigate the page from top to bottom.
- Ensure all visible text is read: aloud, correctly and in the right order.
- Click with a mouse to position the screen reader for specific parts of the page.
- Open the screen reader rotor and ensure that all interactive elements have descriptive names. Avoid generic names like "click here" for links and buttons.

### Check heading order

Check the order of page headings. Ensure there is only one **h1** (page title) and subsequent headings follow a logical hierarchy (e.g., h2, h3).

### Confirm page landmarks are Present and Correct:

Check for essential landmarks (e.g., **main**, **nav**, **header**, **footer**).
Ensure additional content like sidebars is correctly tagged (e.g., **aside**). Verify that landmarks contain the appropriate content to help screen readers scan the page efficiently.

## Text, labels & zoom settings

### All text must be readable

- Use plain language to make content understandable and avoid overly complex terms and jargon unless necessary, providing definitions when used.

- Verify that all interactive elements (buttons, links, forms) have descriptive labels.
Use `aria-label`, `aria-labelledby`, or `<label> `to ensure screen readers read the correct information.

> [!NOTE]
> Placeholder text in forms can not be used as a replacement for labels.

### Test text and layout with zoom

Test the website at 200% and 400% zoom levels to ensure content remains readable and functional.
Checks that text does not become truncated or overlap with other elements and verify that users can scroll both vertically and horizontally to access all content when zoomed in.

## Color

### Text must have sufficient contrast

Ensure that text has a contrast ratio of at least **4.5:1** against its background and for large text (18pt and larger, or 14pt and bold) should have a contrast ratio of at least **3:1**. You can use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) or [Adobe Color](https://color.adobe.com/it/create/color-contrast-analyzer). 

Text over gradients, images, or patterns needs extra attention to meet contrast requirements.
Ensure color combinations meet the AA color contrast standard for colorblind users among at least the three most common forms of colorblindness.

> [!TIP]
> - **White text on a pure black background** causes a fuzziness known as halation for many users with astigmatism
> - **Black text on a pure white background** causes eye strain among many users.
> - **Dark mode and light mode** should both be supported.

Ensure that color is not the only method used to convey information. Use text labels, patterns, or other visual elements in addition to color.


## Multimedia

### Ensure all images have an alternative text
Write appropriate `alt` text for images following the [guidelines](https://build.washingtonpost.com/resources/accessibility/alt-text).
- Decorative images should have `alt=""` in the HTML.
- Videos and GIFs should have text descriptions for screen reader users.

### Test with Reduced Motion
Enable reduced motion settings and refresh the page. Ensure non-essential animations and moving content are eliminated.
Use the `prefers-reduced-motion` media query to modify behavior as needed.

### Hide Useless Content from Screen Readers
Add `aria-hidden="true"` to content not suitable for screen readers and provide accessible alternatives


### Audio, video and rapidly flashing content

- Avoid auto-playing video, animations, and graphics (including GIFs) and ensure that all multimedia has an accessible pause, stop, or hide button.
- Ensure videos, GIFs, and animations do not flash or blink more than three times per second to avoid seizure risks.
- Provide transcripts for all audio content (covering spoken words and meaningful sounds).