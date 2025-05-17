javascript: (() => {
  document.querySelectorAll("*").foreach((el) => {
    el.style.filter = "blur(0) !important;";
    el.style.webkitFilter = "blur(0) !important;";
    el.style.backdropFilter = "blur(0) !important;";
    el.style.webkitBackdropFilter = "blur(0) !important;";
  });
})();
