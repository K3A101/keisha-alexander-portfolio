export function showNavMenu() {
    const navMenu = document.querySelector('body nav ul');
    console.log(navMenu)
    navMenu.classList.toggle('show-menu');
}