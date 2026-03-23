// Åbn/luk filter
function toggleFilter() {
  const filter = document.getElementById("filter");
  filter.classList.toggle("active");
}

// Luk hvis man klikker udenfor
document.addEventListener("click", function (e) {
  const filter = document.getElementById("filter");
  const content = document.querySelector(".filter__content");

  if (!filter || !content) return;

  if (!filter.classList.contains("active")) return;

  if (!content.contains(e.target) && !e.target.closest(".icon--filter")) {
    filter.classList.remove("active");
  }
});

// Slider value
document.addEventListener("DOMContentLoaded", function () {
  const range = document.getElementById("timerRange");
  const output = document.getElementById("timerValue");

  if (!range || !output) return;

  output.textContent = range.value + " t.";

  range.addEventListener("input", function () {
    output.textContent = this.value + " t.";
  });
});