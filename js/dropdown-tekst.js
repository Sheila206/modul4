//[Jeanette] js kode 
// Brugt AI til hjælp: [Ai], Prompts ligger inde på afleveringsmapppen
// W3 Schools: 

document.addEventListener("DOMContentLoaded", function () {

    // DROPDOWN
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener("click", function () {

            const isOpen = dropdown.classList.contains("active");

            dropdowns.forEach(function (item) {
                item.classList.remove("active");
            });

            if (!isOpen) {
                dropdown.classList.add("active");
            }

        });
    });


    // TAL ANIMATION
    document.querySelectorAll(".tal").forEach(tal => {
        let slut = Number(tal.textContent);
        let suffix = tal.dataset.suffix || "";
        let start = 0;

        function tæl() {
            start += Math.ceil(slut / 50);

            if (start < slut) {
                tal.textContent = start.toLocaleString("da-DK") + suffix;
                requestAnimationFrame(tæl);
            } else {
                tal.textContent = slut.toLocaleString("da-DK") + suffix;
            }
        }

        tal.textContent = "0" + suffix;
        tæl();
    });

});