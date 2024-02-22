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
