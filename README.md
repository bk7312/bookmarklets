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

<a class='btn' href="javascript:(()=&#x3E;{let mouseX=0,mouseY=0;const undo=[],handleMouseover=e=&#x3E;{mouseX=e.clientX,mouseY=e.clientY,e.target.style.outline=&#x22;dashed&#x22;},handleMouseout=e=&#x3E;{e.target.style.outline=&#x22;&#x22;},handleClick=e=&#x3E;{e.preventDefault();var e=e.target,index=Array.from(e.parentElement.children).indexOf(e);undo.push([e,e.parentElement,index]),e.remove()},unmount=()=&#x3E;{document.elementFromPoint(mouseX,mouseY).style.outline=&#x22;&#x22;,document.body.removeEventListener(&#x22;click&#x22;,handleClick),document.body.removeEventListener(&#x22;mouseover&#x22;,handleMouseover),document.body.removeEventListener(&#x22;mouseout&#x22;,handleMouseout),document.body.removeEventListener(&#x22;keydown&#x22;,handleKeydown),document.body.removeEventListener(&#x22;contextmenu&#x22;,handleContextmenu)},handleKeydown=e=&#x3E;{var parentEl,index;&#x22;Escape&#x22;===e.key&#x26;&#x26;(e.preventDefault(),unmount()),&#x22;z&#x22;===e.key&#x26;&#x26;(e.ctrlKey||e.metaKey)&#x26;&#x26;0&#x3C;undo.length&#x26;&#x26;([e,parentEl,index]=undo.pop(),e.style.outline=&#x22;&#x22;,parentEl.insertBefore(e,parentEl.children[index]))},handleContextmenu=e=&#x3E;{e.preventDefault(),unmount()};document.body.addEventListener(&#x22;click&#x22;,handleClick),document.body.addEventListener(&#x22;mouseover&#x22;,handleMouseover),document.body.addEventListener(&#x22;mouseout&#x22;,handleMouseout),document.body.addEventListener(&#x22;keydown&#x22;,handleKeydown),document.body.addEventListener(&#x22;contextmenu&#x22;,handleContextmenu)})();" title="To install, drag and drop this link to your bookmarks">delete-element.js</a>
```
javascript: (() => {
  let mouseX = 0;
  let mouseY = 0;
  const undo = [];
  const handleMouseover = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    e.target.style.outline = 'dashed';
  };
  const handleMouseout = (e) => {
    e.target.style.outline = '';
  };
  const handleClick = (e) => {
    e.preventDefault();
    const el = e.target;
    const index = Array.from(el.parentElement.children).indexOf(el);
    undo.push([el, el.parentElement, index]);
    el.remove();
  };
  const unmount = () => {
    document.elementFromPoint(mouseX, mouseY).style.outline = '';
    document.body.removeEventListener('click', handleClick);
    document.body.removeEventListener('mouseover', handleMouseover);
    document.body.removeEventListener('mouseout', handleMouseout);
    document.body.removeEventListener('keydown', handleKeydown);
    document.body.removeEventListener('contextmenu', handleContextmenu);
  };
  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      unmount();
    }
    if (e.key === 'z' && (e.ctrlKey || e.metaKey) && undo.length > 0) {
      const [el, parentEl, index] = undo.pop();
      el.style.outline = '';
      parentEl.insertBefore(el, parentEl.children[index]);
    }
  };
  const handleContextmenu = (e) => {
    e.preventDefault();
    unmount();
  };
  document.body.addEventListener('click', handleClick);
  document.body.addEventListener('mouseover', handleMouseover);
  document.body.addEventListener('mouseout', handleMouseout);
  document.body.addEventListener('keydown', handleKeydown);
  document.body.addEventListener('contextmenu', handleContextmenu);
})();
```


Deletes an element on click, one time only, no undo. Press the Esc key or right-click to cancel.

<a class='btn' href="javascript:(()=&#x3E;{let mouseX=0,mouseY=0;const handleMouseover=e=&#x3E;{mouseX=e.clientX,mouseY=e.clientY,e.target.style.outline=&#x22;dashed&#x22;},handleMouseout=e=&#x3E;{e.target.style.outline=&#x22;&#x22;},unmount=()=&#x3E;{document.elementFromPoint(mouseX,mouseY).style.outline=&#x22;&#x22;,document.body.removeEventListener(&#x22;click&#x22;,handleClick),document.body.removeEventListener(&#x22;mouseover&#x22;,handleMouseover),document.body.removeEventListener(&#x22;mouseout&#x22;,handleMouseout),document.body.removeEventListener(&#x22;keydown&#x22;,handleKeydown),document.body.removeEventListener(&#x22;contextmenu&#x22;,handleContextmenu)},handleClick=e=&#x3E;{e.preventDefault(),e.target.remove(),unmount()},handleKeydown=e=&#x3E;{&#x22;Escape&#x22;===e.key&#x26;&#x26;(e.preventDefault(),unmount())},handleContextmenu=e=&#x3E;{e.preventDefault(),unmount()};document.body.addEventListener(&#x22;click&#x22;,handleClick),document.body.addEventListener(&#x22;mouseover&#x22;,handleMouseover),document.body.addEventListener(&#x22;mouseout&#x22;,handleMouseout),document.body.addEventListener(&#x22;keydown&#x22;,handleKeydown),document.body.addEventListener(&#x22;contextmenu&#x22;,handleContextmenu)})();" title="To install, drag and drop this link to your bookmarks">delete-element-one.js</a>
```
javascript: (() => {
  let mouseX = 0;
  let mouseY = 0;
  const handleMouseover = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    e.target.style.outline = 'dashed';
  };
  const handleMouseout = (e) => {
    e.target.style.outline = '';
  };
  const unmount = () => {
    document.elementFromPoint(mouseX, mouseY).style.outline = '';
    document.body.removeEventListener('click', handleClick);
    document.body.removeEventListener('mouseover', handleMouseover);
    document.body.removeEventListener('mouseout', handleMouseout);
    document.body.removeEventListener('keydown', handleKeydown);
    document.body.removeEventListener('contextmenu', handleContextmenu);
  };
  const handleClick = (e) => {
    e.preventDefault();
    e.target.remove();
    unmount();
  };
  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      unmount();
    }
  };
  const handleContextmenu = (e) => {
    e.preventDefault();
    unmount();
  };
  document.body.addEventListener('click', handleClick);
  document.body.addEventListener('mouseover', handleMouseover);
  document.body.addEventListener('mouseout', handleMouseout);
  document.body.addEventListener('keydown', handleKeydown);
  document.body.addEventListener('contextmenu', handleContextmenu);
})();
```


