javascript: (() => {
  const vid = document.querySelectorAll('video');
  if (vid.length === 0) {
    return alert('No video tags found');
  }
  const x = prompt(`Playback Speed?`);
  vid.forEach((v) => (v.playbackRate = parseFloat(x)));
})();
