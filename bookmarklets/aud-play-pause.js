javascript: (() => {
  const aud = document.querySelector('audio');
  if (!aud) {
    return alert('No audio tags found');
  }
  aud.paused ? aud.play() : aud.pause();
})();
