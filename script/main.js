// Variabele
import { fetchRepoData } from "./modules/fetch-repo.js";
import { fetchUserData } from "./modules/fetch-user.js";
import { menuButton } from "./modules/variabele.js";
import { showNavMenu } from "./modules//nav.js";
// functies die de data fetchen
fetchRepoData()
fetchUserData()



menuButton.addEventListener('click', showNavMenu)