    document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // MOBILE NAVIGATION
    // ==========================================
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        const navLinks = document.querySelectorAll(".nav-menu a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });
        });
    }


    // ==========================================
    // CURRENT YEAR
    // ==========================================
    const yearSpan = document.getElementById("year");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }


    // ==========================================
    // SERVICE MODAL
    // ==========================================
    const modal = document.getElementById("serviceModal");
    const serviceCards = document.querySelectorAll(".service-card");
    const closeModalBtn = document.querySelector(".close-modal");

    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalIncludesText = document.getElementById("modalIncludesText");
    const modalBookBtn = document.getElementById("modalBookBtn");


    // Check whether modal elements exist
    if (
        modal &&
        serviceCards.length > 0 &&
        closeModalBtn &&
        modalTitle &&
        modalDesc &&
        modalIncludesText
    ) {

        // Open Modal
        function openModal(title, desc, includes) {

            modalTitle.textContent = title || "Service";
            modalDesc.textContent = desc || "Service information.";
            modalIncludesText.textContent = includes || "Please contact us for more information.";

            modal.classList.add("show");
            document.body.classList.add("modal-open");
        }


        // Close Modal
        function closeModal() {

            modal.classList.remove("show");
            document.body.classList.remove("modal-open");
        }


        // Service Card Click
        serviceCards.forEach(function (card) {

            card.addEventListener("click", function () {

                const title = card.getAttribute("data-title");
                const desc = card.getAttribute("data-desc");
                const includes = card.getAttribute("data-includes");

                openModal(title, desc, includes);
            });


            // Keyboard support
            card.addEventListener("keydown", function (event) {

                if (event.key === "Enter" || event.key === " ") {

                    event.preventDefault();

                    const title = card.getAttribute("data-title");
                    const desc = card.getAttribute("data-desc");
                    const includes = card.getAttribute("data-includes");

                    openModal(title, desc, includes);
                }
            });

        });


        // Close using X
        closeModalBtn.addEventListener("click", closeModal);


        // Close by clicking dark background
        modal.addEventListener("click", function (event) {

            if (event.target === modal) {
                closeModal();
            }

        });


        // Close using Escape
        document.addEventListener("keydown", function (event) {

            if (
                event.key === "Escape" &&
                modal.classList.contains("show")
            ) {
                closeModal();
            }

        });


        // Book Appointment button
        if (modalBookBtn) {

            modalBookBtn.addEventListener("click", function () {
                closeModal();
            });

        }

    }


    // ==========================================
    // APPOINTMENT FORM
    // ==========================================
    const appointmentForm = document.getElementById("appointmentForm");
    const formSuccess = document.getElementById("formSuccess");

    if (appointmentForm && formSuccess) {

        appointmentForm.addEventListener("submit", function (event) {

            event.preventDefault();

            appointmentForm.classList.add("hidden");
            formSuccess.classList.remove("hidden");

            appointmentForm.reset();

        });

    }

});
