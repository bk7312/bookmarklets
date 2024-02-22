javascript: (() => {
  const aud = document.querySelector('audio');
  if (!aud) {
    return alert('No audio tags found');
  }
  const x = prompt(`Playback Speed? (Current: ${aud.playbackRate})`);
  aud.playbackRate = parseFloat(x);
})();
