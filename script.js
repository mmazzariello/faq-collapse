const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach(function (el) {
  el.addEventListener("click", () => {
    console.log("hola", el.parentNode);
    el.parentNode.classList.toggle("active");
  });
});
