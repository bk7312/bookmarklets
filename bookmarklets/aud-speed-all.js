javascript: (() => {
  const aud = document.querySelectorAll('audio');
  if (aud.length === 0) {
    return alert('No audio tags found');
  }
  const x = prompt(`Playback Speed?`);
  aud.forEach((a) => (a.playbackRate = parseFloat(x)));
})();