## Audio/Video-related bookmarklets

A collection of audio/video-related bookmarklets, works as long as the website uses audio/video tags. Applies to the first audio/video on the website, won't work for audios/videos inside an iframe.

Note: If you want to apply to a audio/video inside an iframe, use the iframe bookmarklet below to open the audio/video iframe in a new tab, then try the audio/video bookmarklet.

I was thinking of turning this into a browser extension to fix the iframe issue (see note above) but ended up using [this extension](https://github.com/igrigorik/videospeed) instead. Thinking of forking it and making my own version sometime.

### Audio/Video Controller

Creates a small audio/video playback controller fixed to the top right side of the screen, click the bookmarklet again to remove. Note that the controller buttons will be affected by the website's existing CSS.

Able to change playback speed, restart the audio/video, rewind or fast forward in 10s increments, play/pause, and mute/unmute the audio/video. The video controller is my most used bookmarklet when watching videos.

Note: Due to the use of `innerHTML`, this bookmarklet will not work on sites that require [TrustedHTML](https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML) assignment (CSP). In such cases, use the other bookmarklets below instead.

Audio:
<a class='btn' href="javascript:(()=&#x3E;{var audControl=document.querySelector(&#x22;#audControl-div&#x22;);return audControl?audControl.remove():document.querySelector(&#x22;audio&#x22;)?((audControl=document.createElement(&#x22;div&#x22;)).id=&#x22;audControl-div&#x22;,audControl.style.zIndex=&#x22;9999&#x22;,audControl.style.position=&#x22;fixed&#x22;,audControl.style.top=&#x22;0%&#x22;,audControl.style.right=&#x22;0%&#x22;,audControl.style.display=&#x22;flex&#x22;,audControl.style.gap=&#x22;0.2em&#x22;,audControl.style.padding=&#x22;0.1em&#x22;,audControl.style.userSelect=&#x22;none&#x22;,audControl.innerHTML=&#x60;
    &#x3C;button id=&#x22;ac-s&#x22; style=&#x22;pointer-events: none;&#x22;&#x3E;${document.querySelector(&#x22;audio&#x22;).playbackRate.toFixed(1)}x&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;const aud = document.querySelector(&#x27;audio&#x27;); aud.playbackRate -= 0.2; document.querySelector(&#x27;#ac-s&#x27;).textContent = aud.playbackRate.toFixed(1) + &#x27;x&#x27;&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;-&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;const aud = document.querySelector(&#x27;audio&#x27;); aud.playbackRate = 1; document.querySelector(&#x27;#ac-s&#x27;).textContent = aud.playbackRate.toFixed(1) + &#x27;x&#x27;&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;1x&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;const aud = document.querySelector(&#x27;audio&#x27;); aud.playbackRate = 2; document.querySelector(&#x27;#ac-s&#x27;).textContent = aud.playbackRate.toFixed(1) + &#x27;x&#x27;&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;2x&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;const aud = document.querySelector(&#x27;audio&#x27;); aud.playbackRate = 3; document.querySelector(&#x27;#ac-s&#x27;).textContent = aud.playbackRate.toFixed(1) + &#x27;x&#x27;&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;3x&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;const aud = document.querySelector(&#x27;audio&#x27;); aud.playbackRate += 0.2; document.querySelector(&#x27;#ac-s&#x27;).textContent = aud.playbackRate.toFixed(1) + &#x27;x&#x27;&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;+&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;document.querySelector(&#x27;audio&#x27;).currentTime = 0;&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;Restart&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;document.querySelector(&#x27;audio&#x27;).currentTime -= 10;&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;-10s&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;const aud = document.querySelector(&#x27;audio&#x27;); aud.paused ? aud.play() : aud.pause(); document.querySelector(&#x27;#ac-p&#x27;).textContent = aud.paused ? &#x27;Play&#x27; : &#x27;Pause&#x27;&#x22; id=&#x22;ac-p&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;${document.querySelector(&#x22;audio&#x22;).paused?&#x22;Play&#x22;:&#x22;Pause&#x22;}&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;document.querySelector(&#x27;audio&#x27;).currentTime += 10;&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;+10s&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;const aud = document.querySelector(&#x27;audio&#x27;); aud.muted = !aud.muted; document.querySelector(&#x27;#ac-m&#x27;).textContent = aud.muted ? &#x27;Unmute&#x27; : &#x27;Mute&#x27;&#x22; id=&#x22;ac-m&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;${document.querySelector(&#x22;audio&#x22;).loop?&#x22;Unmute&#x22;:&#x22;Mute&#x22;}&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;const aud = document.querySelector(&#x27;audio&#x27;); aud.loop = !aud.loop; document.querySelector(&#x27;#ac-l&#x27;).textContent = aud.loop ? &#x27;Loop ON&#x27; : &#x27;Loop OFF&#x27;&#x22; id=&#x22;ac-l&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;${document.querySelector(&#x22;audio&#x22;).loop?&#x22;Loop ON&#x22;:&#x22;Loop OFF&#x22;}&#x3C;/button&#x3E;
  &#x60;,document.body.appendChild(audControl),void 0):alert(&#x22;No audio tags found&#x22;)})();" title="To install, drag and drop this link to your bookmarks">aud-controller.js</a>
```
javascript: (() => {
  const audControl = document.querySelector('#audControl-div');
  if (audControl) {
    return audControl.remove();
  }
  if (!document.querySelector('audio')) {
    return alert('No audio tags found');
  }
  const div = document.createElement('div');
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
    <button id="ac-s" style="pointer-events: none;">${document
      .querySelector('audio')
      .playbackRate.toFixed(1)}x</button>
    <button onclick="const aud = document.querySelector('audio'); aud.playbackRate -= 0.2; document.querySelector('#ac-s').textContent = aud.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">-</button>
    <button onclick="const aud = document.querySelector('audio'); aud.playbackRate = 1; document.querySelector('#ac-s').textContent = aud.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">1x</button>
    <button onclick="const aud = document.querySelector('audio'); aud.playbackRate = 2; document.querySelector('#ac-s').textContent = aud.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">2x</button>
    <button onclick="const aud = document.querySelector('audio'); aud.playbackRate = 3; document.querySelector('#ac-s').textContent = aud.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">3x</button>
    <button onclick="const aud = document.querySelector('audio'); aud.playbackRate += 0.2; document.querySelector('#ac-s').textContent = aud.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">+</button>
    <button onclick="document.querySelector('audio').currentTime = 0;" style="cursor: pointer;">Restart</button>
    <button onclick="document.querySelector('audio').currentTime -= 10;" style="cursor: pointer;">-10s</button>
    <button onclick="const aud = document.querySelector('audio'); aud.paused ? aud.play() : aud.pause(); document.querySelector('#ac-p').textContent = aud.paused ? 'Play' : 'Pause'" id="ac-p" style="cursor: pointer;">${
      document.querySelector('audio').paused ? 'Play' : 'Pause'
    }</button>
    <button onclick="document.querySelector('audio').currentTime += 10;" style="cursor: pointer;">+10s</button>
    <button onclick="const aud = document.querySelector('audio'); aud.muted = !aud.muted; document.querySelector('#ac-m').textContent = aud.muted ? 'Unmute' : 'Mute'" id="ac-m" style="cursor: pointer;">${
      document.querySelector('audio').loop ? 'Unmute' : 'Mute'
    }</button>
    <button onclick="const aud = document.querySelector('audio'); aud.loop = !aud.loop; document.querySelector('#ac-l').textContent = aud.loop ? 'Loop ON' : 'Loop OFF'" id="ac-l" style="cursor: pointer;">${
      document.querySelector('audio').loop ? 'Loop ON' : 'Loop OFF'
    }</button>
  `;
  document.body.appendChild(div);
})();
```


Video:
<a class='btn' href="javascript:(()=&#x3E;{var vidControl=document.querySelector(&#x22;#vidControl-div&#x22;);return vidControl?vidControl.remove():document.querySelector(&#x22;video&#x22;)?((vidControl=document.createElement(&#x22;div&#x22;)).id=&#x22;vidControl-div&#x22;,vidControl.style.zIndex=&#x22;9999&#x22;,vidControl.style.position=&#x22;fixed&#x22;,vidControl.style.top=&#x22;0%&#x22;,vidControl.style.right=&#x22;0%&#x22;,vidControl.style.display=&#x22;flex&#x22;,vidControl.style.gap=&#x22;0.2em&#x22;,vidControl.style.padding=&#x22;0.1em&#x22;,vidControl.style.userSelect=&#x22;none&#x22;,vidControl.innerHTML=&#x60;
    &#x3C;button id=&#x22;vc-s&#x22; style=&#x22;pointer-events: none;&#x22;&#x3E;${document.querySelector(&#x22;video&#x22;).playbackRate.toFixed(1)}x&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;const vid = document.querySelector(&#x27;video&#x27;); vid.playbackRate -= 0.2; document.querySelector(&#x27;#vc-s&#x27;).textContent = vid.playbackRate.toFixed(1) + &#x27;x&#x27;&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;-&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;const vid = document.querySelector(&#x27;video&#x27;); vid.playbackRate = 1; document.querySelector(&#x27;#vc-s&#x27;).textContent = vid.playbackRate.toFixed(1) + &#x27;x&#x27;&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;1x&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;const vid = document.querySelector(&#x27;video&#x27;); vid.playbackRate = 2; document.querySelector(&#x27;#vc-s&#x27;).textContent = vid.playbackRate.toFixed(1) + &#x27;x&#x27;&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;2x&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;const vid = document.querySelector(&#x27;video&#x27;); vid.playbackRate = 3; document.querySelector(&#x27;#vc-s&#x27;).textContent = vid.playbackRate.toFixed(1) + &#x27;x&#x27;&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;3x&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;const vid = document.querySelector(&#x27;video&#x27;); vid.playbackRate += 0.2; document.querySelector(&#x27;#vc-s&#x27;).textContent = vid.playbackRate.toFixed(1) + &#x27;x&#x27;&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;+&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;document.querySelector(&#x27;video&#x27;).currentTime = 0;&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;Restart&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;document.querySelector(&#x27;video&#x27;).currentTime -= 10;&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;-10s&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;const vid = document.querySelector(&#x27;video&#x27;); vid.paused ? vid.play() : vid.pause(); document.querySelector(&#x27;#vc-p&#x27;).textContent = vid.paused ? &#x27;Play&#x27; : &#x27;Pause&#x27;&#x22; id=&#x22;vc-p&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;${document.querySelector(&#x22;video&#x22;).paused?&#x22;Play&#x22;:&#x22;Pause&#x22;}&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;document.querySelector(&#x27;video&#x27;).currentTime += 10;&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;+10s&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;const vid = document.querySelector(&#x27;video&#x27;); vid.muted = !vid.muted; document.querySelector(&#x27;#vc-m&#x27;).textContent = vid.muted ? &#x27;Unmute&#x27; : &#x27;Mute&#x27;&#x22; id=&#x22;vc-m&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;${document.querySelector(&#x22;video&#x22;).loop?&#x22;Unmute&#x22;:&#x22;Mute&#x22;}&#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;const vid = document.querySelector(&#x27;video&#x27;); vid.loop = !vid.loop; document.querySelector(&#x27;#vc-l&#x27;).textContent = vid.loop ? &#x27;Loop ON&#x27; : &#x27;Loop OFF&#x27;&#x22; id=&#x22;vc-l&#x22; style=&#x22;cursor: pointer;&#x22;&#x3E;${document.querySelector(&#x22;video&#x22;).loop?&#x22;Loop ON&#x22;:&#x22;Loop OFF&#x22;}&#x3C;/button&#x3E;
    &#x60;,document.body.appendChild(vidControl),void 0):alert(&#x22;No video tags found&#x22;)})();" title="To install, drag and drop this link to your bookmarks">vid-controller.js</a>
```
javascript: (() => {
  const vidControl = document.querySelector('#vidControl-div');
  if (vidControl) {
    return vidControl.remove();
  }
  if (!document.querySelector('video')) {
    return alert('No video tags found');
  }
  const div = document.createElement('div');
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
    <button id="vc-s" style="pointer-events: none;">${document
      .querySelector('video')
      .playbackRate.toFixed(1)}x</button>
    <button onclick="const vid = document.querySelector('video'); vid.playbackRate -= 0.2; document.querySelector('#vc-s').textContent = vid.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">-</button>
    <button onclick="const vid = document.querySelector('video'); vid.playbackRate = 1; document.querySelector('#vc-s').textContent = vid.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">1x</button>
    <button onclick="const vid = document.querySelector('video'); vid.playbackRate = 2; document.querySelector('#vc-s').textContent = vid.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">2x</button>
    <button onclick="const vid = document.querySelector('video'); vid.playbackRate = 3; document.querySelector('#vc-s').textContent = vid.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">3x</button>
    <button onclick="const vid = document.querySelector('video'); vid.playbackRate += 0.2; document.querySelector('#vc-s').textContent = vid.playbackRate.toFixed(1) + 'x'" style="cursor: pointer;">+</button>
    <button onclick="document.querySelector('video').currentTime = 0;" style="cursor: pointer;">Restart</button>
    <button onclick="document.querySelector('video').currentTime -= 10;" style="cursor: pointer;">-10s</button>
    <button onclick="const vid = document.querySelector('video'); vid.paused ? vid.play() : vid.pause(); document.querySelector('#vc-p').textContent = vid.paused ? 'Play' : 'Pause'" id="vc-p" style="cursor: pointer;">${
      document.querySelector('video').paused ? 'Play' : 'Pause'
    }</button>
    <button onclick="document.querySelector('video').currentTime += 10;" style="cursor: pointer;">+10s</button>
    <button onclick="const vid = document.querySelector('video'); vid.muted = !vid.muted; document.querySelector('#vc-m').textContent = vid.muted ? 'Unmute' : 'Mute'" id="vc-m" style="cursor: pointer;">${
      document.querySelector('video').loop ? 'Unmute' : 'Mute'
    }</button>
    <button onclick="const vid = document.querySelector('video'); vid.loop = !vid.loop; document.querySelector('#vc-l').textContent = vid.loop ? 'Loop ON' : 'Loop OFF'" id="vc-l" style="cursor: pointer;">${
      document.querySelector('video').loop ? 'Loop ON' : 'Loop OFF'
    }</button>
    `;
  document.body.appendChild(div);
})();
```


### Toggles default HTML5 audio/video controls

Toggles the default HTML5 audio/video controls and remove all `controlsList` attributes.

Audio:
<a class='btn' href="javascript:(()=&#x3E;{var aud=document.querySelector(&#x22;audio&#x22;);return aud?(aud.controls=!aud.controls,console.log(&#x22;ControlsList before overwrite:&#x22;,aud.controlsList),aud.controlsList=&#x22;&#x22;,console.log(&#x22;ControlsList after overwrite:&#x22;,aud.controlsList),void 0):alert(&#x22;No audio tags found&#x22;)})();" title="To install, drag and drop this link to your bookmarks">aud-toggle-ctrl.js</a>
```
javascript: (() => {
  const aud = document.querySelector('audio');
  if (!aud) {
    return alert('No audio tags found');
  }
  aud.controls = !aud.controls;
  console.log('ControlsList before overwrite:', aud.controlsList);
  aud.controlsList = '';
  console.log('ControlsList after overwrite:', aud.controlsList);
})();
```


Video:
<a class='btn' href="javascript:(()=&#x3E;{var vid=document.querySelector(&#x22;video&#x22;);return vid?(vid.controls=!vid.controls,console.log(&#x22;ControlsList before overwrite:&#x22;,vid.controlsList),vid.controlsList=&#x22;&#x22;,console.log(&#x22;ControlsList after overwrite:&#x22;,vid.controlsList),void 0):alert(&#x22;No video tags found&#x22;)})();" title="To install, drag and drop this link to your bookmarks">vid-toggle-ctrl.js</a>
```
javascript: (() => {
  const vid = document.querySelector('video');
  if (!vid) {
    return alert('No video tags found');
  }
  vid.controls = !vid.controls;
  console.log('ControlsList before overwrite:', vid.controlsList);
  vid.controlsList = '';
  console.log('ControlsList after overwrite:', vid.controlsList);
})();
```


### Change audio/video playback speed

Changes the first audio/video's playback speed, should work with youtube/vimeo and etc, also shows the current playback speed.

Audio:
<a class='btn' href="javascript:(()=&#x3E;{var x,aud=document.querySelector(&#x22;audio&#x22;);return aud?(x=prompt(&#x60;Playback Speed? (Current: ${aud.playbackRate})&#x60;),aud.playbackRate=parseFloat(x),void 0):alert(&#x22;No audio tags found&#x22;)})();" title="To install, drag and drop this link to your bookmarks">aud-speed.js</a>
```
javascript: (() => {
  const aud = document.querySelector('audio');
  if (!aud) {
    return alert('No audio tags found');
  }
  const x = prompt(`Playback Speed? (Current: ${aud.playbackRate})`);
  aud.playbackRate = parseFloat(x);
})();
```


Video:
<a class='btn' href="javascript:(()=&#x3E;{var x,vid=document.querySelector(&#x22;video&#x22;);return vid?(x=prompt(&#x60;Playback Speed? (Current: ${vid.playbackRate})&#x60;),vid.playbackRate=parseFloat(x),void 0):alert(&#x22;No video tags found&#x22;)})();" title="To install, drag and drop this link to your bookmarks">vid-speed.js</a>
```
javascript: (() => {
  const vid = document.querySelector('video');
  if (!vid) {
    return alert('No video tags found');
  }
  const x = prompt(`Playback Speed? (Current: ${vid.playbackRate})`);
  vid.playbackRate = parseFloat(x);
})();
```


### Change all audios/videos playback speed

Useful if there are multiple audios/videos in a single page, changes the playback speed for all audios/videos.

Audio:
<a class='btn' href="javascript:(()=&#x3E;{var aud=document.querySelectorAll(&#x22;audio&#x22;);if(0===aud.length)return alert(&#x22;No audio tags found&#x22;);const x=prompt(&#x22;Playback Speed?&#x22;);aud.forEach(a=&#x3E;a.playbackRate=parseFloat(x))})();" title="To install, drag and drop this link to your bookmarks">aud-speed-all.js</a>
```
javascript: (() => {
  const aud = document.querySelectorAll('audio');
  if (aud.length === 0) {
    return alert('No audio tags found');
  }
  const x = prompt(`Playback Speed?`);
  aud.forEach((a) => (a.playbackRate = parseFloat(x)));
})();
```


Video:
<a class='btn' href="javascript:(()=&#x3E;{var vid=document.querySelectorAll(&#x22;video&#x22;);if(0===vid.length)return alert(&#x22;No video tags found&#x22;);const x=prompt(&#x22;Playback Speed?&#x22;);vid.forEach(v=&#x3E;v.playbackRate=parseFloat(x))})();" title="To install, drag and drop this link to your bookmarks">vid-speed-all.js</a>
```
javascript: (() => {
  const vid = document.querySelectorAll('video');
  if (vid.length === 0) {
    return alert('No video tags found');
  }
  const x = prompt(`Playback Speed?`);
  vid.forEach((v) => (v.playbackRate = parseFloat(x)));
})();
```


### Play/pause audio or audio/video

Able to play/pause the first audio/video, useful if audio/video controls are hidden but recommend to use the audio/video controller bookmarklet instead.

Audio:
<a class='btn' href="javascript:(()=&#x3E;{var aud=document.querySelector(&#x22;audio&#x22;);return aud?(aud.paused?aud.play():aud.pause(),void 0):alert(&#x22;No audio tags found&#x22;)})();" title="To install, drag and drop this link to your bookmarks">aud-play-pause.js</a>
```
javascript: (() => {
  const aud = document.querySelector('audio');
  if (!aud) {
    return alert('No audio tags found');
  }
  aud.paused ? aud.play() : aud.pause();
})();
```


Video:
<a class='btn' href="javascript:(()=&#x3E;{var vid=document.querySelector(&#x22;video&#x22;);return vid?(vid.paused?vid.play():vid.pause(),void 0):alert(&#x22;No video tags found&#x22;)})();" title="To install, drag and drop this link to your bookmarks">vid-play-pause.js</a>
```
javascript: (() => {
  const vid = document.querySelector('video');
  if (!vid) {
    return alert('No video tags found');
  }
  vid.paused ? vid.play() : vid.pause();
})();
```


## Check for iframes and show their source URL

Handy bookmarklet to check for iframes on a website.

### Show iframes in separate panel

Creates a set of buttons showing the iframe's source URL (opens in new tab when clicked) fixed to the top right side of the screen, click the bookmarklet again to remove the buttons. Note that the buttons will be affected by the website's existing CSS.

Note: Due to the use of `innerHTML`, this bookmarklet will not work on sites that require [TrustedHTML](https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML) assignment (CSP). In such cases, use the other bookmarklets below instead.

<a class='btn' href="javascript:(()=&#x3E;{var ipd=document.querySelector(&#x22;#iframe-panel-div&#x22;);if(ipd)return ipd.remove();ipd=document.querySelectorAll(&#x22;iframe&#x22;);if(0===ipd.length)return alert(&#x22;No iframes found&#x22;);var div=document.createElement(&#x22;div&#x22;);div.id=&#x22;iframe-panel-div&#x22;,div.style.zIndex=&#x22;9999&#x22;,div.style.position=&#x22;fixed&#x22;,div.style.top=&#x22;0%&#x22;,div.style.right=&#x22;0%&#x22;,div.style.display=&#x22;flex&#x22;,div.style.flexDirection=&#x22;column&#x22;,div.style.gap=&#x22;0.2em&#x22;,div.style.padding=&#x22;0.1em&#x22;,div.style.userSelect=&#x22;none&#x22;,div.style.maxWidth=&#x22;320px&#x22;,div.style.maxHeight=&#x22;320px&#x22;,div.style.overflow=&#x22;auto&#x22;;let buttons=&#x22;&#x22;;ipd.forEach(i=&#x3E;{buttons+=&#x22;&#x22;===i.src?&#x27;&#x3C;button style=&#x22;pointer-events: none;&#x22;&#x3E;This iframe has no source&#x3C;/button&#x3E;&#x27;:&#x60;&#x3C;button onclick=&#x22;window.open(&#x27;${i.src}&#x27;, &#x27;_blank&#x27;);&#x22; style=&#x22;cursor: pointer; width: 100%; overflow-wrap: anywhere;&#x22;&#x3E;${i.src}&#x3C;/button&#x3E;&#x60;}),div.innerHTML=&#x60;
    &#x3C;div style=&#x22;display: flex;&#x22;&#x3E;
    &#x3C;button id=&#x22;vc-s&#x22; style=&#x22;pointer-events: none; flex-grow: 1;&#x22;&#x3E;      ${ipd.length} iframe(s) found, source(s) below
    &#x3C;/button&#x3E;
    &#x3C;button onclick=&#x22;document.querySelectorAll(&#x27;iframe&#x27;).forEach(i =&#x3E; i.remove())&#x22; style=&#x22;cursor: pointer; margin-left: auto;&#x22;&#x3E;
      Remove all
    &#x3C;/button&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;button id=&#x22;vc-s&#x22; style=&#x22;pointer-events: none; background: lightgray; border: none;&#x22;&#x3E;
      Click the url(s) to open in new tab
    &#x3C;/button&#x3E;
    ${buttons}
  &#x60;,document.body.appendChild(div)})();" title="To install, drag and drop this link to your bookmarks">iframe-panel.js</a>
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
  const div = document.createElement('div');
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
  iframes.forEach((i) => {
    buttons +=
      i.src === ''
        ? `<button style="pointer-events: none;">This iframe has no source</button>`
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
})();
```


### Show iframes in an alert dialog

Less versatile but works if the above bookmarklet doesn't.

<a class='btn' href="javascript:(()=&#x3E;{var iframes=document.querySelectorAll(&#x22;iframe&#x22;);if(0===iframes.length)return alert(&#x22;No iframes found&#x22;);let src=&#x22;&#x22;;iframes.forEach((i,idx)=&#x3E;src+=&#x60;${idx+1}: ${i.src}, &#x60;),alert(iframes.length+&#x22; iframes found, &#x22;+src)})();" title="To install, drag and drop this link to your bookmarks">iframe-alert.js</a>
```
javascript: (() => {
  const iframes = document.querySelectorAll('iframe');
  if (iframes.length === 0) {
    return alert('No iframes found');
  }
  let src = '';
  iframes.forEach((i, idx) => (src += `${idx + 1}: ${i.src}, `));
  alert(`${iframes.length} iframes found, ${src}`);
})();
```


## Color sampler bookmarklets

Some bookmarklets that help with color sampling.

### Using the EyeDropper API

Uses the [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper), unfortunately it is not supported in Firefox and Safari at the time of writing (Dec 2023).

Also converts the HEX code to RGB and HSL values, code for converting RGB to HSL referenced from [30secondsofcode.org](https://www.30secondsofcode.org/js/s/rgb-to-hsl/)

<a class='btn' href="javascript:void(void 0===window.EyeDropper?(alert(&#x22;Your browser doens&#x27;t support the EyeDropper API&#x22;),void 0):(new EyeDropper).open().then(res=&#x3E;{var hex=res.sRGBHex,r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),hex=parseInt(hex.slice(5),16);alert(&#x60;Color is ${res.sRGBHex}, rgb(${r} ${g} ${hex}), hsl(${((r,g,b)=&#x3E;{r/=255,g/=255,b/=255;var l=Math.max(r,g,b),s=l-Math.min(r,g,b),b=0!=s?l===r?(g-b)/s:l===g?2+(b-r)/s:4+(r-g)/s:0;return[(60*b&#x3C;0?60*b+360:60*b).toFixed(2),(100*(s?l&#x3C;=.5?s/(2*l-s):s/(2-(2*l-s)):0)).toFixed(2)+&#x22;%&#x22;,(100*(2*l-s)/2).toFixed(2)+&#x22;%&#x22;]})(r,g,hex).join(&#x22; &#x22;)})&#x60;)}).catch(e=&#x3E;alert(&#x22;Error: &#x22;+e)));" title="To install, drag and drop this link to your bookmarks">color-eyedropper.js</a>
```
javascript: (() => {
  if (typeof window.EyeDropper === 'undefined') {
    alert("Your browser doens't support the EyeDropper API");
    return;
  }
  const x = new EyeDropper();
  x.open()
    .then((res) => {
      const hex = res.sRGBHex;
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5), 16);
      const rgbToHsl = (r, g, b) => {
        r /= 255;
        g /= 255;
        b /= 255;
        const l = Math.max(r, g, b);
        const s = l - Math.min(r, g, b);
        const h =
          s !== 0
            ? l === r
              ? (g - b) / s
              : l === g
              ? 2 + (b - r) / s
              : 4 + (r - g) / s
            : 0;
        return [
          (60 * h < 0 ? 60 * h + 360 : 60 * h).toFixed(2),
          (
            100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)
          ).toFixed(2) + '%',
          ((100 * (2 * l - s)) / 2).toFixed(2) + '%',
        ];
      };
      alert(
        `Color is ${res.sRGBHex}, rgb(${r} ${g} ${b}), hsl(${rgbToHsl(
          r,
          g,
          b
        ).join(' ')})`
      );
    })
    .catch((e) => alert(`Error: ${e}`));
})();
```


### New popup window with color input element

Or alternatively, the bookmarklet below is an alternative if the EyeDropper API is not supported. It opens a color input element on a new popup window. Referenced from [css-tricks.com](https://css-tricks.com/web-development-bookmarklets/#comment-1795325), lightly modified for readability and to set the popup on the bottom right corner.

<a class='btn' href="javascript:(()=&#x3E;{var windowFeatures=&#x60;
    popup,
    width=100,
    height=100,
    left=${window.screen.availWidth},
    top=${window.screen.availHeight},
  &#x60;;window.open(&#x22;&#x22;,&#x22;&#x22;,windowFeatures).document.body.innerHTML=&#x27;&#x3C;input type=&#x22;color&#x22;&#x3E;&#x27;})();" title="To install, drag and drop this link to your bookmarks">color-popup.js</a>
```
javascript: (() => {
  const windowFeatures = `
    popup,
    width=100,
    height=100,
    left=${window.screen.availWidth},
    top=${window.screen.availHeight},
  `;
  window.open('', '', windowFeatures).document.body.innerHTML =
    '<input type="color">';
})();
```


## Check website data

Reads and displays your cookie data.

<a class='btn' href="javascript:alert(document.cookie||&#x22;No cookies found&#x22;);" title="To install, drag and drop this link to your bookmarks">show-cookies.js</a>
```
javascript: (() => alert(document.cookie || 'No cookies found'))();
```


Reads and displays your localStorage data.

<a class='btn' href="javascript:(()=&#x3E;{if(0===window.localStorage.length)return alert(&#x22;No data in localStorage found&#x22;);let str=&#x22;&#x22;;for(var[k,v]of Object.entries(window.localStorage))str+=&#x60;key:${k}, val:${v}, &#x60;;alert(str)})();" title="To install, drag and drop this link to your bookmarks">show-localstorage.js</a>
```
javascript: (() => {
  if (window.localStorage.length === 0) {
    return alert('No data in localStorage found');
  }
  let str = '';
  for (let [k, v] of Object.entries(window.localStorage)) {
    str += `key:${k}, val:${v}, `;
  }
  alert(str);
})();
```


Reads and displays your sessionStorage data.

<a class='btn' href="javascript:(()=&#x3E;{if(0===window.sessionStorage.length)return alert(&#x22;No data in sessionStorage found&#x22;);let str=&#x22;&#x22;;for(var[k,v]of Object.entries(window.sessionStorage))str+=&#x60;key:${k}, val:${v}, &#x60;;alert(str)})();" title="To install, drag and drop this link to your bookmarks">show-sessionstorage.js</a>
```
javascript: (() => {
  if (window.sessionStorage.length === 0) {
    return alert('No data in sessionStorage found');
  }
  let str = '';
  for (let [k, v] of Object.entries(window.sessionStorage)) {
    str += `key:${k}, val:${v}, `;
  }
  alert(str);
})();
```


## Bookmarklets for modifying websites

### Toggle designMode

Toggles [designMode](https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode) to make website editable.

<a class='btn' href="javascript:void(document.designMode=&#x22;on&#x22;===document.designMode?&#x22;off&#x22;:&#x22;on&#x22;);" title="To install, drag and drop this link to your bookmarks">toggle-designmode.js</a>
```
javascript: (() => {
  document.designMode = document.designMode === 'on' ? 'off' : 'on';
})();
```


### Slightly improve website readability

Simple bookmarklet to center the webpage, limit the width, and change the line height. Usually only works on simple websites, might break certain websites.

<a class='btn' href="javascript:(b=document.body.style).margin=&#x22;1em auto&#x22;,b.maxWidth=&#x22;80ch&#x22;,void(b.lineHeight=&#x22;1.5&#x22;);" title="To install, drag and drop this link to your bookmarks">simple-center.js</a>
```
javascript: (() => {
  b = document.body.style;
  b.margin = '1em auto';
  b.maxWidth = '80ch';
  b.lineHeight = '1.5';
})();
```


### Make text selectable

Makes the text in every element user selectable.

<a class='btn' href="javascript:void document.querySelectorAll(&#x22;*&#x22;).forEach(el=&#x3E;{el.style.webkitUserSelect=&#x22;text&#x22;,el.style.MozUserSelect=&#x22;text&#x22;,el.style.msUserSelect=&#x22;text&#x22;,el.style.userSelect=&#x22;text&#x22;});" title="To install, drag and drop this link to your bookmarks">user-select-text.js</a>
```
javascript: (() => {
  document.querySelectorAll("*").forEach((el) => {
    el.style.webkitUserSelect = "text";
    el.style.MozUserSelect = "text";
    el.style.msUserSelect = "text";
    el.style.userSelect = "text";
  });
})();
```


### Unblur all

Unblurs all element on the page.

<a class='btn' href="javascript:void document.querySelectorAll(&#x22;*&#x22;).foreach(el=&#x3E;{el.style.filter=&#x22;blur(0) !important;&#x22;,el.style.webkitFilter=&#x22;blur(0) !important;&#x22;,el.style.backdropFilter=&#x22;blur(0) !important;&#x22;,el.style.webkitBackdropFilter=&#x22;blur(0) !important;&#x22;});" title="To install, drag and drop this link to your bookmarks">unblur-all.js</a>
```
javascript: (() => {
  document.querySelectorAll("*").foreach((el) => {
    el.style.filter = "blur(0) !important;";
    el.style.webkitFilter = "blur(0) !important;";
    el.style.backdropFilter = "blur(0) !important;";
    el.style.webkitBackdropFilter = "blur(0) !important;";
  });
})();
```


### Remove CSS, image, and other media from a webpage

Ever want to remove all the CSS and images/videos/etc on a webpage? Well now you can with this amazing new bookmarklet! Removes img/svg/iframe/audio/video/canvas.

Why would you ever want to do that? Well, you can browse flashy websites without attracting the attention of others walking by (my current use case), and you can use it to see a before/after comparison of the website/webapp with and without CSS applied.

<a class='btn' href="javascript:document.querySelectorAll(&#x22;img&#x22;).forEach(el=&#x3E;{el.replaceWith(&#x22;img_alt: &#x22;+el.alt)}),document.querySelectorAll(&#x22;svg&#x22;).forEach(el=&#x3E;{el.replaceWith(&#x22;svg_title: &#x22;+(el.querySelector(&#x22;title&#x22;)?.textContent??&#x22;&#x22;))}),document.querySelectorAll(&#x22;iframe, audio, video&#x22;).forEach(el=&#x3E;el.replaceWith(el.tagName.toLowerCase()+&#x22;_src: &#x22;+el.src)),document.querySelectorAll(&#x22;canvas&#x22;).forEach(el=&#x3E;el.replaceWith(&#x60;canvas_WxH: ${el.width}x&#x60;+el.height)),document.querySelectorAll(&#x22;[style]&#x22;).forEach(el=&#x3E;el.removeAttribute(&#x22;style&#x22;)),void document.querySelectorAll(&#x27;style, link[rel=&#x22;stylesheet&#x22;]&#x27;).forEach(el=&#x3E;el.remove());" title="To install, drag and drop this link to your bookmarks">remove-css-media.js</a>
```
javascript: (() => {
  document.querySelectorAll('img').forEach((el) => {
    el.replaceWith(`img_alt: ${el.alt}`);
  });
  document.querySelectorAll('svg').forEach((el) => {
    el.replaceWith(
      `svg_title: ${el.querySelector('title')?.textContent ?? ''}`
    );
  });
  document
    .querySelectorAll('iframe, audio, video')
    .forEach((el) =>
      el.replaceWith(`${el.tagName.toLowerCase()}_src: ${el.src}`)
    );
  document
    .querySelectorAll('canvas')
    .forEach((el) => el.replaceWith(`canvas_WxH: ${el.width}x${el.height}`));
  document
    .querySelectorAll('[style]')
    .forEach((el) => el.removeAttribute('style'));
  document
    .querySelectorAll('style, link[rel="stylesheet"]')
    .forEach((el) => el.remove());
})();
```


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

<a class='btn' href="javascript:(()=&#x3E;{document.querySelectorAll(&#x22;body *&#x22;).forEach(node=&#x3E;{[&#x22;fixed&#x22;,&#x22;sticky&#x22;].includes(getComputedStyle(node).position)&#x26;&#x26;(node.style.position=&#x22;static&#x22;)}),document.querySelectorAll(&#x22;html *&#x22;).forEach(node=&#x3E;{var s=getComputedStyle(node);&#x22;hidden&#x22;===s.overflow&#x26;&#x26;(node.style.overflow=&#x22;visible&#x22;),&#x22;hidden&#x22;===s[&#x22;overflow-x&#x22;]&#x26;&#x26;(node.style[&#x22;overflow-x&#x22;]=&#x22;visible&#x22;),&#x22;hidden&#x22;===s[&#x22;overflow-y&#x22;]&#x26;&#x26;(node.style[&#x22;overflow-y&#x22;]=&#x22;visible&#x22;)});var htmlNode=document.querySelector(&#x22;html&#x22;);htmlNode.style.overflow=&#x22;visible&#x22;,htmlNode.style[&#x22;overflow-x&#x22;]=&#x22;visible&#x22;,htmlNode.style[&#x22;overflow-y&#x22;]=&#x22;visible&#x22;})();" title="To install, drag and drop this link to your bookmarks">kill-sticky-mod.js</a>
```
javascript: (() => {
  document.querySelectorAll('body *').forEach((node) => {
    if (['fixed', 'sticky'].includes(getComputedStyle(node).position)) {
      node.style.position = 'static';
    }
  });
  document.querySelectorAll('html *').forEach((node) => {
    const s = getComputedStyle(node);
    if ('hidden' === s['overflow']) {
      node.style['overflow'] = 'visible';
    }
    if ('hidden' === s['overflow-x']) {
      node.style['overflow-x'] = 'visible';
    }
    if ('hidden' === s['overflow-y']) {
      node.style['overflow-y'] = 'visible';
    }
  });
  const htmlNode = document.querySelector('html');
  htmlNode.style['overflow'] = 'visible';
  htmlNode.style['overflow-x'] = 'visible';
  htmlNode.style['overflow-y'] = 'visible';
})();
```


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

