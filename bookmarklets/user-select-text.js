javascript: (() => {
  document.querySelectorAll("*").forEach((el) => {
    el.style.webkitUserSelect = "text";
    el.style.MozUserSelect = "text";
    el.style.msUserSelect = "text";
    el.style.userSelect = "text";
  });
})();
