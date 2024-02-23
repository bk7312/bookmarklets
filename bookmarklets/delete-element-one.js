javascript: (() => {
  let mouseX = 0;
  let mouseY = 0;
  const getEl = (e) => {
    const tags = document.querySelectorAll(e.tagName.toLowerCase());
    const idx = Array.from(tags).indexOf(e);
    return idx === -1 ? null : tags[idx];
  };
  const handleMouseover = (e) => {
    const el = getEl(e.target);
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (el) {
      el.style.outline = 'dashed';
    }
  };
  const handleMouseout = (e) => {
    const el = getEl(e.target);
    if (el) {
      el.style.outline = '';
    }
  };
  const unmount = () => {
    document.body.removeEventListener('click', handleClick);
    document.body.removeEventListener('mouseover', handleMouseover);
    document.body.removeEventListener('mouseout', handleMouseout);
    document.body.removeEventListener('keydown', handleEsc);
  };
  const handleClick = (e) => {
    e.preventDefault();
    const el = getEl(e.target);
    if (el) {
      el.remove();
      unmount();
    }
  };
  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      document.elementFromPoint(mouseX, mouseY).style.outline = '';
      unmount();
    }
  };
  document.body.addEventListener('click', handleClick);
  document.body.addEventListener('mouseover', handleMouseover);
  document.body.addEventListener('mouseout', handleMouseout);
  document.body.addEventListener('keydown', handleEsc);
})();
