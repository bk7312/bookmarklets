# A collection of bookmarklets

Here are some of the bookmarklets I've created or collected over the years for my personal use.

What are [bookmarklets](https://en.wikipedia.org/wiki/Bookmarklet)? They are basically bookmarks that execute javascript code when clicked instead of opening a website. Bookmarklets give you the power of javascript to do whatever you want (within the limits of your browser), so use it with care and only use bookmarklets you trust!

## How to install and use bookmarklets

To install a bookmarklet, create a new bookmark and paste the code into the URL bar. See examples below, images taken from [freeCodeCamp](https://www.freecodecamp.org/news/what-are-bookmarklets/).

Alternatively, if the bookmarklet is available as a link, you can also drag and drop it to your bookmarks menu to install. Note that the JS code in the bookmarklet link will be different as it has been minified.

**Only install bookmarklets from sources you trust and whenever possible, review the code before running it!**

### Example using Firefox

![firefox-1](https://github.com/bk7312/bookmarklets/assets/14029543/db38cfc8-145d-4fb0-8395-2a06cbc76723)

### Example using Chromium

![chromium](https://github.com/bk7312/bookmarklets/assets/14029543/f53a55f2-ecc0-4a68-8231-e85bad099072)

## Delete element on click

Deletes an element on click. Press the Esc key or right-click to exit, able to undo using Ctrl + Z or Cmd + Z (favorite bookmarklet thus far, fun to play with).

Thinking of adding some new fun features in the future, or maybe turn it into a browser extension.

@delete-element.js

Deletes an element on click, one time only, no undo. Press the Esc key or right-click to cancel.

@delete-element-one.js

## Audio/Video-related bookmarklets

A collection of audio/video-related bookmarklets, works as long as the website uses audio/video tags. Applies to the first audio/video on the website, won't work for audios/videos inside an iframe.

Note: If you want to apply to a audio/video inside an iframe, use the iframe bookmarklet below to open the audio/video iframe in a new tab, then try the audio/video bookmarklet.

I was thinking of turning this into a browser extension to fix the iframe issue (see note above) but ended up using [this extension](https://github.com/igrigorik/videospeed) instead. Thinking of forking it and making my own version sometime.

### Audio/Video Controller

Creates a small audio/video playback controller fixed to the top right side of the screen, click the bookmarklet again to remove. Note that the controller buttons will be affected by the website's existing CSS.

Able to change playback speed, restart the audio/video, rewind or fast forward in 10s increments, play/pause, and mute/unmute the audio/video. The video controller is my most used bookmarklet when watching videos.

Note: Due to the use of `innerHTML`, this bookmarklet will not work on sites that require [TrustedHTML](https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML) assignment (CSP). In such cases, use the other bookmarklets below instead.

Audio:
@aud-controller.js

Video:
@vid-controller.js

### Toggles default HTML5 audio/video controls

Toggles the default HTML5 audio/video controls and remove all `controlsList` attributes.

Audio:
@aud-toggle-ctrl.js

Video:
@vid-toggle-ctrl.js

### Change audio/video playback speed

Changes the first audio/video's playback speed, should work with youtube/vimeo and etc, also shows the current playback speed.

Audio:
@aud-speed.js

Video:
@vid-speed.js

### Change all audios/videos playback speed

Useful if there are multiple audios/videos in a single page, changes the playback speed for all audios/videos.

Audio:
@aud-speed-all.js

Video:
@vid-speed-all.js

### Play/pause audio or audio/video

Able to play/pause the first audio/video, useful if audio/video controls are hidden but recommend to use the audio/video controller bookmarklet instead.

Audio:
@aud-play-pause.js

Video:
@vid-play-pause.js

## Check for iframes and show their source URL

Handy bookmarklet to check for iframes on a website.

### Show iframes in separate panel

Creates a set of buttons showing the iframe's source URL (opens in new tab when clicked) fixed to the top right side of the screen, click the bookmarklet again to remove the buttons. Note that the buttons will be affected by the website's existing CSS.

Note: Due to the use of `innerHTML`, this bookmarklet will not work on sites that require [TrustedHTML](https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML) assignment (CSP). In such cases, use the other bookmarklets below instead.

@iframe-panel.js

### Show iframes in an alert dialog

Less versatile but works if the above bookmarklet doesn't.

@iframe-alert.js

## Color sampler bookmarklets

Some bookmarklets that help with color sampling.

### Using the EyeDropper API

Uses the [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper), unfortunately it is not supported in Firefox and Safari at the time of writing (Dec 2023).

Also converts the HEX code to RGB and HSL values, code for converting RGB to HSL referenced from [30secondsofcode.org](https://www.30secondsofcode.org/js/s/rgb-to-hsl/)

@color-eyedropper.js

### New popup window with color input element

Or alternatively, the bookmarklet below is an alternative if the EyeDropper API is not supported. It opens a color input element on a new popup window. Referenced from [css-tricks.com](https://css-tricks.com/web-development-bookmarklets/#comment-1795325), lightly modified for readability and to set the popup on the bottom right corner.

@color-popup.js

## Check website data

Reads and displays your cookie data.

@show-cookies.js

Reads and displays your localStorage data.

@show-localstorage.js

Reads and displays your sessionStorage data.

@show-sessionstorage.js

## Bookmarklets for modifying websites

### Toggle designMode

Toggles [designMode](https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode) to make website editable.

@toggle-designmode.js

### Slightly improve website readability

Simple bookmarklet to center the webpage, limit the width, and change the line height. Usually only works on simple websites, might break certain websites.

@simple-center.js

### Make text selectable

Makes the text in every element user selectable.

@user-select-text.js

### Unblur all

Unblurs all element on the page.

@unblur-all.js

### Remove CSS, image, and other media from a webpage

Ever want to remove all the CSS and images/videos/etc on a webpage? Well now you can with this amazing new bookmarklet! Removes img/svg/iframe/audio/video/canvas.

Why would you ever want to do that? Well, you can browse flashy websites without attracting the attention of others walking by (my current use case), and you can use it to see a before/after comparison of the website/webapp with and without CSS applied.

@remove-css-media.js

## Check archived version of website

### Using archive.org

```js
javascript:location.href='https://web.archive.org/web/*/%27+document.location.href;
```

### Using archive.is

```js
javascript:location.href='https://archive.is/%27+document.location.href;
```

## Shortcut for removepaywall.com

Shortcut for [removepaywall.com](https://www.removepaywall.com/), has five options to remove paywall. Also has the option to view with archive.is.

```js
javascript:location.href='https://www.removepaywall.com/search?url=%27+document.location.href;
```

## Calculator-like app on the browser (not a bookmarklet)

It would be awesome to create a calculator bookmarklet, but honestly, it's probably easier to open the developer tools and use the console to calculate anything. But, I found two apps that works great as calculators in the browser.

### Unsure calculator

The [unsure](https://filiph.github.io/unsure/) calculator calculates with uncertainty. There's also the [unsure app](https://filiph.github.io/napkin/) which lets you do back of the napkin calculations with uncertainty. Created by [Filip Hráček](https://filiph.net/)

### Notepad calculator

A cool [notepad calculator](https://notepadcalculator.com/) for quick calculations. Created by [Steve Ridout](https://steveridout.com/)

## Create a simple notepad on the browser

Using html contenteditable to create an empty notepad to jot things down. To save your data, press Ctrl + S or save like a regular webpage, not the ideal but it works. Technically not a bookmarklet but a [data URL](https://developer.mozilla.org/en-US/docs/web/http/basics_of_http/data_urls) instead.

Alternatively, you could use something like [browserpad](https://browserpad.org/) which saves your data to localStorage instead.

### Plain text only

```html
data:text/html,
<html contenteditable="plaintext-only"></html>
```

### Able to accept html formatting (when copy/paste from other websites)

```html
data:text/html,
<html contenteditable></html>
```

## Bookmarklets by others that I found useful

### Kill Sticky

As the name implies, [kill sticky](https://github.com/t-mart/kill-sticky) it's a bookmarklet that kills sticky content.

Here's a modified version I use that doesn't remove position fixed/sticky but makes them static instead.

@kill-sticky-mod.js

### Kick ass app

Cool [kick ass app](https://kickassapp.com/) bookmarklet that lets you 'destroy' websites.

### Web development bookmarklets from CSS-tricks

Some useful bookmarklets from [css-tricks.com](https://css-tricks.com/web-development-bookmarklets/) for web development, more available in the comments section.

## Some resources on making bookmarklets

[freecodecamp.org](https://www.freecodecamp.org/news/what-are-bookmarklets/)

[caseywatts/bookmarkleting.md](https://gist.github.com/caseywatts/c0cec1f89ccdb8b469b1)

[make-bookmarklets.com](https://make-bookmarklets.com/)

## How to contribute

If you would like to contribute to this project, feel free to:

1. [Raise an issue](https://github.com/bk7312/bookmarklets/issues) - Let me know if there's any bugs or bookmarklet request and I'll see what I can do.
2. [Create a pull request](https://github.com/bk7312/bookmarklets/pulls) - If you want to get your hands dirty and fix/improve/add a new bookmarklet yourself, feel free to fork this repo and create a PR.

How to add a new bookmarklet to this repo:

1. Fork or clone this repo and run `npm i` to install the required package, make sure you already have node.js installed.
2. Create a new `bookmarklets/bookmarklet-name.js` script for the bookmarklet you want to add.
3. Update `template/readme_template.md` to include a description and add `@bookmarklet-name.js` on a new line after your description.
4. Run `npm run build` to generate the updated `README.md` and `index.html` with the new bookmarklet.
5. Create a PR.
