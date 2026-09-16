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

function openServiceModal(card) {

    if (!modal) return;

    const title = card.getAttribute("data-title");
    const desc = card.getAttribute("data-desc");
    const includes = card.getAttribute("data-includes");

    if (modalTitle) {
        modalTitle.textContent = title || "Service Details";
    }

    if (modalDesc) {
        modalDesc.textContent = desc || "Please contact us for more information.";
    }

    if (modalIncludesText) {
        modalIncludesText.textContent =
            includes || "Please contact us for more information.";
    }

    modal.classList.add("show");
    document.body.classList.add("modal-open");
}

function closeServiceModal() {

    if (!modal) return;

    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
}


// Service cards
serviceCards.forEach(function(card) {

    card.addEventListener("click", function(event) {

        event.preventDefault();
        event.stopPropagation();

        openServiceModal(card);

    });

});


// Close X
if (closeModalBtn) {

    closeModalBtn.addEventListener("click", function(event) {

        event.preventDefault();
        closeServiceModal();

    });

}


// Click outside popup
if (modal) {

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {
            closeServiceModal();
        }

    });

}


// Escape key
document.addEventListener("keydown", function(event) {

    if (
        event.key === "Escape" &&
        modal &&
        modal.classList.contains("show")
    ) {
        closeServiceModal();
    }

});


// Book Appointment
if (modalBookBtn) {

    modalBookBtn.addEventListener("click", function() {
        closeServiceModal();
    });

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
