javascript: (() => {
  document.querySelectorAll('img').forEach((el) => {
    el.replaceWith(`img_alt: ${el.alt}`);
  });
  document.querySelectorAll('svg').forEach((el) => {
    el.replaceWith(
      `svg_title: ${el.querySelector('title')?.textContent ?? ''}`
    );
  });
  document
    .querySelectorAll('iframe, audio, video')
    .forEach((el) =>
      el.replaceWith(`${el.tagName.toLowerCase()}_src: ${el.src}`)
    );
  document
    .querySelectorAll('canvas')
    .forEach((el) => el.replaceWith(`canvas_WxH: ${el.width}x${el.height}`));
  document
    .querySelectorAll('[style]')
    .forEach((el) => el.removeAttribute('style'));
  document
    .querySelectorAll('style, link[rel="stylesheet"]')
    .forEach((el) => el.remove());
})();
