export function darkModeToggle() {

const body = document.querySelector('body');
const toggleButton = document.getElementById('theme-toggle');
let darkMode = localStorage.setItem('dark-mode', 'enabled');

function enableDarkMode() {
    body.classList.add('dark-mode');
    toggleButton.classList.remove('dark-mode-toggle');
    darkMode = localStorage.setItem('dark-mode', 'enabled');
}
function disableDarkMode() {
    body.classList.remove('dark-mode');
    toggleButton.classList.add('dark-mode-toggle');
    darkMode = localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled') {
    enableDarkMode()
}

toggleButton.addEventListener('click', (e) => {
    darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'disabled') {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
});
}