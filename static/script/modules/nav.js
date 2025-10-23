import { menu, header, top } from "./variabele.js";


export function showNavMenu(e) {
    e.stopPropagation();
    menu.classList.toggle('active');
    header.classList.toggle('active');
}

export function closeNavMenuOutside(e) {
    const isClickInsideNav = e.target.closest('.header-nav');
    const isClickOnMenuButton = e.target.closest('.menu-button');

    if (!isClickInsideNav && !isClickOnMenuButton && menu.classList.contains('active')) {
        menu.classList.remove('active');
        header.classList.remove('active');
    }
}

export function changeHeaderOnScroll() {

    if (window.scrollY > 50) { // Adjust this value based on when you want the color to change
        top.classList.add('scrolled');
    } else {
        top.classList.remove('scrolled');
    }
}