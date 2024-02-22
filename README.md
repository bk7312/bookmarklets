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

If you want to apply to a video inside an iframe, use the iframe bookmarklet below to open the video iframe in a new tab, then try the video bookmarklet.

Note: It should be possible to repurpose these bookmarklets to work with audio content by changing the targeted HTML tag from 'video' to 'audio'.

#### Video Controller

Creates a small video playback controller fixed to the top right side of the screen, click the bookmarklet again to remove. Note that the controller buttons will be affected by the website's existing CSS.

Able to change playback speed, restart the video, rewind or fast forward in 10s increments, play/pause, and mute/unmute the video.

Note: Due to the use of innerHTML, this bookmarklet will not work on sites that require [TrustedHTML](https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML) assignment (CSP). In such cases, use the other bookmarklets below instead.

```
javascript: (() => {
  const vidControl = document.querySelector('#vidControl-div');
  if (vidControl) {
    return vidControl.remove();
  }
  if (!document.querySelector('video')) {
    return alert('No video tags found');
  }
  const div = document.createElement("div");
  div.id = 'vidControl-div';
  div.style.zIndex = '9999';
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

## Audio-related bookmarklets

A collection of audio-related bookmarklets, works as long as the website uses audio tags. Applies to the first audio on the website, won't work for audios inside an iframe.

If you want to apply to a audio inside an iframe, use the iframe bookmarklet below to open the audio iframe in a new tab, then try the audio bookmarklet.

Note: Repurposed from the video bookmarklets.

#### Audio Controller

Creates a small audio playback controller fixed to the top right side of the screen, click the bookmarklet again to remove. Note that the controller buttons will be affected by the website's existing CSS.

Able to change playback speed, restart the audio, rewind or fast forward in 10s increments, play/pause, and mute/unmute the audio.

Note: Due to the use of innerHTML, this bookmarklet will not work on sites that require [TrustedHTML](https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML) assignment (CSP). In such cases, use the other bookmarklets below instead.

```
javascript: (() => {
  const audControl = document.querySelector('#audControl-div');
  if (audControl) {
    return audControl.remove();
  }
  if (!document.querySelector('audio')) {
    return alert('No audio tags found');
  }
  const div = document.createElement("div");
  div.id = 'audControl-div';
  div.style.zIndex = '9999';
  div.style.position = 'fixed';
  div.style.top = '0%';
  div.style.right = '0%';
  div.style.display = 'flex';
  div.style.gap = '0.2em';
  div.style.padding = '0.1em';
  div.style.userSelect = 'none';
  div.innerHTML = `
    <button id="ac-s" style="pointer-events: none;">${document.querySelector('audio').playbackRate.toFixed(1)}x</button>
    <button onclick="const aud = document.querySelector('audio'); aud.playbackRate -= 0.2; document.querySelector('#ac-s').textContent = aud.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">-</button>
    <button onclick="const aud = document.querySelector('audio'); aud.playbackRate = 1; document.querySelector('#ac-s').textContent = aud.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">1x</button>
    <button onclick="const aud = document.querySelector('audio'); aud.playbackRate = 2; document.querySelector('#ac-s').textContent = aud.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">2x</button>
    <button onclick="const aud = document.querySelector('audio'); aud.playbackRate = 3; document.querySelector('#ac-s').textContent = aud.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">3x</button>
    <button onclick="const aud = document.querySelector('audio'); aud.playbackRate += 0.2; document.querySelector('#ac-s').textContent = aud.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">+</button>
    <button onclick="document.querySelector('audio').currentTime = 0;" style="cursor: pointer;">Restart</button>
    <button onclick="document.querySelector('audio').currentTime -= 10;" style="cursor: pointer;">-10s</button>
    <button onclick="const aud = document.querySelector('audio'); aud.paused ? aud.play() : aud.pause(); document.querySelector('#ac-p').textContent = aud.paused ? 'Play' : 'Pause'" id="ac-p" style="cursor: pointer;">${document.querySelector('audio').paused ? 'Play' : 'Pause'}</button>
    <button onclick="document.querySelector('audio').currentTime += 10;" style="cursor: pointer;">+10s</button>
    <button onclick="const aud = document.querySelector('audio'); aud.muted = !aud.muted; document.querySelector('#ac-m').textContent = aud.muted ? 'Unmute' : 'Mute'" id="ac-m" style="cursor: pointer;">${document.querySelector('audio').loop ? 'Unmute' : 'Mute'}</button>
    <button onclick="const aud = document.querySelector('audio'); aud.loop = !aud.loop; document.querySelector('#ac-l').textContent = aud.loop ? 'Loop ON' : 'Loop OFF'" id="ac-l" style="cursor: pointer;">${document.querySelector('audio').loop ? 'Loop ON' : 'Loop OFF'}</button>
  `;
  document.body.appendChild(div);
})()
```

#### Toggles default HTML5 audio controls

Toggles the default HTML5 audio controls and remove all controlsList attributes.

```
javascript: (() => {
  const aud = document.querySelector('audio');
  if (!aud) {
    return alert('No audio tags found');
  }
  aud.controls = !aud.controls;
  console.log("ControlsList before overwrite:", aud.controlsList);
  aud.controlsList = '';
  console.log("ControlsList after overwrite:", aud.controlsList);
})()
```

#### Change audio playback speed

Changes the first audio's playback speed, also shows the current playback speed.

```
javascript: (() => {
  const aud = document.querySelector('audio');
  if (!aud) {
    return alert('No audio tags found');
  }
  const x = prompt(`Playback Speed? (Current: ${aud.playbackRate})`);
  aud.playbackRate = parseFloat(x);
})()
```

#### Change all audios playback speed

Useful if there are multiple audios in a single page, changes the playback speed for all audios.

```
javascript: (() => {
  const aud = document.querySelectorAll('audio');
  if (aud.length === 0) {
    return alert('No audio tags found');
  }
  const x = prompt(`Playback Speed?`);
  aud.forEach(a => a.playbackRate = parseFloat(x));
})()
```

#### Play/pause audio

Able to play/pause the first audio, useful if audio controls are hidden but recommend to use the audio controller bookmarklet instead.

```
javascript: (() => {
  const aud = document.querySelector('audio');
  if (!aud) {
    return alert('No audio tags found');
  }
  aud.paused ? aud.play() : aud.pause();
})()
```

## Check for iframes and show their source URL

Handy bookmarklet to check for iframes on a website.

#### Show iframes in separate panel

Creates a set of buttons showing the iframe's source URL (opens in new tab when clicked) fixed to the top right side of the screen, click the bookmarklet again to remove the buttons. Note that the buttons will be affected by the website's existing CSS.

Note: Due to the use of innerHTML, this bookmarklet will not work on sites that require [TrustedHTML](https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML) assignment (CSP). In such cases, use the other bookmarklets below instead.

```
javascript: (() => {
  const ipd = document.querySelector('#iframe-panel-div');
  if (ipd) {
    return ipd.remove();
  }
  const iframes = document.querySelectorAll('iframe');
  if (iframes.length === 0) {
    return alert('No iframes found');
  }
  const div = document.createElement("div");
  div.id = 'iframe-panel-div';
  div.style.zIndex = '9999';
  div.style.position = 'fixed';
  div.style.top = '0%';
  div.style.right = '0%';
  div.style.display = 'flex';
  div.style.flexDirection = 'column';
  div.style.gap = '0.2em';
  div.style.padding = '0.1em';
  div.style.userSelect = 'none';
  div.style.maxWidth = '320px';
  div.style.maxHeight = '320px';
  div.style.overflow = 'auto';
  let buttons = '';
  iframes.forEach(i => {
    buttons += i.src === '' ?
      `<button style="pointer-events: none;">This iframe has no source</button>`
      : `<button onclick="window.open('${i.src}', '_blank');" style="cursor: pointer; width: 100%; overflow-wrap: anywhere;">${i.src}</button>`;
  });
  div.innerHTML = `
    <div style="display: flex;">
      <button id="vc-s" style="pointer-events: none; flex-grow: 1;">\
        ${iframes.length} iframe(s) found, source(s) below
      </button>
      <button onclick="document.querySelectorAll('iframe').forEach(i => i.remove())" style="cursor: pointer; margin-left: auto;">
        Remove all
      </button>
    </div>
    <button id="vc-s" style="pointer-events: none; background: lightgray; border: none;">
      Click the url(s) to open in new tab
    </button>
    ${buttons}
  `;
  document.body.appendChild(div);
})()
```

#### Show iframes in an alert dialog

Less versatile but works if the above bookmarklet doesn't.

```
javascript: (() => {
  const iframes = document.querySelectorAll('iframe');
  if (iframes.length === 0) {
    return alert('No iframes found');
  }
  let src = '';
  iframes.forEach((i, idx) => src += `${idx + 1}: ${i.src}, `);
  alert(`${iframes.length} iframes found, ${src}`);
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

## Color sampler bookmarklets

Some bookmarklets that help with color sampling.

#### Using the EyeDropper API

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

#### New page with color input element

The bookmarklet below is an alternative if the EyeDropper API is not supported, it opens a webpage with a color input element. Note that this replaces the current page you are on, best used on a new tab, click on the input element followed by the eyedropper icon.

```
data:text/html;charset=utf-8,<input type='color'/>
```

#### New popup window with color input element

Or alternatively, the bookmarklet below opens a color input element on a new popup window. Referenced from https://css-tricks.com/web-development-bookmarklets/#comment-1795325, lightly modified for readability and to set the popup on the bottom right corner.

```
javascript:(() => {
  const windowFeatures = `
    popup,
    width=100,
    height=100,
    left=${window.screen.availWidth},
    top=${window.screen.availHeight},
  `;
  window.open('', '', windowFeatures).document.body.innerHTML = '<input type="color">';
})();
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

## Toggle designMode

Toggles [designMode](https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode) to make website editable.

```
javascript: (() => {
  document.designMode = document.designMode === 'on' ? 'off' : 'on';
})()
```

## Delete element on click

Deletes an element on click (One time only)

```
javascript: (() => {
  const getEl = (e) => {
    const tags = document.querySelectorAll(e.target.tagName.toLowerCase());
    const idx = Array.from(tags).indexOf(e.target);
    return idx === -1 ? null : tags[idx];
  };
  const handleMouseover = (e) => {
    const el = getEl(e);
    if (el) {
      el.style.outline = 'dashed';
    }
  };
  const handleMouseout = (e) => {
    const el = getEl(e);
    if (el) {
      el.style.outline = '';
    }
  };
  const unmount = () => {
    document.body.removeEventListener('click', handleClick);
    document.body.removeEventListener('mouseover', handleMouseover);
    document.body.removeEventListener('mouseout', handleMouseout);
    document.body.removeEventListener('keydown', handleEsc);
  };
  const handleClick = (e) => {
    e.preventDefault();
    const el = getEl(e);
    if (el) {
      el.remove();
      unmount();
    }
  };
  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      unmount();
    }
  };
  document.body.addEventListener('click', handleClick);
  document.body.addEventListener('mouseover', handleMouseover);
  document.body.addEventListener('mouseout', handleMouseout);
  document.body.addEventListener('keydown', handleEsc);
})();
```

Deletes an element on click (Active until page reload or Esc key pressed)

```
javascript: (() => {
  const getEl = (e) => {
    const tags = document.querySelectorAll(e.target.tagName.toLowerCase());
    const idx = Array.from(tags).indexOf(e.target);
    return idx === -1 ? null : tags[idx];
  };
  const handleMouseover = (e) => {
    const el = getEl(e);
    if (el) {
      el.style.outline = 'dashed';
    }
  };
  const handleMouseout = (e) => {
    const el = getEl(e);
    if (el) {
      el.style.outline = '';
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    const el = getEl(e);
    if (el) {
      el.remove();
    }
  };
  const unmount = () => {
    document.body.removeEventListener('click', handleClick);
    document.body.removeEventListener('mouseover', handleMouseover);
    document.body.removeEventListener('mouseout', handleMouseout);
    document.body.removeEventListener('keydown', handleEsc);
  };
  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      unmount();
    }
  };
  document.body.addEventListener('click', handleClick);
  document.body.addEventListener('mouseover', handleMouseover);
  document.body.addEventListener('mouseout', handleMouseout);
  document.body.addEventListener('keydown', handleEsc);
})();
```

## Check website data

Reads and displays your cookie data.

```
javascript: (() => alert(document.cookie || 'No cookies found'))();
```

Reads and displays your localStorage data.

```
javascript: (() => {
  if (localStorage.length === 0) {
    return alert('No data in localStorage found');
  }
  let str = '';
  for (let [k, v] of Object.entries(localStorage)) {
    str += `key:${k}, val:${v}, `;
  }
  alert(str);
})();
```

Reads and displays your sessionStorage data.

```
javascript: (() => {
  if (sessionStorage.length === 0) {
    return alert('No data in sessionStorage found');
  }
  let str = '';
  for (let [k, v] of Object.entries(sessionStorage)) {
    str += `key:${k}, val:${v}, `;
  }
  alert(str);
})();
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

#### Web development bookmarklets from CSS-tricks

Some useful bookmarklets for web development, more available in the comments section.

https://css-tricks.com/web-development-bookmarklets/

## Some resources on making bookmarklets

https://www.freecodecamp.org/news/what-are-bookmarklets/

https://gist.github.com/caseywatts/c0cec1f89ccdb8b469b1

https://make-bookmarklets.com/
