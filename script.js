function yesClicked() {
  document.getElementById("memorySection").classList.remove("hidden");
}

function openLetter() {
  const letter = document.getElementById("vintageLetter");
  letter.classList.add("show");
}

function closeLetter() {
  const letter = document.getElementById("vintageLetter");
  letter.classList.remove("show");
}
