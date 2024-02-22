javascript: (() => {
  if (sessionStorage.length === 0) {
    return alert('No data in sessionStorage found');
  }
  let str = '';
  for (let [k, v] of Object.entries(sessionStorage)) {
    str += `key:${k}, val:${v}, `;
  }
  alert(str);
})();
