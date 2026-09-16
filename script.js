// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Set current year in footer dynamically
const yearSpan = document.getElementById('year');
if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Appointment Form Handling
const appointmentForm = document.getElementById('appointmentForm');
const formSuccess = document.getElementById('formSuccess');

if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page reload
        
        // Basic frontend validation happens via HTML5 'required' attributes
        
        // Hide the form and show the success message
        appointmentForm.classList.add('hidden');
        formSuccess.classList.remove('hidden');
        
        // Note: No backend/database connected as per requirements.
        // Data is not stored, strictly for demo purposes.
        
        // Optionally reset form if user wants to submit again later
        appointmentForm.reset();
    });
}
