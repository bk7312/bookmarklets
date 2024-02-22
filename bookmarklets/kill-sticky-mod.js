javascript: (() => {
  document.querySelectorAll('body *').forEach((node) => {
    if (['fixed', 'sticky'].includes(getComputedStyle(node).position)) {
      node.style.position = 'static';
    }
  });
  document.querySelectorAll('html *').forEach((node) => {
    const s = getComputedStyle(node);
    if ('hidden' === s['overflow']) {
      node.style['overflow'] = 'visible';
    }
    if ('hidden' === s['overflow-x']) {
      node.style['overflow-x'] = 'visible';
    }
    if ('hidden' === s['overflow-y']) {
      node.style['overflow-y'] = 'visible';
    }
  });
  const htmlNode = document.querySelector('html');
  htmlNode.style['overflow'] = 'visible';
  htmlNode.style['overflow-x'] = 'visible';
  htmlNode.style['overflow-y'] = 'visible';
})();
