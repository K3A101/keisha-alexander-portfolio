import { API_URL, username, repoList, TOKEN } from "./variabele.js";
import { displayRepoData, languageColorCode } from "./render.js";

function handleRateLimit(response) {
    if (response.status === 403) {
        const limit = response.headers.get('X-RateLimit-Limit');
        const remaining = response.headers.get('X-RateLimit-Remaining');
        const resetTime = response.headers.get('X-RateLimit-Reset');
        console.log(`Rate limit exceeded. Limit: ${limit}, Remaining: ${remaining}, Reset Time: ${new Date(resetTime * 1000)}`);
    }
}



export function fetchRepoData() {
    fetch(`${API_URL}/users/${username}/repos`,
        {
            headers: {
                Authorization: `token ${TOKEN}`
            }
        })
        .then((response) => {
            handleRateLimit(response);
            return response.json();
        })
        .then((repos) => {
            repos.forEach(repo => {
                const repoName = repo.name;
                const repoDescription = repo.description;
                const githubPages = repo.homepage;
                const starredRepo = repo.stargazers_count;
                const programmingLanguage = repo.language;
                const repoLink = repo.html_url
                
                if (starredRepo != 0) {
                    const REPO_DOCS_URL = `${API_URL}/repos/${username}/${repoName}/readme`
                    fetch(REPO_DOCS_URL)
                        .then((response) => response.json())
                        .then((readmes) => {
                            const readmePage = readmes.html_url;
                            let repoElement = displayRepoData(repoName, repoDescription, githubPages, repoLink, programmingLanguage)
                            languageColorCode(programmingLanguage)
                            repoList.insertAdjacentHTML('beforeend', repoElement);
                        })
                        .catch((error) => { console.error(error) });

                }
            });

        })
        .catch((error) => { console.error(error) });
}



