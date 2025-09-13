/**
 * Name:    Responsive Navigation JS
 * Author:  Niels Lust - Go2People Websites
 * Author   URI: http://go2people-websites.nl/
 * License: GNU General Public License v2 or later
 * License  URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Version: 3.0.0
 */




export function showNavMenu(e) {
    const button = e.currentTarget; 
    const menu = document.querySelector('.menu');
    const header = document.querySelector('.header-nav');
    menu.classList.toggle('active');
    header.classList.toggle('active');
    console.log('Button added class on');
}