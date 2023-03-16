import { API_URL, username } from "./variabele.js";
import { displayUserData } from "./render.js";

export function fetchUserData() {
    fetch(`${API_URL}/users/${username}`)
        .then((response) => response.json())
        .then((user) => {
            console.log(user);
            displayUserData(user)
        })
        .catch((error) => {
            console.error(error)
        })
}