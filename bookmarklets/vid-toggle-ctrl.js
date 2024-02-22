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
