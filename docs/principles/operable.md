# Operable

> [!IMPORTANT]
> User interface components and navigation must be operable.

## Keyboard accessible

The keyboard is for many people the primary or only way of using the computer. If all functionality of a webpage works using only a keyboard, that means it can also be used by people using speech input (which creates keyboard input), by mouse (using on-screen keyboards), and by a wide variety of assistive technologies.

> Guideline [2.1 – Keyboard Accessible](https://www.w3.org/WAI/WCAG22/quickref/#keyboard-accessible) of WCAG says:
> 
> `Make all functionality available from a keyboard.`

Keyboard accessibility includes:

- All functionality that is available by mouse is also available by keyboard.
- Keyboard focus does not get **trapped** in any part of the content.
- Web browsers, authoring tools, and other tools provide keyboard support.


> [!TIP]
> ### Tests for keyboard and visual focus
> 1. **Tab to all:** check that you can tab to all content (A common problem is that you cannot tab to media player controls)
> 2. **Tab away from all element:** check that you can tab away from all elements that you can tab into. (ex. focus gets caught in media controls and you cannot get out - "keyboard trap")
> 3. **Tab order:** check that tab order follows the logical reading order sequence (based on the language used)
> 4. **Visual focus:** check that the focus is clearly visible as you tab through the elements.
> 5. **Functionality:** check that you can do everything with the keyboard; that is, you don't need the mouse to acrivete actions, options, visible changes, and other funcionality (ex. a common problem is that some funcionality is available only with mouse hover and is not available with keyboard focus)
> 6. **Drop-downs:** check that you can open/close/navigate (with arrow up and down) them with the keyboard.
> 7. **Image links:** in this case they should have a clear visible focus and they can be actived

> ### Resources:
> - [Functionality is available from a keyboard](https://www.w3.org/WAI/fundamentals/accessibility-principles/#keyboard)
>
> ### WCAG Related:
> - [WCAG 2.2 - 2.1 – Keyboard Accessible](https://www.w3.org/WAI/WCAG22/quickref/#keyboard-accessible)


## Enough time
Some people need more time than others to read and use the content. For instance, some people require more time to type text, understand instructions, operate controls, or to otherwise complete tasks on a website. For example, it may take more time for someone with a learning disability to read text, and for someoune using a switch control to complete a form. Provide clear information about the available time and instruction for extending it is essential for many people. Another related issue is content that continually moves, blinks, scrolls, or updates automatically (ex. carusel). The [**carusel component**](https://www.w3.org/WAI/tutorials/carousels/) are also often large and change quickly. This can be a very distracting for many people.

> Guideline [2.2 – Enough Time](https://www.w3.org/WAI/WCAG22/quickref/#enough-time) of WCAG says:
> 
> `Provide users enough time to read and use content.`

Examples of providing enough time include providing mechanisms to:

- Stop, extend, or adjust time limits, except where necessary.
- Pause, stop, or hide moving, blinking, or scrolling content.
- Postpone or suppress interruptions, except where necessary.
- Re-authenticate when a session expires without losing data.

> ### Resources:
> - [Users have enough time to read and use the content](https://www.w3.org/WAI/fundamentals/accessibility-principles/#time)
> - [Carousels Tutorial](https://www.w3.org/WAI/tutorials/carousels/)
>
> ### WCAG Related:
> - [WCAG 2.2 - 2.2 – Enough Time](https://www.w3.org/WAI/WCAG22/quickref/#enough-time)


## Avoid seizures and physical reactions
Content that flashes at certain rates (not flash or blink more then 3 times per second) or patterns can cause photosensitive reactions, including seizures. Flashing content is ideally avoided entirely or only used in a way that does not cause known risks. Also animations and moving content can cause discomfort, nausea and physical reactions. Animated media must not auto-play for more then 5 seconds. If you plan to have animations go on longer then 5 seconds or play on an infinite loop, provide a way for user to pause the animation. Animations that cannot be paused can be extremely distracting for people with different type of cognitive disabilities.

> Guideline [2.3 – Seizures and Physical Reactions](https://www.w3.org/WAI/WCAG22/quickref/#seizures-and-physical-reactions) of WCAG says:
> 
> `Do not design content in a way that is known to cause seizures or physical reactions.`


> [!TIP]
> The `prefers-reduced-motion` CSS media feature is used to detect if a user has enabled a setting on their device to minimize the amount of non-essential motion. 
> The setting is used to convey to the browser on the device that the user prefers an interface that removes, reduces, or replaces motion-based animations.
>
> ```css
> @media (prefers-reduced-motion) {
>   /* styles to apply if a user's device settings are set to reduced motion */
> }
> ```
>
> [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)



> ### Resources:
> - [Content does not cause seizures and physical reactions](https://www.w3.org/WAI/fundamentals/accessibility-principles/#safe)
>
> ### WCAG Related:
> - [WCAG 2.2 - 2.3 – Seizures and Physical Reactions](https://www.w3.org/WAI/WCAG22/quickref/#seizures-and-physical-reactions)


## Navigable content

Well organized content helps users to orient themselves and to navigate effectively. People navigate your content in a variety of ways, and the more structures and "semantics" you provide in your content, the easier it is for people to navigate. For example: adding headings and labels to you content to separating large blocks of content into smaller, more manageable sections. Another impotant aspect is to provide clear and consistent page titles. Web page titles should similarly reflect the content and purpose of the page.

> Guideline [2.4 – Navigable](https://www.w3.org/WAI/WCAG22/quickref/#navigable) of WCAG says:
> 
> `Provide ways to help users navigate, find content, and determine where they are.`

Meeting this requirement helps people to navigate through web pages in different ways, depending on their particular needs and preferences.

- Pages have **clear and descriptive titles** and are organized using **descriptive section headings**
- There is more than one way to **find relevant pages** within a set of web pages
- Users are **informed about their current location** within a set of related pages
- There are ways to **bypass blocks of content** that are repeated on multiple pages
- The **keyboard focus is visible**, and the **focus order** follows a meaningful sequence
- The **purpose of a link is evident**, ideally even when the link is viewed on its own


### Check Page Title, who does this help?
**Page title** are shown in the browser title bar. They helps:
- People who use screen readers: the title is the first thing they hear when they land on a page.
- People using braille
- People with visual disabilities
- People with cognitive disabilities, limited short-term memory and reading disabilities
- People using speech input
- Page title are also used by search engines.

> [!TIP]
> 1. Make the title page informative
> 2. Putting the most important information first (ex: "Contact us - Company Name" instead of "Company Name - Contact us" ) 

> ### Resources:
> - [Users can easily navigate, find content, and determine where they are](https://www.w3.org/WAI/fundamentals/accessibility-principles/#navigable)
>
> ### WCAG Related:
> - [WCAG 2.2 - 2.4 – Navigable](https://www.w3.org/WAI/WCAG22/quickref/#navigable)


## Input modalities

People use many more modalities then keyboard and mouse to interact with computers and the web, such as: touch activation and voice recognition (speech input). Also gestures, lik shaking, tapping or moving your mobile phone have become quite common. 

> Guideline [2.5 – Input Modalities](https://www.w3.org/WAI/WCAG22/quickref/#input-modalities) of WCAG says:
> 
> `Make it easier for users to operate functionality through various inputs beyond keyboard.`

Meeting this requirement makes the content easier to use for many people with a wide range of abilities using a wide range of devices. This includes content used on mobile phones, tablet computers, and self-service terminals such as ticketing machines. The key aspect is to **design functionally** in such a way, so thati it accepts input from a variety of devices and input methods. Particular design considerations maximize the benefit of these input modalities. This includes:
- Gestures that require dexterity or fine movement have alternatives that do not require high dexterity
- Components are designed to avoid accidental activation, for example by providing undo functionality
- Labels presented to users match corresponding object names in the code, to support activation by voice
- Functionality that is activated by movement can also be activated through user interface components
- Buttons, links, and other active components are large enough to make them easier to activate by touch


> ### Resources:
> - [Users can use different input modalities beyond keyboard](https://www.w3.org/WAI/fundamentals/accessibility-principles/#modalities)
>
> ### WCAG Related:
> - [WCAG 2.2 - 2.5 – Input Modalities](https://www.w3.org/WAI/WCAG22/quickref/#input-modalities)