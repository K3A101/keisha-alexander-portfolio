// Variabele
import { fetchRepoData } from "./modules/fetch-repo.js";
import { menu, header } from "./modules/variabele.js";
import { menuButton, postsGrid } from "./modules/variabele.js";
import { showNavMenu, closeNavMenuOutside, changeHeaderOnScroll } from "./modules//nav.js";
import { onRouteChanged } from "./modules/routing.js";
import { animate, scroll, inView } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";
import { typeWriter} from "./modules/typewriting.js";


// functies die de data fetchen
// feature detection


if (menuButton) {
    menuButton.addEventListener('click', showNavMenu);
}

if (typeWriter) {
    typeWriter()
}
    

document.addEventListener('click', closeNavMenuOutside);
window.addEventListener('scroll', changeHeaderOnScroll);


inView("#hero .content", (element) => {
    animate(
        element,
        { opacity: 1, y: [100, 0] },
        {
            duration: 0.9,
            easing: [0.17, 0.55, 0.55, 1],
        }
    )

    return () => animate(element, { opacity: 0})
})

const toggle = document.getElementById('theme-toggle');
// document.body.setAttribute('data-theme','light');
toggle.addEventListener('click', () => {
   document.body.classList.toggle('dark-mode');
});

// inView(postsGrid , (element) => {
//     animate(
//         element,
//         { opacity: 1, y: [100, 0] },
//         {
//             duration: 0.5,
//             easing: [0.17, 0.55, 0.55, 1],
//         }
//     )

//     return () => animate(element, { opacity: 0})
// } )

