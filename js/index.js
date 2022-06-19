function dropdownEffect() {
  document.getElementById("buttonDropdown").classList.add("show");
  document.getElementById("buttonDropdown").classList.remove("hidden");
}
function dropdownEffectClose() {
  document.getElementById("buttonDropdown").classList.remove("show");
  document.getElementById("buttonDropdown").classList.add("hidden");
}

function handleOpen() {
  document.getElementById("drop-up").classList.add("show-contact");
  document.getElementById("drop-up").classList.toggle("show-up");
}
function handleClose() {
  document.getElementById("drop-up").classList.toggle("show-up");
}
