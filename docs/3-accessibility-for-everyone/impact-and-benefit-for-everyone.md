# Impact and Benefits for Everyone

## [Colors with Good Contrast](https://www.w3.org/WAI/perspective-videos/contrast/)
**Colors must have sufficient contrast**, for example, between the text color and the background color (technically called luminance contrast ratio). This includes text on images, icons, and buttons. Also colors used to convey information on diagrams, maps, and other types of images must be distinguishable.

**Who depends on this feature?**
- People with low contrast sensitivity, which is common in older people.
- People who cannot distinguish between certain colors (often called “color blindness”).

**What are the additional benefits?**
- Content works in different lighting conditions, such as sunlight and glare.
- Content is easier to read by everyone, including those who do not have specific visual conditions.

**What needs to happen for this to work?**

Select text and background colors that provide sufficient contrast. There are tools to help check and select appropriate color combinations.

## [Speech Recognition](https://www.w3.org/WAI/perspective-videos/voice/)
Speech recognition can be used for dictating text in a form field, as well as navigating to and activating links, buttons, and other controls. Some speech recognition tools allow complete control over computer interaction, allowing users to scroll the screen, copy and paste text, activate menus, and perform other functions.  Most computers and mobile devices today have built-in speech recognition functionality.

**Who depends on this feature?**
- People with physical disabilities who cannot use the keyboard or mouse.
- People with chronic conditions, such as repetitive stress injuries (RSI), who need to limit or avoid using the keyboard or mouse.
- People with cognitive and learning disabilities who need to use speech rather than to type.

**What are the additional benefits?**
- Content works for people with temporary limitations, such as a broken arm.
- Content is more usable for people who prefer to speak rather than type, for example, while multi-tasking.

**What needs to happen for this to work?**

Content must be properly designed and coded so that it can be controlled by speech. keyboard compatibility is the basis for such coding. In addition, labels and identifiers for controls in the source code need to match their visual presentation, so that it is clear which speech command will activate a control.

## [Text to Speech](https://www.w3.org/WAI/perspective-videos/speech/)
Some people with disabilities, including people who are blind, use specialized software called **screen readers**. Screen readers provide important functionality such as navigating through headings, speaking image alternatives, and identifying internal and external links. They can also highlight the text as it is being read aloud for people to see and hear the content at the same time. Many computers and mobile devices today have built in text-to-speech software. 

**Who depends on this feature?**
- People who are blind and cannot see what is on the screen.
- People who have partial sight (often legally blind) and cannot see certain types of content.
- People with dyslexia and other cognitive and learning disabilities who need to hear and see the text to better understand it.

**What are the additional benefits?**
- Content can be read aloud for people who cannot read the written language.
- Content can be read aloud for people who prefer to listen, for example, while multi-tasking.

**What needs to happen for this to work?**

Content must be coded properly so that all of the functionality of the text-to-speech software works with the content. Use semantic HTML markup for structures such as headings, paragraphs, lists, forms, and tables. Provide text alternatives for images, icons, and other non-text content. Ensure keyboard compatibility, and ensure that text information is understandable without the visual context.

## [Clear Layout and Design](https://www.w3.org/WAI/perspective-videos/layout/)
The different parts of a web page must be easy to locate and identify. This includes navigation menus, links, and text sections. These should be at predictable locations and consistently identified. Also form labels and instructions have to be clearly associated with their controls.

**Who depends on this feature?**
- People with low vision who are using screen magnification and only see a portion of the screen at a time.
- People with cognitive and learning disabilities who need clarity and consistency to orient themselves on a website.

**What are the additional benefits?**
- Content is more usable for people who are new to the particular website or application.
- Content is more usable for people who are not confident using computers and the web.
- Content is more usable for mobile device users who are seeing it on smaller screens, especially if they are in a hurry or distracted.
- Content and functionality is easier to locate and identify by most users.

**What needs to happen for this to work?**

Design clear structure, both visually and through the markup. Make it easy to distinguish sections such as navigation, group related controls in a form, and provide headers to identify groups of information. Provide consistent presentation and behavior of web pages across a website. This can help even people with poor computer skills.


## [Notifications and Feedback](https://www.w3.org/WAI/perspective-videos/notifications/)
**Users need to know what is going on**, and get appropriate feedback during interaction (es. confirmation messages when actions are completed, error messages, etc.)

**Who depends on this feature?**
- People with some cognitive and learning disabilities, who may be easily confused by unexpected behavior and unclear error messages.
- People with partial sight and blindness, who rely on notifications, instructions, and errors messages to understand the context and interactions.

**What are the additional benefits?**
- Content is more usable for people who are new to the particular website or application.
- Content is more usable for people who are not confident using computers and the web.
- Content is less confusing and daunting to everyone, regardless of skills.

**What needs to happen for this to work?**

Use clear and simple language to make error messages more understandable. For example, describe how to fix an error. When forms are submitted, provide a confirmation message. When a change is made on the screen, such as new content added, alert users to the change. 

