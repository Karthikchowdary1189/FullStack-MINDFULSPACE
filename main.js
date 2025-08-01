// Mood-based theme logic
(function() {
    const moods = JSON.parse(localStorage.getItem('moodLogs') || '[]');
    let theme = 'theme-happy';
    if (moods.length > 0) {
        const last = moods[moods.length - 1];
        if (last >= 4) theme = 'theme-happy';
        else if (last === 3) theme = 'theme-neutral';
        else theme = 'theme-sad';
    }
    document.body.classList.remove('theme-happy', 'theme-neutral', 'theme-sad');
    document.body.classList.add(theme);
})();

// Demo login logic for default user
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = loginForm.username.value.trim();
        const password = loginForm.password.value;
        if (username === 'test' && password === 'test123') {
            sessionStorage.setItem('loggedInUser', JSON.stringify({ username: 'test', role: 'student' }));
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid username or password.');
        }
    });
} 