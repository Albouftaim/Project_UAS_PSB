document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const username = document.getElementById('username').value.trim(); // Trim spaces
    const password = document.getElementById('password').value.trim();
    const passwordError = document.getElementById('passwordError');

    // Clear any previous errors
    passwordError.classList.add('hidden');

    // Admin credentials (for demo purposes only; move to server-side for production)
    const admins = [
        { username: 'puskesmas psb', password: 'PSB123' },
    ];

    // Check if the credentials match
    const isValidAdmin = admins.some(admin => 
        admin.username === username && admin.password === password
    );

    if (isValidAdmin) {
        // Redirect to dashboard if login is successful
        window.location.href = '../dashboard/dashboard.html';
    } else {
        // Display error message if login fails
        passwordError.textContent = 'Password atau username Anda salah!!';
        passwordError.classList.remove('hidden');
    }
});
