# Physical disabilities

Many people with physical limitations do not use a mouse. They rely on other mechanisms such as the keyboard, voice control and other poiting devices to navigate and interact with the Web.

## Keyboard accessibility

From a design and code perspective, it is important that element such as buttons, links, and form controls are keyboard accessible and not just accessible using mouse. This means that they are focusable and actionable using the keyboard alone, have a visible focus state, and focus order is logical. Skip links can also be helpful for keyboard users to navigate to the main content.

By default, specific HTML elements (anchor, form controls, etc) receive keyboard focus. However, complex controls not directly available in HTML are often costructed with the use of "generic" HTML elements (div, span, etc) with additional JavaScript and CSS. In this case, it is important to ensure that the keyboard focus is properly managed.
Another common issue is content appearing when a user moves the mouse over a particular element (hover). If not code correctly, this information can be lost to keyboard users.

### Lack of visibile Focus

When a user is navigating a page using the keyboard, it is important that **they can see where they are on the page**. This is done by providing a visible **focus state** for all interactive elements. This is particularly important for users with low vision, but also for users with cognitive disabilities, who may have difficulty tracking their location on the page. 

> If there is not focus state can be impossibile to know **where you are** on a page and **what is actionable**.

### Focus Order

The order in which elements receive focus is important for keyboard users. **The focus order should be logical and follow the visual order of the page.**
On a typical web page, we expected to start with the header, followed by main navigation, page navigation, main content and finally the footer. Within those segments, we expect related content to be grouped togheter.
This is particularly important for users with cognitive disabilities, who may have difficulty tracking their location on the page.

A common issue with focus order is when a button updates or changes the content of the page but focus is not managed. For example, a button that opens a modal dialog but the keyboard focus is not moved to dialog and the user has to tab through all the page content until they eventually can get focus to tab.
In this case, the page should move focus to the dialog when it opens, and back to the button when it closes. This is important for keyboard users, but also for screen reader users, who may not be aware that the content of the page has changed.

### Skip Links
Lengthy navigation can be a challenge for keyboard users as they must press Tab key to navigate through all the links before reach the main content. For a better expericence, adding a "Skip to content link" at the start of a page can be helpful.
**Skip links** are a common technique to help keyboard users navigate to the main content of a page. They are usually hidden from view until they receive keyboard focus, at which point they become visible. They are often placed at the top of the page, and are usually the first element to receive focus. **When activated, they move focus to the main content of the page.**


### Target size and movement
Challenges are not just limited to keyboard usage. Some users with limited dexterity may use a mouse or a finger to desktop and touch screens. For example they can be struggle with fly-out menus (dropdown menus) that disappear when the mouse moves away from the menu.

In this case, it is important that **the target size and movement are large enough to be actionable**.
Small touch target are also a problem, especially when they are presented next to other focusable elements. A common example ot this is on screen keyboards where text on buttons is small and the buttons are close together. They are also important for users with low vision, who may have difficulty seeing small targets.

To minimize the impact on the end user, we consider providing more usable alternatives, for example: voice input for search, drop down menus, radio buttons or checkboxes (rather then free text input), support for autocomplete, pre-populated fields, etc.

**Target size** is the size of the area that can be clicked or tapped. **Movement** is the distance that the pointer must travel to reach the target. Both of these factors are important for users with motor disabilities, who may have difficulty controlling the mouse pointer. 

### Keyboard Navigation - standard keystrokes

