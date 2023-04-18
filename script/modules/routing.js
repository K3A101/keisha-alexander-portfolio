import { displayRepoData, displayUserData } from "./render.js";
import { fetchRepoData } from "./fetch-repo.js";
import { fetchUserData } from "./fetch-user.js";

export async function onRouteChanged() {
    console.log(window.location.hash);
    const hash = window.location.hash;
    const routerView = document.getElementById("router-view");

    if (hash === '') {
       window.location.hash = 'index.html';
    }

    switch (hash) {
        case "#user":
            console.log('user')
          
           fetchUserData()
           displayUserData(user)
            break;

        case "#repository-list":
            console.log('projecten')
            routerView.innerHTML = "<h1>About page</h1>";
            fetchRepoData()
            displayRepoData()
            break;
        default:
            routerView.innerHTML = "<h1>404 - Page Not Found</h1>";
            break;
    }
}