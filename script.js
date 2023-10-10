
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function () {
        // Validate the form fields here (e.g., check if email is valid, etc.)
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            nameInput.focus();
            return;
        }

        if (!isValidEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        if (messageInput.value.trim() === "") {
            alert("Please enter a message.");
            messageInput.focus();
            return;
        }

    });

    function isValidEmail(email) {
        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

