javascript: (() => {
  if (window.localStorage.length === 0) {
    return alert('No data in localStorage found');
  }
  let str = '';
  for (let [k, v] of Object.entries(window.localStorage)) {
    str += `key:${k}, val:${v}, `;
  }
  alert(str);
})();
