
 // Contact form validation
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.querySelector("form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please complete all required fields.");
                event.preventDefault();
            } else {
                alert("Thank you for contacting the NSPCA. Your message has been received.");
            }

        });

    }

});