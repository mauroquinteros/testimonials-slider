const $buttons = document.querySelectorAll(".button--arrow");

const $firstImage = document.querySelector("#tanya-image");
const $secondImage = document.querySelector("#john-image");

const $firstDescription = document.querySelector("#first-description");
const $secondDescription = document.querySelector("#second-description");

$buttons.forEach(($button) => {
  $button.addEventListener("click", () => {
    $firstImage.classList.toggle("none");
    $secondImage.classList.toggle("none");
    $firstDescription.classList.toggle("none");
    $secondDescription.classList.toggle("none");
  });
});
