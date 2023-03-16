import { API_URL, username, repoList } from "./variabele.js";
import { displayRepoData, languageColorCode } from "./render.js";

export function fetchRepoData() {
    fetch(`${API_URL}/users/${username}/repos`)
        .then((response) => response.json())
        .then((repos) => {
            repos.forEach(repo => {
                const repoName = repo.name;
                const repoDescription = repo.description;
                const githubPages = repo.homepage;
                const starredRepo = repo.stargazers_count;
                const programmingLanguage = repo.language;
                const repoLink = repo.html_url
                console.log(programmingLanguage)
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



