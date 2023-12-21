var btnOpen = document.querySelector(".open-modal-btn");
var modal = document.querySelector(".modal");
var btnClose = document.querySelector(".modal_footer button");
var iconClose = document.querySelector(".modal_header i");

function toogleModal() {
  modal.classList.toggle("hide");
}

btnOpen.addEventListener("click", toogleModal);

btnClose.addEventListener("click", toogleModal);

iconClose.addEventListener("click", toogleModal);

modal.addEventListener("click", function (e) {
  if (e.target === e.currentTarget) {
    toogleModal();
  }
});
