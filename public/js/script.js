// ================= Bootstrap Validation =================

(() => {
    "use strict";

    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();

// ================= DOM Loaded =================

document.addEventListener("DOMContentLoaded", () => {

    // Review Rating Live Update
    const ratingInput = document.getElementById("rating");
    const ratingDisplay = document.querySelector(".rating-display");

    if (ratingInput && ratingDisplay) {
        ratingDisplay.innerText = `${ratingInput.value} ★`;

        ratingInput.addEventListener("input", (e) => {
            ratingDisplay.innerText = `${e.target.value} ★`;
        });
    }

});