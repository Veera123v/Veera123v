document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form validation
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        return;
    }

    // Save form data temporarily to local storage (optional)
    const formData = {
        name: document.getElementById('name').value,
        email: email,
        message: document.getElementById('message').value
    };
    localStorage.setItem('formData', JSON.stringify(formData));

    // Display thank you message
    document.getElementById('thank-you-message').style.display = 'block';

    // Clear the form fields
    document.getElementById('contact-form').reset();
});

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

