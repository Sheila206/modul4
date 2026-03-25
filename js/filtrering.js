//[navn] js kode 
//inspireret af youtube video:"[titel]" [link]
// Brugt AI til hjælp: [Ai], Prompts ligger inde på afleveringsmapppen
// W3 Schools: 

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
// filtrering
function applyFilters() {
  const selectedLocations = [...document.querySelectorAll(".filter-location:checked")].map(el => el.value);
  const selectedTypes = [...document.querySelectorAll(".filter-type:checked")].map(el => el.value);

  const cards = document.querySelectorAll(".kort");

  cards.forEach(card => {
    const location = card.dataset.location;
    const type = card.dataset.type;

    const matchLocation = selectedLocations.length === 0 || selectedLocations.includes(location);
    const matchType = selectedTypes.length === 0 || selectedTypes.includes(type);

    if (matchLocation && matchType) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// lyt på ændringer
document.querySelectorAll(".filter-location, .filter-type").forEach(input => {
  input.addEventListener("change", applyFilters);
});
// GEM valg
function saveFilters() {
  const range = document.getElementById("timerRange");
  const locations = [...document.querySelectorAll(".filter-location:checked")].map(el => el.value);
  const types = [...document.querySelectorAll(".filter-type:checked")].map(el => el.value);

  localStorage.setItem("timer", range.value);
  localStorage.setItem("locations", JSON.stringify(locations));
  localStorage.setItem("types", JSON.stringify(types));
}

// LOAD valg
function loadFilters() {
  const range = document.getElementById("timerRange");
  const output = document.getElementById("timerValue");

  const savedTimer = localStorage.getItem("timer");
  const savedLocations = JSON.parse(localStorage.getItem("locations") || "[]");
  const savedTypes = JSON.parse(localStorage.getItem("types") || "[]");

  if (savedTimer && range) {
    range.value = savedTimer;
    output.textContent = savedTimer + " t.";
  }

  document.querySelectorAll(".filter-location").forEach(el => {
    el.checked = savedLocations.includes(el.value);
  });

  document.querySelectorAll(".filter-type").forEach(el => {
    el.checked = savedTypes.includes(el.value);
  });
}

// Kør når siden loader
document.addEventListener("DOMContentLoaded", () => {
  loadFilters();
});

// Gem når man ændrer noget
document.querySelectorAll(".filter-location, .filter-type").forEach(input => {
  input.addEventListener("change", saveFilters);
});

document.getElementById("timerRange")?.addEventListener("input", saveFilters);
function applyAndSave() {
  applyFilters();   // filtrér kort
  saveFilters();    // gem valg
  toggleFilter();   // luk filter
}

function resetFilters() {
  // reset slider
  const range = document.getElementById("timerRange");
  const output = document.getElementById("timerValue");

  if (range && output) {
    range.value = 16;
    output.textContent = "16 t.";
  }

  // fjern checkboxes
  document.querySelectorAll(".filter-location, .filter-type").forEach(el => {
    el.checked = false;
  });

  // ryd localStorage
  localStorage.removeItem("timer");
  localStorage.removeItem("locations");
  localStorage.removeItem("types");

  applyFilters();
}