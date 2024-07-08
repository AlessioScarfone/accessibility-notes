# Perceivable

> [!IMPORTANT]
> Information and user interface components must be presentable to users in ways they can perceive.

## Text Alternatives
**Images and graphics make content more pleasant and easier to understand for many people**, and in particular for those with cognitive and learning disabilities. They serve as cues that are used by people with visual impairments, including people with low vision, to orient themselves in the content.

> Guideline [1.1 Text Alternatives](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#qr-text-equiv-all) of WCAG says:
> 
> `Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.`

Images can have various function such as:
- **Pictures in context/Informative images**: they are part of the content and convey meaning. For example: a picture of a product on a shopping site. Depending on the context you may want to highlight some specific aspect of the image beyond a simple description.
- **Functional images**: the text alternative of an image used as a link or as a button should describe the functionality of the link or button rather than the visual image.They are not part of the content but they perform a function.  
- **Images of text**: readable text is sometimes presented within an image. If the image is not a logo, avoid text in images. However, if images of text are used, the text alternative should contain the same words as in the image.
- **Decorative images**: they are used purely for visual decoration, and do not provide information or functionality. For example: a background image or separator. In this case the text alternative should be empty (`alt=""`). Doing this communicates to assistive technologies that it is safe to ignore this image. 
(**NOTE**: an empty/null alternative is not the same as a missing alternative text attribute!)
- **Complex images**: such as graphs and diagrams: To convey data or detailed information, provide a complete text equivalent of the data or information provided in the image as the text alternative.

For a quick overview on deciding which category (decorative, informative, actionable) a particular image fits into, see the alt [Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/).

Remember, **alternative text must be succict** and is not need to use phrases such as "image of" or "picture of". For example: `alt="A red apple on a white background"` is better than `alt="A picture of a red apple on a white background"`. Most of the time, the format of the file is conveyed to the assistive technology device.

In HTML, a common way of providing text altenratives is to use the `alt` attribute of the `img` element. This is supported by most web browser and assistive technologies.

Accessible images are beneficial in many situations, such as:
- screen reader users
- braille output device users
- users who do not udenrstand visual content

> [!WARNING] 
> ⚠️ Automatic tools are good at providing information about image alternative text but it cannot tell you if the alternative text makes any sense to a user. 

> ### Resources:
> - [Images Tutorial](https://www.w3.org/WAI/tutorials/images/)
> - [Text alternatives for non-text content](https://www.w3.org/WAI/fundamentals/accessibility-principles/#alternatives)
> - [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)
>
> ### WCAG Related:
> - [WCAG 2.2 - 1.1 Text Alternatives](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#qr-text-equiv-all)
> - [WCAG 2.2 - 1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#qr-visual-audio-contrast-text-presentation)
> - [WCAG 2.2 - 1.4.9 Images of Text (No Exception)](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#qr-text-equiv-all)


## Time-based media

> Guideline [1.2 Time-based Media](https://www.w3.org/WAI/WCAG22/quickref/#time-based-media) of WCAG says:
> 
> `Provide alternatives for time-based media.`

This includes:
- audio-only files (ex. podcasts)
- video-only files (ex. silent video)
- video plus audio (ex. movie)
- slideshows and presentations with visual and/or audio information that is time-based.

These elements need to have alternative formats for people who:
- do not hear the audio information
- do not see the visual information
- cannot process the information in the provided time

There are four primary methods for providing altneratives for time-based media:
- Provide **captions** (also called “subtitles”) so that people who are deaf and hard-of-hearing get a text version of the speech and non-speech audio information needed to understand the content.
- Provide a **transcript**, that is, a text version of the speech and non-speech audio information. Ideally, make it a descriptive transcript that also includes text description of the visual information. 
- Provide **description** so that people who are blind and others who cannot see the video adequately get the visual information needed to understand the content. 
- Provide **sign language** when your audience needs it, so that deaf people whose native language is sign get the content in their native language.


> ### Resources:
> - [Captions and other alternatives for multimedia](https://www.w3.org/WAI/fundamentals/accessibility-principles/#captions)
> - [Making Audio and Video Media Accessible](https://www.w3.org/WAI/media/av/)
>
> ### WCAG Related:
> - [WCAG 2.2 - 1.2 Time-based Media](https://www.w3.org/WAI/WCAG22/quickref/#time-based-media)


## Adaptable content
Content can be presented in many differnet ways. For example: a web page can be presented visually on a screen, as a braille display, as synthesized speech, as a tactile image, etc. **The same information can be presented in different ways**. Peoples might need to adapt the visual presentation in another way, so it is important that your content is adaptable.

> Guideline [1.3 Adaptable](https://www.w3.org/WAI/WCAG22/quickref/#adaptable) of WCAG says:
> 
> `Create content that can be presented in different ways (for example simpler layout) without losing information or structure.`

For users to be able to change the presentation of content, it is necessary that:

- Headings, lists, tables, input fields, and **content structures are marked-up/coded properly**.
- Sequences of information or instructions are **independent of any presentation**.
- Browsers and assistive technologies provide **settings to customize the presentation**.

Meeting this requirement allows content to be correctly read aloud, enlarged, or adapted to meet the needs and preferences of different people. For instance, it can be presented using custom color combinations, text size, or other styling to facilitate reading. This requirement also facilitates other forms of adaptation, including automatic generation of page outlines and summaries to help people get an overview and to focus on particular parts more easily.

Pages with well-structured content are essential for many web users, for example: people with cognitive and learning disabilities, people with limited short-term memory, people using screen reader, keyboard users, mobile users, etc.

Special notes to [Tables](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#qr-navigation-mechanisms-headings): accessible tables need HTML markup that indicates header cells and data cells and defines their relationship. Assistive technologies use this information to provide context to users. Header cells must be marked up with `<th>`, and data cells with `<td>` to make tables accessible. For more complex tables, explicit associations may be needed using scope, id, and headers attributes.

> ### Page Structure
> Well-structured content allows more efficient navigation and processing. Use **HTML and WAI-ARIA** to improve navigation and orientation on web pages and in applications.
> - [Page Regions](https://www.w3.org/WAI/tutorials/page-structure/regions/): Identify and mark up regions on web pages using HTML5 and WAI-ARIA roles (es: header, footer, nav etc).
> - [Labeling Regions](https://www.w3.org/WAI/tutorials/page-structure/labels/): Label regions to allow users to distinguish and access them. (ex. provide labels to distinguish two page regions of the same type, such as “main navigation” and “sub-navigation” menus using a `<nav>` element on the same page)
> - [Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/): Add headings and nest them logically to label sections of web pages according to their relationships and importance. Respect the heading ranks (h1, h2, h3, etc.) and do not skip heading levels.
> - [Content Structure](https://www.w3.org/WAI/tutorials/page-structure/content/): Mark up the content on a page in a way that uses appropriate and meaningful elements. Valid semantics create content that is reusable and more meaningful to assistive technologies.

> [!TIP]
> ### Basic Structure Checks
> 1. turn off images and show text alternatives
> 2. turn off styles
> 3. linearize the page (page will appears in a single column)
>
> You can also view the headings by viewing the document outline.

> ### Resources:
> - [Content can be presented in different ways](https://www.w3.org/WAI/fundamentals/accessibility-principles/#adaptable)
> - [Page Structure Tutorial](https://www.w3.org/WAI/tutorials/page-structure/)
> - [Tables Tutorial](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#qr-navigation-mechanisms-headings)
>
> ### WCAG Related:
> - [WCAG 2.2 - 1.3 Adaptable](https://www.w3.org/WAI/WCAG22/quickref/#adaptable)
> - [WCAG 2.2 - 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#qr-navigation-mechanisms-descriptive)
> - [WCAG 2.2 - 2.4.10 Section Headings](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#qr-navigation-mechanisms-headings)


## Distinguishable content

Another important aspect of content design and development is to ensure that people can distinguish relevant information. This check is concerned with making the default presentation as easy to perceive as possible to people with disabilities.

> Guideline [1.4 Distinguishable](https://www.w3.org/WAI/WCAG22/quickref/#distinguishable) of WCAG says:
> 
> `Make it easier for users to see and hear content including separating foreground from background.`

Distinguishable content is easier to see and hear. Such content includes:
- **Color is not used as the only way of conveying information or identifying content.**
  - Some people perceive colors differently or not at all. Providing instructions like "complete all fields marked in red" is not sufficient because some people will not find these form fields marked in red. In addition to or instead of using color, you need to use another identifier that does not rely on using color alone (for example an `*` next to the field).

- **Default foreground and background color combinations provide sufficient contrast.**
  - One thing is to provide sufficient contrast between foreground and background color (technically called <u>*color luminosity contrast ratio*</u>, or simply *contrast ratio* for short). Low contrast between text and background can make text difficult to read. This is especially true for people with low vision, but also for people with cognitive and learning disabilities, and for people using mobile devices in bright sunlight. 
  There are several tools to help calculate the contrast ratio and select appropriate color combiantion. The contrast contrast ratio should be at least: **4.5:1** (1.4.3 - Contrast "Minimum" - Level AA) and **7:1** (1.4.6 - Contrast "Enhanced" - Level AAA) for text. For graphical objects, such as charts, and for large text, a contrast ratio of **3:1** is acceptable.

- **Content must be resaizable without losing information**
  - **When users resize text up to 200% or change text spacing, no information is lost.**
  - **Text reflows in small windows (“viewports”) and when users make the text larger.**
  - **Images of text are resizable, replaced with actual text, or avoided where possible.**

- **Ensure that audio content is controllable**
  - **Users can pause, stop, or adjust the volume of audio that is played on a website.**
  - **Background audio is low or can be turned off, to avoid interference or distraction.**

> ### Resources:
> - [Content is easier to see and hear](https://www.w3.org/WAI/fundamentals/accessibility-principles/#distinguishable)
>
> ### WCAG Related:
> - [WCAG 2.2 - 1.4 Distinguishable](https://www.w3.org/WAI/WCAG22/quickref/#distinguishable)