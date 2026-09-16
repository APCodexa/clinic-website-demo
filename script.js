document.addEventListener("DOMContentLoaded", function () {

    /* ================= MOBILE MENU ================= */

    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    if (navToggle && navMenu) {

        navToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            const icon = navToggle.querySelector("i");

            if (navMenu.classList.contains("active")) {

                if (icon) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                }

            } else {

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            }

        });


        const links = navMenu.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                const icon = navToggle.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            });

        });

    }


    /* ================= SERVICE MODAL ================= */

    const modal = document.getElementById("serviceModal");
    const cards = document.querySelectorAll(".service-card");

    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalIncludes =
        document.getElementById("modalIncludesText");

    const closeModalBtn =
        document.getElementById("closeModal");

    const modalBookBtn =
        document.getElementById("modalBookBtn");


    function openModal(card) {

        if (!modal) return;

        const title =
            card.getAttribute("data-title");

        const description =
            card.getAttribute("data-desc");

        const includes =
            card.getAttribute("data-includes");


        if (modalTitle) {
            modalTitle.textContent =
                title || "Service Details";
        }

        if (modalDesc) {
            modalDesc.textContent =
                description ||
                "Please contact us for more information.";
        }

        if (modalIncludes) {
            modalIncludes.textContent =
                includes ||
                "Please contact us for more information.";
        }


        modal.classList.add("show");

        document.body.classList.add("modal-open");

    }


    function closeModal() {

        if (!modal) return;

        modal.classList.remove("show");

        document.body.classList.remove("modal-open");

    }


    cards.forEach(function (card) {

        card.addEventListener("click", function () {

            openModal(card);

        });

    });


    if (closeModalBtn) {

        closeModalBtn.addEventListener(
            "click",
            closeModal
        );

    }


    if (modal) {

        modal.addEventListener(
            "click",
            function (event) {

                if (event.target === modal) {
                    closeModal();
                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {
                closeModal();
            }

        }
    );


    if (modalBookBtn) {

        modalBookBtn.addEventListener(
            "click",
            function () {

                closeModal();

                const appointment =
                    document.getElementById("appointment");

                if (appointment) {

                    appointment.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    /* ================= APPOINTMENT FORM ================= */

    const appointmentForm =
        document.getElementById("appointmentForm");

    const formSuccess =
        document.getElementById("formSuccess");

    const newAppointment =
        document.getElementById("newAppointment");


    if (appointmentForm && formSuccess) {

        appointmentForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                appointmentForm.classList.add("hidden");

                formSuccess.classList.remove("hidden");

                appointmentForm.reset();

            }
        );

    }


    if (newAppointment && appointmentForm && formSuccess) {

        newAppointment.addEventListener(
            "click",
            function () {

                formSuccess.classList.add("hidden");

                appointmentForm.classList.remove("hidden");

                appointmentForm.scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    }


    /* ================= FOOTER YEAR ================= */

    const currentYear =
        document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }

});
