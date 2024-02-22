javascript: (() => {
  const windowFeatures = `
    popup,
    width=100,
    height=100,
    left=${window.screen.availWidth},
    top=${window.screen.availHeight},
  `;
  window.open('', '', windowFeatures).document.body.innerHTML =
    '<input type="color">';
})();
