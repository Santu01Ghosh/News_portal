document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Check user preference or use a default (e.g., based on time of day)
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);

    darkModeToggle.addEventListener('click', function () {
        const isDarkMode = body.classList.contains('dark-mode');
        setDarkMode(!isDarkMode);
    });

    function setDarkMode(enable) {
        if (enable) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }
});
