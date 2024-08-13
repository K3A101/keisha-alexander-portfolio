// Variabele
import { fetchRepoData } from "./modules/fetch-repo.js";
import { fetchUserData } from "./modules/fetch-user.js";
import { menuButton } from "./modules/variabele.js";
import { showNavMenu } from "./modules//nav.js";
import { onRouteChanged } from "./modules/routing.js";
import { getYear } from "./modules/copyright.js";

// functies die de data fetchen
// feature detection

if (fetchRepoData) {
    fetchRepoData()
}

if (fetchUserData) {
    fetchUserData()
}

if (getYear, onRouteChanged) {

    window.addEventListener('load', getYear);
    window.addEventListener('haschange', onRouteChanged)
}

if (menuButton) {
    menuButton.addEventListener('click', showNavMenu)
}



