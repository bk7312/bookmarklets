javascript: (() => {
  let mouseX = 0;
  let mouseY = 0;
  const undo = [];
  const handleMouseover = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    e.target.style.outline = 'dashed';
  };
  const handleMouseout = (e) => {
    e.target.style.outline = '';
  };
  const handleClick = (e) => {
    e.preventDefault();
    const el = e.target;
    const index = Array.from(el.parentElement.children).indexOf(el);
    undo.push([el, el.parentElement, index]);
    el.remove();
  };
  const unmount = () => {
    document.elementFromPoint(mouseX, mouseY).style.outline = '';
    document.body.removeEventListener('click', handleClick);
    document.body.removeEventListener('mouseover', handleMouseover);
    document.body.removeEventListener('mouseout', handleMouseout);
    document.body.removeEventListener('keydown', handleKeydown);
    document.body.removeEventListener('contextmenu', handleContextmenu);
  };
  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      unmount();
    }
    if (e.key === 'z' && (e.ctrlKey || e.metaKey) && undo.length > 0) {
      const [el, parentEl, index] = undo.pop();
      el.style.outline = '';
      parentEl.insertBefore(el, parentEl.children[index]);
    }
  };
  const handleContextmenu = (e) => {
    e.preventDefault();
    unmount();
  };
  document.body.addEventListener('click', handleClick);
  document.body.addEventListener('mouseover', handleMouseover);
  document.body.addEventListener('mouseout', handleMouseout);
  document.body.addEventListener('keydown', handleKeydown);
  document.body.addEventListener('contextmenu', handleContextmenu);
})();
