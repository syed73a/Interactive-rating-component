const submitBtn = document.querySelector(".component__cta");
const modalShow = document.querySelector(".modal");
const ratingComp = document.querySelector(".rating__component");
const ratingBtn = document.querySelectorAll(".rating__btn");
const modalRating = document.querySelector(".modal__subtitle");

ratingBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    ratingBtn.forEach(function (prevButton) {
      prevButton.classList.remove("rated");
    });

    button.classList.add("rated");
    const ratingValue = this.innerText;
    modalRating.innerText = `You selected ${ratingValue} out of 5`;
  });
});

submitBtn.addEventListener("click", function () {
  ratingComp.classList.add("hidden");
  modalShow.classList.remove("hidden");

  setTimeout(function () {
    ratingComp.classList.remove("hidden");
    modalShow.classList.add("hidden");
    ratingBtn.forEach(function (prevButton) {
      prevButton.classList.remove("rated");
    });
  }, 5000);
});
