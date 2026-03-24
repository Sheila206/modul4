const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function(dropdown) {

    const header = dropdown.querySelector(".dropdown-header");

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

    