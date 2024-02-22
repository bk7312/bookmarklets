javascript: (() => {
  const vid = document.querySelector('video');
  if (!vid) {
    return alert('No video tags found');
  }
  vid.paused ? vid.play() : vid.pause();
})();
