document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');

    // Data admin
    const admins = [
        { username: 'puskesmas psb', password: 'PSB123' },


    ];

    const isValidAdmin = admins.some(admin => 
        admin.username === username && admin.password === password
    );

    if (isValidAdmin) {
        
        window.location.href = '../dashboard/dashboard.html';
    } else {
        passwordError.classList.remove('hidden');
    }
});