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
