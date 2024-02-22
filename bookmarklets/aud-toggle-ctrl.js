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
