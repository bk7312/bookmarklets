# Collection of bookmarklets

Here are some of the bookmarklets I've created or collected over the years for my personal use.

What are [bookmarklets](https://en.wikipedia.org/wiki/Bookmarklet)? They are basically bookmarks that execute javascript code when clicked instead of opening a website. Bookmarklets give you the power of javascript to do whatever you want (within the limits of your browser), so use it with care and only use bookmarklets you trust!

## How to install and use bookmarklets

To install a bookmarklet, create a new bookmark and paste the code into the URL bar. See examples below, images taken from [freeCodeCamp](https://www.freecodecamp.org/news/what-are-bookmarklets/).

**Only install bookmarklets from sources you trust and whenever possible, review the code before running it!**

#### Example using Firefox:

![firefox-1](https://github.com/bk7312/bookmarklets/assets/14029543/db38cfc8-145d-4fb0-8395-2a06cbc76723)

#### Example using Chromium:

![chromium](https://github.com/bk7312/bookmarklets/assets/14029543/f53a55f2-ecc0-4a68-8231-e85bad099072)


## Video-related bookmarklets

A collection of video-related bookmarklets, works as long as the website uses video tags. Applies to the first video on the website, won't work for videos inside an iframe. 

Note: It should be possible to repurpose these bookmarklets to work with audio content by changing the targeted HTML tag from 'video' to 'audio'. 

#### Video Controller

Creates a small video playback controller fixed to the top right side of the screen, able to change playback speed, restart the video, rewind or fast forward in 10s increments, play/pause, and mute/unmute the video.

```
javascript: (() => {
  if (!document.querySelector('video')) {
    return alert('No video tags found');
  }
  let vidControl = document.querySelector('#vidControl-div');
  if (vidControl) {
    return vidControl.remove();
  }
  const div = document.createElement("div");
  div.id = 'vidControl-div';
  div.style.zIndex = 9999;
  div.style.position = 'fixed';
  div.style.top = '0%';
  div.style.right = '0%';
  div.style.display = 'flex';
  div.style.gap = '0.2em';
  div.style.padding = '0.1em';
  div.style.userSelect = 'none';
  div.innerHTML = `
    <button id="vc-s" style="pointer-events: none;">${document.querySelector('video').playbackRate.toFixed(1)}x</button>
    <button onclick="const vid = document.querySelector('video'); vid.playbackRate -= 0.2; document.querySelector('#vc-s').textContent = vid.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">-</button>
    <button onclick="const vid = document.querySelector('video'); vid.playbackRate = 1; document.querySelector('#vc-s').textContent = vid.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">1x</button>
    <button onclick="const vid = document.querySelector('video'); vid.playbackRate = 2; document.querySelector('#vc-s').textContent = vid.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">2x</button>
    <button onclick="const vid = document.querySelector('video'); vid.playbackRate = 3; document.querySelector('#vc-s').textContent = vid.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">3x</button>
    <button onclick="const vid = document.querySelector('video'); vid.playbackRate += 0.2; document.querySelector('#vc-s').textContent = vid.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">+</button>
    <button onclick="document.querySelector('video').currentTime = 0;" style="cursor: pointer;">Restart</button>
    <button onclick="document.querySelector('video').currentTime -= 10;" style="cursor: pointer;">-10s</button>
    <button onclick="const vid = document.querySelector('video'); vid.paused ? vid.play() : vid.pause(); document.querySelector('#vc-p').textContent = vid.paused ? 'Play' : 'Pause'" id="vc-p" style="cursor: pointer;">${document.querySelector('video').paused ? 'Play' : 'Pause'}</button>
    <button onclick="document.querySelector('video').currentTime += 10;" style="cursor: pointer;">+10s</button>
    <button onclick="const vid = document.querySelector('video'); vid.muted = !vid.muted; document.querySelector('#vc-m').textContent = vid.muted ? 'Unmute' : 'Mute'" id="vc-m" style="cursor: pointer;">${document.querySelector('video').loop ? 'Unmute' : 'Mute'}</button>
    <button onclick="const vid = document.querySelector('video'); vid.loop = !vid.loop; document.querySelector('#vc-l').textContent = vid.loop ? 'Loop ON' : 'Loop OFF'" id="vc-l" style="cursor: pointer;">${document.querySelector('video').loop ? 'Loop ON' : 'Loop OFF'}</button>
  `;
  document.body.appendChild(div);
})()
```

#### Toggles default HTML5 video controls

Toggles the default HTML5 video controls and remove all controlsList attributes.

```
javascript: (() => {
  const vid = document.querySelector('video');
  if (!vid) {
    return alert('No video tags found');
  }
  vid.controls = !vid.controls;
  console.log("ControlsList before overwrite:", vid.controlsList);
  vid.controlsList = '';
  console.log("ControlsList after overwrite:", vid.controlsList);
})()
```

#### Change video playback speed

Changes the first video's playback speed, should work with youtube/vimeo and etc, also shows the current playback speed. 

```
javascript: (() => {
  const vid = document.querySelector('video');
  if (!vid) {
    return alert('No video tags found');
  }
  const x = prompt(`Playback Speed? (Current: ${vid.playbackRate})`);
  vid.playbackRate = parseFloat(x);
})()
```

#### Change all videos playback speed

Useful if there are multiple videos in a single page, changes the playback speed for all videos.

```
javascript: (() => {
  const vid = document.querySelectorAll('video');
  if (vid.length === 0) {
    return alert('No video tags found');
  }
  const x = prompt(`Playback Speed?`);
  vid.forEach(v => v.playbackRate = parseFloat(x));
})()
```

#### Play/pause video

Able to play/pause the first video, useful if video controls are hidden but recommend to use the video controller bookmarklet instead.

```
javascript: (() => {
  const vid = document.querySelector('video');
  if (!vid) {
    return alert('No video tags found');
  }
  vid.paused ? vid.play() : vid.pause();
})()
```

## Check for iframes and show their source URL

Handy bookmarklet to check for iframes on a website and show their source URL.

```
javascript: (() => {
  const iframes = document.querySelectorAll('iframe');
  if (iframes.length === 0) {
    return alert('No iframes found');
  }
  const src = [];
  iframes.forEach(i => src.push(i.src));
  alert(`${iframes.length} iframes found, src: ${src}`);
})()
```

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

## Color sampler bookmarklet 

Uses the [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper), unfortunately it is not supported in Firefox and Safari at the time of writing (Dec 2023). 

Also converts the HEX code to RGB and HSL values, code for converting RGB to HSL referenced from https://www.30secondsofcode.org/js/s/rgb-to-hsl/

```
javascript: (() => {
  const x = new EyeDropper();
  x.open()
    .then(res => {
      const hex = res.sRGBHex;
      const r = parseInt(hex.slice(1,3), 16);
      const g = parseInt(hex.slice(3,5), 16);
      const b = parseInt(hex.slice(5), 16);
      const rgbToHsl = (r, g, b) => {
        r /= 255;
        g /= 255;
        b /= 255;
        const l = Math.max(r, g, b);
        const s = l - Math.min(r, g, b);
        const h = s !== 0 ?
          l === r ?
            (g - b) / s : l === g ?
              2 + (b - r) / s
            : 4 + (r - g) / s
          : 0;
        return [
          (60 * h < 0 ? 60 * h + 360 : 60 * h).toFixed(2),
          (100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)).toFixed(2) + '%',
          ((100 * (2 * l - s)) / 2).toFixed(2) + '%',
        ];
      };
      alert(`Color is ${res.sRGBHex}, rgb(${r} ${g} ${b}), hsl(${rgbToHsl(r,g,b).join(' ')})`)
    })
    .catch(e => alert(`Error: ${e}`));
})()
```

## Slightly improve website readability

Simple bookmarklet to center the webpage, limit the width, and change the line height. Usually only works on simple websites, might break certain websites. 

```
javascript: (() => {
  b = document.body.style;
  b.margin = "1em auto";
  b.maxWidth = "80ch";
  b.lineHeight = "1.5";
})()
```

## Check website cookie info

Reads and displays your cookie info.

```
javascript: (() => alert(document.cookie))();
```

## Bookmarklet by others that I found useful

#### Kill Sticky

As the name implies, it's a bookmarklet that kills sticky content.

https://github.com/t-mart/kill-sticky

Here's a modified version I use that doesn't remove position fixed/sticky but makes them static instead.

```
javascript: (() => {
  document.querySelectorAll('body *').forEach(node => {
    if (['fixed', 'sticky'].includes(getComputedStyle(node).position))  {
      node.style.position = 'static';
    }
  });
  document.querySelectorAll('html *').forEach(node => {
    const s = getComputedStyle(node);
    if ('hidden' === s['overflow']) { node.style['overflow'] = 'visible'; }
    if ('hidden' === s['overflow-x']) { node.style['overflow-x'] = 'visible'; }
    if ('hidden' === s['overflow-y']) { node.style['overflow-y'] = 'visible'; }
  });
  const htmlNode = document.querySelector('html');
  htmlNode.style['overflow'] = 'visible';
  htmlNode.style['overflow-x'] = 'visible';
  htmlNode.style['overflow-y'] = 'visible';
})();
```

#### Kick ass app

Cool bookmarklet that lets you 'destroy' websites.

https://kickassapp.com/


## Some resources on making bookmarklets

https://www.freecodecamp.org/news/what-are-bookmarklets/

https://gist.github.com/caseywatts/c0cec1f89ccdb8b469b1

https://make-bookmarklets.com/
