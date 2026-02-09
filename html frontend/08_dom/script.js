const addMovieBtn = document.querySelector("header button");
const addModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");
const cancelBtn = addModal.querySelector(".btn--passive");


//apre il modal
function openModal() {
  addModal.classList.add("visible");
  backdrop.classList.add("visible");
}


//chiude il modal
function closeModal() {
  addModal.classList.remove("visible");
  backdrop.classList.remove("visible");
}

//eventi
addMovieBtn.addEventListener("click", openModal);
cancelBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);