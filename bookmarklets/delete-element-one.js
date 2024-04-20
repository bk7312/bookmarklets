javascript: (() => {
  let mouseX = 0;
  let mouseY = 0;
  const handleMouseover = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    e.target.style.outline = 'dashed';
  };
  const handleMouseout = (e) => {
    e.target.style.outline = '';
  };
  const unmount = () => {
    document.elementFromPoint(mouseX, mouseY).style.outline = '';
    document.body.removeEventListener('click', handleClick);
    document.body.removeEventListener('mouseover', handleMouseover);
    document.body.removeEventListener('mouseout', handleMouseout);
    document.body.removeEventListener('keydown', handleKeydown);
    document.body.removeEventListener('contextmenu', handleContextmenu);
  };
  const handleClick = (e) => {
    e.preventDefault();
    e.target.remove();
    unmount();
  };
  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      unmount();
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
