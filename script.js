document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collect form data
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        // Simulate form submission
        console.log(`Sign Up Info: Name: ${name}, Email: ${email}, Password: ${password}`);

        // Simulate a successful sign-up and redirect
        setTimeout(() => {
            window.location.href = 'index.html'; // Ensure this path is correct
        }, 1000); // Wait 1 second before redirecting
    });
});
