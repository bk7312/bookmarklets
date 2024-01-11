# Collection of bookmarklets

Here's a collection of bookmarklets I've used over the years

## Video-related bookmarklets
A collection of video-related bookmarklets, works as long as the website uses video tags. Applies to the first video on the website, might not work if the video tags are inside an iframe. 

Note: It should be possible to repurpose these bookmarklets to work with audio content by changing the targeted HTML tag from 'video' to 'audio'. 

#### Video Controller
Creates a small video playback controller fixed to the top right side of the screen, able to change playback speed, restart the video, rewind or fast forward in 10s increments, play/pause, and mute/unmute the video.
```
javascript: (() => {if (!document.getElementsByTagName(%27video%27)[0]) {return alert('No video tags found')} let vidControl = document.getElementById('vidControl-div'); if (vidControl) {return vidControl.remove()}const div = document.createElement("div"); div.id = 'vidControl-div'; div.style.zIndex = 9999; div.style.position = 'fixed'; div.style.top = '0%'; div.style.right = '0%'; div.style.display = 'flex'; div.style.gap = '0.2em'; div.style.padding = '0.1em';document.body.appendChild(div); document.getElementById('vidControl-div').innerHTML = `<button onclick="document.getElementsByTagName(%27video%27)[0].playbackRate -= 0.2;">-</button><button onclick="document.getElementsByTagName(%27video%27)[0].playbackRate = 1;">1x</button><button onclick="document.getElementsByTagName(%27video%27)[0].playbackRate = 2;">2x</button><button onclick="document.getElementsByTagName(%27video%27)[0].playbackRate = 3;">3x</button><button onclick="document.getElementsByTagName(%27video%27)[0].playbackRate += 0.2;">+</button><button onclick="document.getElementsByTagName(%27video%27)[0].currentTime = 0;">Restart</button><button  onclick="document.getElementsByTagName(%27video%27)[0].currentTime -= 10;">-10s</button><button onclick="const vid = document.getElementsByTagName(%27video%27)[0]; vid.paused ? vid.play() : vid.pause();">Play/Pause</button><button onclick="document.getElementsByTagName(%27video%27)[0].currentTime += 10;">+10s</button><button onclick="const vid = document.getElementsByTagName(%27video%27)[0]; vid.muted = !vid.muted;">Mute/Unmute</button>`;} )()
```

#### Change video playback speed
Changes the first video's playback speed, should work with youtube/vimeo and etc, also shows the current playback speed. 
```
javascript: (() => {const vid = document.getElementsByTagName(%27video%27)[0]; if (!vid) {alert('No video tags found')} else {const x = prompt(`Playback Speed? (Current: ${vid.playbackRate})`); vid.playbackRate = parseFloat(x);}})()
```

#### Change all videos playback speed
Useful if there are multiple videos in a single page, changes the playback speed for all videos.
```
javascript: (() => {const vid = document.querySelectorAll(%27video%27); if (vid.length === 0) {alert('No video tags found')} else {const x = prompt(`Playback Speed?`); vid.forEach(v => v.playbackRate = parseFloat(x));}})()
```

#### Play/pause video
Able to play/pause the first video, useful if video controls are hidden but recommend to use the video controller bookmarklet instead.
```
javascript: (() => {const vid = document.getElementsByTagName(%27video%27)[0]; if (!vid) {alert('No video tags found')} else {vid.paused ? vid.play() : vid.pause()}})()
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
```
javascript: (() => {const x = new EyeDropper(); x.open().then(res => alert(`Hex color is ${res.sRGBHex}. Go to https://htmlcolorcodes.com/hex-to-rgb/?hex=${res.sRGBHex.slice(1)} to convert to RGB/HSL/HSV/CMYK values.`)).catch(e => alert(`Error: ${e}`));})()
```

## Slightly improve website readability
Simple bookmarklet to center the webpage, limit the width, and change the line height. Usually only works on simple websites, might break certain websites. 
```
javascript: (() => {b = document.body.style; b.margin = "1em auto"; b.maxWidth = "80ch"; b.lineHeight = "1.5";})()
```

## Check website cookie info
Reads and displays your cookie info
```
javascript: (() => {alert(document.cookie);})();
```

## Bookmarklet by others that I found useful

#### Kill Sticky

As the name implies, it's a bookmarklet that kills sticky content.

https://github.com/t-mart/kill-sticky

#### Kick ass app

Cool bookmarklet that lets you 'destroy' websites.

https://kickassapp.com/


## Some resources on making bookmarklets

https://www.freecodecamp.org/news/what-are-bookmarklets/

https://gist.github.com/caseywatts/c0cec1f89ccdb8b469b1

https://make-bookmarklets.com/
