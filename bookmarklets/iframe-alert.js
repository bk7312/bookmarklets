javascript: (() => {
  const iframes = document.querySelectorAll('iframe');
  if (iframes.length === 0) {
    return alert('No iframes found');
  }
  let src = '';
  iframes.forEach((i, idx) => (src += `${idx + 1}: ${i.src}, `));
  alert(`${iframes.length} iframes found, ${src}`);
})();
