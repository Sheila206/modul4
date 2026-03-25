//[navn] js kode 
//inspireret af youtube video:"[titel]" [link]
// Brugt AI til hjælp: [Ai], Prompts ligger inde på afleveringsmapppen
// W3 Schools: 

console.log("")

document.addEventListener("DOMContentLoaded", function() {

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function(dropdown) {

        dropdown.addEventListener("click", function() {

            const isOpen = dropdown.classList.contains("active");

            dropdowns.forEach(function(item) {
                item.classList.remove("active");
            });

            if (!isOpen) {
                dropdown.classList.add("active");
            }

        });

    });

});