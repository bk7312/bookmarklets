javascript: (() => {
  const ipd = document.querySelector('#iframe-panel-div');
  if (ipd) {
    return ipd.remove();
  }
  const iframes = document.querySelectorAll('iframe');
  if (iframes.length === 0) {
    return alert('No iframes found');
  }
  const div = document.createElement('div');
  div.id = 'iframe-panel-div';
  div.style.zIndex = '9999';
  div.style.position = 'fixed';
  div.style.top = '0%';
  div.style.right = '0%';
  div.style.display = 'flex';
  div.style.flexDirection = 'column';
  div.style.gap = '0.2em';
  div.style.padding = '0.1em';
  div.style.userSelect = 'none';
  div.style.maxWidth = '320px';
  div.style.maxHeight = '320px';
  div.style.overflow = 'auto';
  let buttons = '';
  iframes.forEach((i) => {
    buttons +=
      i.src === ''
        ? `<button style="pointer-events: none;">This iframe has no source</button>`
        : `<button onclick="window.open('${i.src}', '_blank');" style="cursor: pointer; width: 100%; overflow-wrap: anywhere;">${i.src}</button>`;
  });
  div.innerHTML = `
    <div style="display: flex;">
    <button id="vc-s" style="pointer-events: none; flex-grow: 1;">\
      ${iframes.length} iframe(s) found, source(s) below
    </button>
    <button onclick="document.querySelectorAll('iframe').forEach(i => i.remove())" style="cursor: pointer; margin-left: auto;">
      Remove all
    </button>
    </div>
    <button id="vc-s" style="pointer-events: none; background: lightgray; border: none;">
      Click the url(s) to open in new tab
    </button>
    ${buttons}
  `;
  document.body.appendChild(div);
})();
