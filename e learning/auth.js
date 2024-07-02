document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic authentication check (for demonstration purposes)
    if (username === 'user' && password === 'password') {
        localStorage.setItem('user', JSON.stringify({ username }));
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials');
    }
});
