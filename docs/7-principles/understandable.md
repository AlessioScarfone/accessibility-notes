# Understandable

> [!IMPORTANT]
> Information and the operation of the user interface must be understandable.

## Readable content
A first step to make your content more understandable to everyone, is to make it more readable.

> Guideline [3.1 – Readable](https://www.w3.org/WAI/WCAG22/quickref/#readable) of WCAG says:
> 
> `Make text content readable and understandable.`

Content authors need to ensure that text content is readable and understandable to the broadest audience possible, including when it is read aloud by text-to-speech. Such content includes:
- Identifying the primary language of pages and of page parts
- Providing definitions for any unusual words, phrases, idioms, and abbreviations
- Using the clearest and simplest language possible, or providing simplified versions
Meeting this requirement helps software, including assistive technology, to process text content correctly.

Just like in many word processors, you can also set the default language of your HTML content by using the `lang` attribute of the `html` element to the desired language. This way the browser and assistive technologies know which language the page is in. For example, screen readers can read aloud the content in the appropriate accent and with proper pronunciation. Also dictionaries and grammar checkers, used by many people with cognitive and learning disabilities when filling out forms, also works better when they know the language of the content. 

> [!TIP]
> You can also specify the `lang` attribute on other tags to identify a specific section of content with a different language.

> ### Resources:
> - [Text is readable and understandable](https://www.w3.org/WAI/fundamentals/accessibility-principles/#readable)
>
> ### WCAG Related:
> - [WCAG 2.2 - 3.1 – Readable](https://www.w3.org/WAI/WCAG22/quickref/#readable)


## Predictable content
Many people rely on predictable user interfaces and are disoriented or distracted by inconsistent appearance or behavior. 

> Guideline [3.2 – Predictable](https://www.w3.org/WAI/WCAG22/quickref/#predictable) of WCAG says:
> 
> `Make Web pages appear and operate in predictable ways.`

Examples of making content more predictable include:
- Navigation mechanisms that are repeated on multiple pages appear in the same place each time
- User interface components that are repeated on web pages have the same labels each time
- Significant changes on a web page do not happen without the consent of the user

Meeting this requirement helps people to quickly learn the functionality and navigation mechanisms provided on a website, and to operate them according to their specific needs and preferences.

> ### Resources:
> - [Content appears and operates in predictable ways](https://www.w3.org/WAI/fundamentals/accessibility-principles/#predictable)
>
> ### WCAG Related:
> - [WCAG 2.2 - 3.2 – Predictable](https://www.w3.org/WAI/WCAG22/quickref/#predictable)


## Input assistance

orms and other interaction can be confusing or difficult to use for many people, and, as a result, they may be more likely to make mistakes. 

> Guideline [3.3 – Input Assistance](https://www.w3.org/WAI/WCAG22/quickref/#input-assistance) of WCAG says:
> 
> `Help users avoid and correct mistakes.`

Examples of helping users to avoid and correct mistakes include:
- Descriptive instructions, error messages, and suggestions for correction
- Context-sensitive help for more complex functionality and interaction
- Opportunity to review, correct, or reverse submissions if necessary

Meeting this requirement helps people who do not see or hear the content, and may not recognize implicit relationships, sequences, and other cues. It also helps people who do not understand the functionality, are disoriented or confused, forget, or make mistakes using forms and interaction for any other reason.

- **[Labeling Controls](https://www.w3.org/WAI/tutorials/forms/labels/):** Use the `<label>` element, and, in specific cases, other mechanisms (e.g. WAI-ARIA, title attribute etc.), to identify each form control.
- **[Grouping Controls](https://www.w3.org/WAI/tutorials/forms/grouping/):** Use the `<fieldset>` and `<legend>` elements to group and associate related form controls.
- **[Form Instructions](https://www.w3.org/WAI/tutorials/forms/instructions/):** Provide instructions to help users understand how to complete the form and individual form controls.
- **[Validating Input](https://www.w3.org/WAI/tutorials/forms/validation/):** Validate input provided by the user and provide options to undo changes and confirm data entry.
- **[User Notifications](https://www.w3.org/WAI/tutorials/forms/notifications/):** Notify users about successful task completion, any errors, and provide instructions to help them correct mistakes.
- **[Multi-Page Forms](https://www.w3.org/WAI/tutorials/forms/multi-page/):** Divide long forms into multiple smaller forms that constitute a series of logical steps or stages and inform users about their progress.
- **[Custom Controls](https://www.w3.org/WAI/tutorials/forms/custom-controls/):** Use stylized form elements and other progressive enhancement techniques to provide custom controls.

If possible, forms should not be subject to a time limit to allow users to complete the form at their pace. If a time limit needs to be in place, for example, for security reasons, the user should have the option to turn it off or extend it. This restriction does not apply if the time limit is due to a live event, such as an auction or a game, or if the time to complete the form is essential for a valid submission.
Aside from technical considerations, users usually prefer simple and short forms. Only ask users to enter what is required to complete the transaction or process; if irrelevant or excessive data is requested, users are more likely to abandon the form.


> [!TIP]
> ### Form Checks
> 1. check for **keyboard access** (tab to all the elements and make sure you can activate and interact with them)
> 2. check every form control has a **label** associated with it using `label element` and `for` an `ID` attributes (for drop-donw we can also use `title` attribute)
> 3. any **required field** are marked up as such both programmatically and visually
>     - invalid field must not rely only on color to indicate the error
>     - provide a clear "require indicator" (ex. asterisk)
> 4. any **instruction for completing the form** before they are needed. General information should be placed before the form or the section they relate to.
> 5. check how the form **handles errors** (ex. if you submit a form with errors, the form should be redisplayed with the errors and the focus should be set to the first error)
>     - if you get errors, check that clear and specific guidance is provided to help users understand and fix the errors. 
>     - if the error cibcerbs a format such as date, time or address, check that the correct format is clearly explained
>     - check that errors are easily findable. It is best if the error message are before the form rather then after the form
> 6. Ideally **also positive responses are provided** to confirm that the form has been submitted successfully.
>


> ### Resources:
> - [Users are helped to avoid and correct mistakes](https://www.w3.org/WAI/fundamentals/accessibility-principles/#tolerant)
> - [Form Tutorial](https://www.w3.org/WAI/tutorials/forms/)
> 
> ### WCAG Related:
> - [WCAG 2.2 - 3.3 – Input Assistance](https://www.w3.org/WAI/WCAG22/quickref/#input-assistance)