**Reference:** [Keyboard accessibility from WebAim](https://webaim.org/techniques/keyboard/)

Testing with a keyboard is an essential part of any accessibility evaluation.

The following table includes many of the most common online interactions, the standard keystrokes for the interaction, and additional information on things to consider during testing.


|Interaction                    |Keystrokes                         | Notes|
|---                            |---                                | ---|
|Navigate to most elements      |- `Tab` <br> - `Shift+Tab`: navigate bakward  |- Keyboard focus indicators must be present. <br> - Navigation order should be logical and intuitive.|
|Link                           |- `Enter`| |
|Button                         |- `Enter or Spacebar`| Ensure elements with ARIA `role="button"` can be activated with both key commands.|
|Checkbox                       |- `Spacebar`: check/uncheck a checkbox| Users can typically select zero, one, or multiple options from group of checkboxes. |
|Radio buttons                  |- `Arrow up/down or left/right`: to select an option <br> - `Tab`: to move to the next element| Users can select only one option from a group of radio buttons. |
|Select (dropdown) menu         |- `Arrow up/down`: to navigate between menu options<br> - `Spacebar`: to extend| You can also filter or jump to options in the menu as you type letters. |
|Autocomplete                   |- Type to begin filtering <br> - `Arrow up/down`: to navigate between options <br> - `Enter`: to select an option| |
|Dialog                         |- `Esc`: close |- Modal dialogs should maintain keyboard focus.<br> - Non-modal dialogs should close automatically when they lose focus.<br> - When a dialog closes, focus should usually return to the element that opened the dialog. |
|Slider                         |- `Arrow up/down or left/right`: to increase or decrease slider value <br> - `Home/End`: beginning or end | - For double-headed sliders (to set a range), `Tab/Shift` + `Tab` should toggle between each end. <br> - In some sliders `PageUp/PageDown` can move by a larger increment (e.g., by 10%). |
|Menu bar                       |- `Arrow up/down`: previous/next menu options <br> - `Enter`: expand the menu (optional) and select an option <br> - `Arrow left/right`: expand/collapse submenu| A menu bar dynamically changes content within an application. Links that utilize `Tab/Enter` are NOT menu bars. |
|Tab panel                      |- `Tab`: once to navigate into the group of tabs and once to navigate out of the group of tabs <br> - `Arrow up/down or left/right`: previous/next tab | This is for 'application' tabs that dynamically change content within the tab panel. If a menu looks like a group of tabs, but is actually a group of links to different pages, `Tab` and `Enter` are more appropriate. |
|Tree menu                      |- `Arrow up/down`: to navigate previous/next menu option <br> - `Arrow left/right`: expand/collapse submenu, move up/down one level||
|Scroll                         |- `Arrow up/down`: to scroll vertically <br> - `Arrow left/right`: scroll horizontally <br> - `Spacebar/Shift + Spacebar`: to scroll by page | The space bar will, by default, scroll the page, but only if an interactive control that allows space bar input is not focused. Horizontal scrolling within the page should be minimized.|

## Switch controls

**Switch controls are used by people with motor disabilities to interact with computers and other digital devices if using mouse, keyboard, voice or gestures is not possible.** Switch controls are also used by people with cognitive and learning difficulties.

There are a wide variety of different types of swtiches to accomodate various needs:
- **Sip-and-puff switches:** which are triggered by sipping and puffing into a straw which the mimics tabbing and clicking
- **Button switches:** which can be actived using the hand, foot or head. These can be single or multiple swithces.
- **Camera switches**: which can be actived by tilting the head into a camera. 
- **Eye tracking:** the process of measuring either the point of gaze (where one is loooking) or the motion of an eye relative to the head.

## Speech input
Perople with limited dexterity can use speech recognition software. **It enables spoken language to be translated into text and commands by computers and devices.** This is helpful for people with muscolar control limitations.

On deskop, speech recognition software allows people to dictate text into any application such as Word, emails, search engines, etc. It also allows people to control the computer using voice commands, such as opening applications, navigating the web, etc. Chnallenges that speech recognition user might face are similar to that of screen reader and sighted keyboard only users. Like screen readers, speech recognition relies on the underlying code to navigate. Common issues are:
- **Unclear link button:** if button lack of visibile text, users will not know its name and how to activate it. Instead, they will have to number links on  a page and select the link by its number.
- **Lack of keyboard access:** user can not set focus on a button and it can not be activated
- **Illogical focus order:** the focus order is different from the visual order of a page. It can confuse users and they can lose track of where focus is.
- **Missing or poor visibile focus:** focus state are not clear or it is difficult to know where the current focus is.

> [!TIP]
> Make speech recognition users more productive:
> 1. Make space for scrolling dialog boxes as large as possible 
> 2. Make sure the system focus is clearly visible
> 3. If you use custom keyboard shortcut, allow users to customize, save and share those shortcuts


## Blindness
People with no vision or very little useful vision often use a screen reader. A screen reader is a software that reads out everything on a screen. It means that all meaning that is conveyed visually needs to be also cnvoyed in a way that can be read out by a screen reader.

### Alternative

Image and multimedia are challenge for people with visual disabilities when they are not provided with alternative text. Alternative text is a short description of the image, button, controls and video that can be read out by a screen reader. Images that are meaningful or perform an action (such as link or button) must all have a text alternative that accuretely describes the meaning or purpose.

For video, people with visual disabilities rely on **Audio Description (AD)** and **Text Transcripts**. AD is an additional commentary that explains what's happening on the screen (body langauge, expressions, movements, etc). Text transcripts provide an alternative to all visual and auditory information in text format that can be user in place of watching video.

> [!NOTE]
> It's very important the quality of the alternative versione. Long and wordy text alternatives for images that are links can slow down navigation. Describing image that are not meaningful or decorative can be distracting.


### Keyboard accessibility
Screen readers users rely fully on the keyboard to navigate. Many challenges they experience are the same as the sighted keyboard users, such as: lack of keyboard focus, poor focus order etch.

### Structure
Clear heading, list, paragraphs, table and form labels are the key to understanding the layout and structure of content. For example: sighted users use headings to understand what the contents of a page is, screen magnification users will look for larger text to understand what the headings are and the screen reader users can do the same by using keyboard shortcuts to list headings.

### Screen Readers
A screen reader is a software that reads out everything on a screen including text, headings, list, button, text aternative for images and form inputs. When Web content is coded correctly a reader announces the `name`, `role` and `state` of an element. For example: *Select Terms and Conditions, checkbox, not checked*, that can be break down into:

- **Name:** Select Terms and Conditions
- **Role:** checkbox
- **State:** not checked

Screen readers also provide a number of keyboard shortcuts to navigate and interact with the content. For example: `H` to navigate to the next heading, `B` to navigate to the next button, `F` to navigate to the next form control, etc.

> Common screen readers includes: Jaws for Windows, NVDA for Windows, VoiceOver for Mac and iOS, VoiceOver for iOS, TalkBack for Android, etc.
> Some of these tools work even with the screen turned off (es. iOS VoiceOver with iOS Curtain) 

Users who are blind and read barille may combine a screen reader with a hardware called a **refreshable braille display**. This sits next to the keyboard and is made up of hundreds of pins that move to create braille. The braille display is connected to the computer and refreshes as the user navigates the screen. This allows the user to read the screen without having to listen to the screen reader.

> Screen readers are not just used by blind people. Some people with cognitive or learning disabilities find it useful to have the contents of a web page read out. It can help with focus and concentration as well as comprehsion of text and image.


## Low vision
Low vision users encouter a range of issues to do with design, styling, animation, movement and positioning.

### Font size
Small fonts can be especially problematic.Some peple will bypass this using **screen magnification software** but many people who need larger fonts don't have a need for screen magnification. For this reason is important that web pages support **text resizing** within the browser. Text resising is different from zoom which resizes the whole page. 
By customizing text resizing from browser setting, you can scale text within a page independently of all other content.

### Poor contrast
Poor color contrast can affect a wide range of users including many people with visual, cognition and learning disabilities. It can also affect people who are using a mobile device in bright environment. This issue prevents people from being able to perceive the information that the content is trying to convey. This cause barrier of interaction because people may be unable to identify: their location on a page, the state of an element, read text, content of images.

> [!NOTE]
> **Color contrast** is very important also because there are many more people with low vision than people who are blind.

### Relying on a color
Color is a key component to web design and is used not only for improve aesthetic appel and branding but it is also an usability and accessibility aspect.
However, some user may have difficulties to perceive color. For example: people with partial sight ofter experience limited color vision, and many older user do not see color well. In addition, people using text-only, limited-color or monochrome displays and browsers will be **unable to access information that is presented only in color**.Barrier can include styling text for mandatory field that usually are red colored or link highlighted only with color. For example link highlighting may be improved adding some visual indicator, such as underline or different font weight.

Another common area that can be problematic is **color pickers** on filters. If different color option are provided with no visual text alternavite, then people with low color perception may not be able to select the color of their choice.

### Animations and moving content
People with vision, cognitive and learning disabilities can find movement and animation distracting. If the screen content is enlarged, the animation can take up the entire screen and disorientate the user. Common issues are: banner ads containing flashing background and movement, content contained video clip, animated images, or continuously moving carousel.

> People who are **photosensitive** cha have seizures triggered by content that flashes at certain frequencies.

### Point of regard
**Point of regard** is the place where you are reading and have focus. When content is zoomed in, if the place being read changes, people can get lost. For example: information displayed in hover state can be hard to read with zoom or magnification, expecially if the hover state is larger than the view. Another issue arise when content is zoomed in proximity to related content. If related information are not grouped together (ex. label and input), it can be lost and become unusable.


## Screen magnification
**Screen magnification software** enlarges screen content. It can be used to enalrge all or part of the screen making it easier for people with low vision to see text and images. It is used by people with functional vision and can be used in combination with a screen reader. People with cognitive and learning disabilities can also benefit from screen magnification to hep zoom in on a content and remove distractions such as banner adv and movement.

When zoomed in, the focus will follow the mouse pointer which is enlarged and can be customized for size and color to suit reading needs. Some other feature are:
- **Smoothing** to make text less blocky and smooth when enlarged and therefore easier to read
- **Crosshairs** as an alternative to the pointer as some find these easier to follow visually, expecially if size and color can be customized.
- **Color inversion** can reduce glare and make it easier to read text. (ex. turning text from black on white to white on black)

For these users it is very important to prioritize the information on the web page. A crowded web page can be challenging and the user may get lost in the content. Magnification leads to more scrolling and more time finding information. For this reason it is important to provide a clear structure and layout and avoid confusing pages.
Responsive layout are a great "workaround" because they can resize the windows and content reflows into a single column. In this way it become much easier to read.
Another issue are notifications that appear in a different location from where the user is reading.

> [!TIP]
> **TIPS** to help screen magnification users
> 1. Ensure on screen changes are obvious to screen magnification users.
> 2. Ensure key content is not contained within hover states or tooltips (it may not fit completely on the screen or it may pop off the screen).
> 3. Ensure priority content is positioned consistently and where people expect to find it.

> [!NOTE]
> Common screen magnification software are: ZoomText on Windows as well built-in zoom feature in Windows, MacOS and iOS.