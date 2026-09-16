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

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });
        });
    }


    // ==========================================
    // SERVICE MODAL
    // ==========================================
    const modal = document.getElementById("serviceModal");
    const serviceCards = document.querySelectorAll(".service-card");

    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalIncludes = document.getElementById("modalIncludesText");

    const closeModalBtn = document.querySelector(".close-modal");
    const modalBookBtn = document.getElementById("modalBookBtn");

    function openModal(card) {

        if (!modal) return;

        const title = card.getAttribute("data-title");
        const desc = card.getAttribute("data-desc");
        const includes = card.getAttribute("data-includes");

        if (modalTitle) {
            modalTitle.textContent = title || "Service Details";
        }

        if (modalDesc) {
            modalDesc.textContent =
                desc || "Please contact us for more information.";
        }

        if (modalIncludes) {
            modalIncludes.textContent =
                includes || "Please contact us for more information.";
        }

        modal.classList.add("show");
        document.body.classList.add("modal-open");
    }


    function closeModal() {

        if (!modal) return;

        modal.classList.remove("show");
        document.body.classList.remove("modal-open");
    }


    serviceCards.forEach(function (card) {

        card.addEventListener("click", function () {
            openModal(card);
        });

        card.addEventListener("keydown", function (event) {

            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openModal(card);
            }

        });

    });


    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", closeModal);
    }


    if (modal) {

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {
                closeModal();
            }

        });

    }


    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeModal();
        }

    });


    if (modalBookBtn) {

        modalBookBtn.addEventListener("click", function () {

            closeModal();

            const appointmentSection =
                document.getElementById("appointment");

            if (appointmentSection) {
                appointmentSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    }


    // ==========================================
    // APPOINTMENT FORM
    // ==========================================
    const appointmentForm =
        document.getElementById("appointmentForm");

    const formSuccess =
        document.getElementById("formSuccess");

    if (appointmentForm && formSuccess) {

        appointmentForm.addEventListener("submit", function (event) {

            event.preventDefault();

            appointmentForm.classList.add("hidden");
            formSuccess.classList.remove("hidden");

            appointmentForm.reset();

        });

    }


    // ==========================================
    // FOOTER YEAR
    // ==========================================
    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
