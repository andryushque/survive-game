$(document).ready(function () {
  /*=== Header dropdown menu ===*/
  const selectSingle = document.querySelector(".select");
  const selectSingle_title = selectSingle.querySelector(".select__title");
  const selectSingle_labels = selectSingle.querySelectorAll(".select__label");

  // Toggle menu
  selectSingle_title.addEventListener("click", () => {
    if ("active" === selectSingle.getAttribute("data-state")) {
      selectSingle.setAttribute("data-state", "");
    } else {
      selectSingle.setAttribute("data-state", "active");
    }
  });

  // Close when click to option
  for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener("click", (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle.setAttribute("data-state", "");
    });
  }

  /*=== Mobile Menu ===*/
  var mmenuButton = $(".mmenu");
  mmenuButton.on("click", function () {
    mmenuButton.toggleClass("active");
    $(".header__nav").toggleClass("header__nav--hidden");
    $(".header__stores").toggleClass("header__stores--hidden");
  });
});
