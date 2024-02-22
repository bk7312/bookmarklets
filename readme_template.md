# Collection of bookmarklets

Here are some of the bookmarklets I've created or collected over the years for my personal use.

What are [bookmarklets](https://en.wikipedia.org/wiki/Bookmarklet)? They are basically bookmarks that execute javascript code when clicked instead of opening a website. Bookmarklets give you the power of javascript to do whatever you want (within the limits of your browser), so use it with care and only use bookmarklets you trust!

## How to install and use bookmarklets

To install a bookmarklet, create a new bookmark and paste the code into the URL bar. See examples below, images taken from [freeCodeCamp](https://www.freecodecamp.org/news/what-are-bookmarklets/).

Alternatively, if the bookmarklet is available as a link, you can drag and drop it to your bookmark bar instead.

**Only install bookmarklets from sources you trust and whenever possible, review the code before running it!**

#### Example using Firefox:

![firefox-1](https://github.com/bk7312/bookmarklets/assets/14029543/db38cfc8-145d-4fb0-8395-2a06cbc76723)

#### Example using Chromium:

![chromium](https://github.com/bk7312/bookmarklets/assets/14029543/f53a55f2-ecc0-4a68-8231-e85bad099072)

## Video-related bookmarklets

A collection of video-related bookmarklets, works as long as the website uses video tags. Applies to the first video on the website, won't work for videos inside an iframe.

If you want to apply to a video inside an iframe, use the iframe bookmarklet below to open the video iframe in a new tab, then try the video bookmarklet.

Note: It should be possible to repurpose these bookmarklets to work with audio content by changing the targeted HTML tag from 'video' to 'audio'.

#### Video Controller

Creates a small video playback controller fixed to the top right side of the screen, click the bookmarklet again to remove. Note that the controller buttons will be affected by the website's existing CSS.

Able to change playback speed, restart the video, rewind or fast forward in 10s increments, play/pause, and mute/unmute the video.

Note: Due to the use of innerHTML, this bookmarklet will not work on sites that require [TrustedHTML](https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML) assignment (CSP). In such cases, use the other bookmarklets below instead.

@vid-controller.js

#### Toggles default HTML5 video controls

Toggles the default HTML5 video controls and remove all controlsList attributes.

@vid-toggle-ctrl.js

#### Change video playback speed

Changes the first video's playback speed, should work with youtube/vimeo and etc, also shows the current playback speed.

@vid-speed.js

#### Change all videos playback speed

Useful if there are multiple videos in a single page, changes the playback speed for all videos.

@vid-speed-all.js

#### Play/pause video

Able to play/pause the first video, useful if video controls are hidden but recommend to use the video controller bookmarklet instead.

@vid-play-pause.js

## Audio-related bookmarklets

A collection of audio-related bookmarklets, works as long as the website uses audio tags. Applies to the first audio on the website, won't work for audios inside an iframe.

If you want to apply to a audio inside an iframe, use the iframe bookmarklet below to open the audio iframe in a new tab, then try the audio bookmarklet.

Note: Repurposed from the video bookmarklets.

#### Audio Controller

Creates a small audio playback controller fixed to the top right side of the screen, click the bookmarklet again to remove. Note that the controller buttons will be affected by the website's existing CSS.

Able to change playback speed, restart the audio, rewind or fast forward in 10s increments, play/pause, and mute/unmute the audio.

Note: Due to the use of innerHTML, this bookmarklet will not work on sites that require [TrustedHTML](https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML) assignment (CSP). In such cases, use the other bookmarklets below instead.

@aud-controller.js

#### Toggles default HTML5 audio controls

Toggles the default HTML5 audio controls and remove all controlsList attributes.

@aud-toggle-ctrl.js

#### Change audio playback speed

Changes the first audio's playback speed, also shows the current playback speed.

@aud-speed.js

#### Change all audios playback speed

Useful if there are multiple audios in a single page, changes the playback speed for all audios.

@aud-speed-all.js

#### Play/pause audio

Able to play/pause the first audio, useful if audio controls are hidden but recommend to use the audio controller bookmarklet instead.

@aud-play-pause.js

## Check for iframes and show their source URL

Handy bookmarklet to check for iframes on a website.

#### Show iframes in separate panel

Creates a set of buttons showing the iframe's source URL (opens in new tab when clicked) fixed to the top right side of the screen, click the bookmarklet again to remove the buttons. Note that the buttons will be affected by the website's existing CSS.

Note: Due to the use of innerHTML, this bookmarklet will not work on sites that require [TrustedHTML](https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML) assignment (CSP). In such cases, use the other bookmarklets below instead.

@iframe-panel.js

#### Show iframes in an alert dialog

Less versatile but works if the above bookmarklet doesn't.

@iframe-alert.js

## Create a simple notepad on the browser

Using html contenteditable to create an empty notepad to jot things down. To save your data, press Ctrl + S or save like a regular webpage, not the ideal but it works.

Alternatively, you could use something like https://browserpad.org/ which saves your data to localStorage instead.

#### Plain text only

```
data:text/html, <html contenteditable='plaintext-only'>
```

#### Able to accept html formatting (when copy/paste from other websites)

```
data:text/html, <html contenteditable>
```

## Color sampler bookmarklets

Some bookmarklets that help with color sampling.

#### Using the EyeDropper API

Uses the [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper), unfortunately it is not supported in Firefox and Safari at the time of writing (Dec 2023).

Also converts the HEX code to RGB and HSL values, code for converting RGB to HSL referenced from https://www.30secondsofcode.org/js/s/rgb-to-hsl/

@color-eyedropper.js

#### New page with color input element

The bookmarklet below is an alternative if the EyeDropper API is not supported, it opens a webpage with a color input element. Note that this replaces the current page you are on, best used on a new tab, click on the input element followed by the eyedropper icon.

```
data:text/html;charset=utf-8,<input type='color'/>
```

#### New popup window with color input element

Or alternatively, the bookmarklet below opens a color input element on a new popup window. Referenced from https://css-tricks.com/web-development-bookmarklets/#comment-1795325, lightly modified for readability and to set the popup on the bottom right corner.

@color-popup.js

## Slightly improve website readability

Simple bookmarklet to center the webpage, limit the width, and change the line height. Usually only works on simple websites, might break certain websites.

@simple-center.js

## Toggle designMode

Toggles [designMode](https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode) to make website editable.

@toggle-designmode.js

## Delete element on click

Deletes an element on click (One time only)

@delete-element-one.js

Deletes an element on click (Active until page reload or Esc key pressed)

@delete-element.js

## Check website data

Reads and displays your cookie data.

@show-cookies.js

Reads and displays your localStorage data.

@show-localstorage.js

Reads and displays your sessionStorage data.

@show-sessionstorage.js

## Bookmarklet by others that I found useful

#### Kill Sticky

As the name implies, it's a bookmarklet that kills sticky content.

https://github.com/t-mart/kill-sticky

Here's a modified version I use that doesn't remove position fixed/sticky but makes them static instead.

@kill-sticky-mod.js

#### Kick ass app

Cool bookmarklet that lets you 'destroy' websites.

https://kickassapp.com/

#### Web development bookmarklets from CSS-tricks

Some useful bookmarklets for web development, more available in the comments section.

https://css-tricks.com/web-development-bookmarklets/

## Some resources on making bookmarklets

https://www.freecodecamp.org/news/what-are-bookmarklets/

https://gist.github.com/caseywatts/c0cec1f89ccdb8b469b1

https://make-bookmarklets.com/
