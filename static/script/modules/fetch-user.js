import { API_URL, username, TOKEN } from "./variabele.js";
import { displayUserData } from "./render.js";

function handleRateLimit(response) {
    if (response.status === 403) {
        const limit = response.headers.get('X-RateLimit-Limit');
        const remaining = response.headers.get('X-RateLimit-Remaining');
        const resetTime = response.headers.get('X-RateLimit-Reset');
        console.log(`Rate limit exceeded. Limit: ${limit}, Remaining: ${remaining}, Reset Time: ${new Date(resetTime * 1000)}`);
    }
}
export function fetchUserData() {
    fetch(`${API_URL}/users/${username}`,
        {
            headers: {
                Authorization: `token ${TOKEN}`
            }
        }
    )
        .then((response) => {
            handleRateLimit(response);
            return response.json();
        })
        .then((user) => {
            
            displayUserData(user)
        })
        .catch((error) => {
            console.error(error)
        })
}