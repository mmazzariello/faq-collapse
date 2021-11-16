const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach(function (el) {
  el.addEventListener("click", () => {
    el.parentNode.classList.toggle("active");
  });
});
