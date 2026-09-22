// Potty Games — tiny site behaviors (mobile nav toggle only, no tracking)
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  // set current year in footer
  var yearEls = document.querySelectorAll("[data-year]");
  yearEls.forEach(function (el) { el.textContent = new Date().getFullYear(); });
});
