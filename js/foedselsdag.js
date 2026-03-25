// Sheilas kode 
//inspireret af youtube video:"JavaScript for begyndere - DOM Manipulation" https://www.youtube.com/watch?v=mpAiYMaoUtQ
//inspireret af youtube video:"Build a HTML Date Dropdown Picker" https://www.youtube.com/watch?v=IPGbM6HgWEA
// Brugt AI til hjælp: ChapGBT, Prompts ligger inde på afleveringsmapppen



const dagSelect = document.getElementById("dag");
const maanedSelect = document.getElementById("maaned");
const aarSelect = document.getElementById("aar");

const maaneder = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"];

for (let i = 1; i <= 31; i++) {
    dagSelect.innerHTML += `<option value="${i}">${i}</option>`;
}

for (let i = 0; i < maaneder.length; i++) {
    maanedSelect.innerHTML += `<option value="${i + 1}">${maaneder[i]}</option>`;
}

const currentYear = new Date().getFullYear();

for (let i = currentYear; i >= 1940; i--) {
    aarSelect.innerHTML += `<option value="${i}">${i}</option>`;
}

dagSelect.addEventListener("change", visDato);
maanedSelect.addEventListener("change", visDato);
aarSelect.addEventListener("change", visDato);

function visDato() {
    if (dagSelect.value && maanedSelect.value && aarSelect.value) {
        
        const valgtDato = {
            dag: dagSelect.value,
            maaned: maanedSelect.value,
            aar: aarSelect.value
        };

        console.log(valgtDato);
    }
}