## [Large Links, Buttons, and Controls](https://www.w3.org/WAI/perspective-videos/controls/)
The area for clicking and tapping controls must be large enough for people to activate them. This includes links, buttons, checkboxes, and other controls. Small controls, and controls that are placed too close to each other, are difficult for many people to use. This is particularly relevant on mobile devices with small screens.

**Who depends on this feature?**
- People with physical disabilities who have reduced dexterity.

**What are the additional benefits?**
- Content is more usable on touch screens, especially on smaller mobile devices.
- Content is more usable for people who are not experienced with the mouse or touch-pad on the computer they are using.
- Content is more usable in situations where the device cannot be held steady.

**What needs to happen for this to work?**
Design large controls or activation areas around the controls, provide adequate separation between selectable controls, provide labels for controls which enlarges the activation area in many browsers because the label for checkboxes and option buttons is also clickable.

## [Customizable Text](https://www.w3.org/WAI/perspective-videos/customizable/)
Some users need to be able to change the way text is displayed so that they can read the text. This includes changing the size, spacing, font, color, and other text properties. When users change these properties, no information or functionality should be lost, and the text should re-flow so users don’t have to scroll horizontally to read sentences. Text customization is more than the zoom functionality, which only changes the text size.

**Who depends on this feature?**
- People with low vision who are not using screen magnification software.
- People with some forms of dyslexia and other cognitive and learning disabilities who need a particular presentation of text to read it.

**What are the additional benefits?**
- Content is more adaptable to smaller and larger screen sizes.
- Content is more adaptable to personal preferences and comfort.
- Content is more adaptable when translated, since words and sentences are different lengths in different languages.

**What needs to happen for this to work?**
Content must be properly designed and coded so that it can adapt to different customization settings. This includes **using relative rather than absolute units for the size** of fonts, controls, and other objects. Applications should use the operating system and web browser text settings. Websites and applications could also provide information to help users change their settings. Web browsers and other web tools need to provide users with text customization functionality.


## [Understandable Content](https://www.w3.org/WAI/perspective-videos/understandable/)
**Content must be easy to follow and understand for many users.** For most content, this means simply avoiding overly complex sentences and jargon, and providing clear layout and design. For some complex content such as medical information, separate, easy-to-read information may be necessary.

**Who depends on this feature?**
- People with learning disabilities who cannot understand complex sentence structures and vocabulary.
- People with cognitive disabilities who have difficulty focusing on long passages of dense text.

**What are the additional benefits?**
- Content is more usable for people with lower language skills, such as people who are not fluent in the language of the website and people with low literacy.
- Content is easier to understand by users who are not familiar with the topic.
- Content is easier to skim, and get an overview of the information.

**What needs to happen for this to work?**
Avoid overly complex words, jargon, and acronyms, or provide explanations when they need to be used. Provide structure using headings, lists, and spacing. 
Provide illustrations that clarify the content, when helpful. Provide clear layout and design with consistent orientation and navigation cues.

## [Keyboard Compatibility](https://www.w3.org/WAI/perspective-videos/keyboard/)
**All functionality must be usable with the keyboard.** That is, users can access and move between links, buttons, forms, and other controls using the Tab key and other keystrokes. Websites should not require a mouse; for example, pop-up calendars should also let users type in a date.

**Who depends on this feature?**
- People with physical disabilities who cannot use the mouse.
- People who are blind, and cannot see the mouse pointer on the screen.
- People with chronic conditions, such as repetitive stress injuries (RSI), who should limit or avoid use of a mouse.

**What are the additional benefits?**
- Content works for people with temporary limitations, such as a broken arm or broken mouse.

**What needs to happen for this to work?**
Native HTML controls, like links, buttons, and form elements, work with the keyboard by default and should be used where possible. Custom-made controls, CSS styles, and scripts that control interaction may need additional coding for keyboard compatibility. Ensure that the tab order is logical, to allow keyboard navigation around the content and controls. Provide a way for users to jump between blocks of content and controls. Keyboard issues occur particularly in forms, menus, and applications with many controls.

## [Video Captions](https://www.w3.org/WAI/perspective-videos/captions/)
**Captions are a text form of audio information in video and animations.** This includes the words that are spoken, who is speaking when it is not evident, and important sounds like music, laughter, and noises. Captions must be synchronized with the visual content to contextualize them.

**Who depends on this feature?**
- People who are deaf and cannot hear the audio.
- People who are hard of hearing and cannot hear some of the content.
- People with cognitive and learning disabilities who need to see and hear the content to better understand it.

**What are the additional benefits?**
- Content can be used in loud environments where you cannot hear the audio.
- Content can be used in silent environments where you cannot turn on sound.
- Content can be better understood by people hearing and seeing the information, for example, people who are less fluent in the language spoken.
- Content can be read rather than watched, which is easier and quicker for some people.
- Content in text form, such as caption files and transcripts, can be better indexed by search engines.
- Content can be used without needing to download video files, for example, to save data on mobile.

**What needs to happen for this to work?**
Captions must be made available with pre-recorded and live video content. Voice recognition software can help create captions for some type of videos. Sometimes such voice recognition software is built into the computer or social media platform. Automatically-generated captions often need editing.