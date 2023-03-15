// Variabele
const API_URL = "https://api.github.com"
const username = "K3A101"
// const accessToken = "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"
const repoList = document.getElementById('repository-list');
const userSection = document.getElementById('user');
const userButton = document.querySelector('main section:nth-of-type(1) button')
fetchRepoData()
fetchUserData()

function fetchRepoData() {
    fetch(`${API_URL}/users/${username}/repos`)
        .then((response) => response.json())
        .then((repos) => {
            repos.forEach(repo => {
                const repoName = repo.name;
                const repoDescription = repo.description;
                const githubPages = repo.homepage;
                const starredRepo = repo.stargazers_count;
                const programmingLanguage = repo.language;
                console.log(programmingLanguage)
                if (starredRepo != 0) {
                    const REPO_DOCS_URL = `${API_URL}/repos/${username}/${repoName}/readme`
                    fetch(REPO_DOCS_URL)
                        .then((response) => response.json())
                        .then((readmes) => {
                            const readmePage = readmes.html_url;
                            let repoElement = displayRepoData(repoName, repoDescription, githubPages, readmePage, programmingLanguage)
                            languageColorCode(programmingLanguage)
                            repoList.insertAdjacentHTML('beforeend', repoElement);
                        })
                        .catch((error) => { console.error(error) });


                }
            });

        })
        .catch((error) => { console.error(error) });
}


function displayRepoData(repoName, repoDescription, githubPages, readmePage, programmingLanguage) {
    return `
             <article>
                <h1>${repoName}</h1>
                <p>${repoDescription}</p>
                  <ul>
                    <li>${programmingLanguage}</li>
                    <li><a href="${githubPages}">Demo</a></li>
                    <li><a href="${readmePage}">README</a></li>
                 </ul>           
             </article>
             `;

}

function languageColorCode(programmingLanguage) {
    const language = document.querySelectorAll('article ul > li:nth-of-type(1)');

    language.forEach((lang) => {

        switch (lang.textContent) {
            case 'CSS':
                console.log(lang);
                lang.classList.add('blue')
                break;
            case 'HTML':
                lang.classList.add('red')
                break;
            case 'JavaScript':
                lang.classList.add('yellow')
                break;

            default:
                break;
        }

    })
}


function fetchUserData() {
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

function displayUserData(user) {
    let userHTML = ``
    userHTML = `
    
          <article>
                <img src="${user.avatar_url}" alt="gebruikers foto">
                <div>
                    <p>${user.name}</p>
                    <p>${user.login}</p>
                    <p>${user.bio}</p>
                    <a href="${user.html_url}">Github Account</a>
                    <a href="#">Business card</a>
                    <figure>
                        <img src="https://camo.githubusercontent.com/d63d473e728e20a286d22bb2226a7bf45a2b9ac6c72c59c0e61e9730bfe4168c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f48544d4c352d4533344632363f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465" alt="HTML banner">
                        <img src="https://camo.githubusercontent.com/3a0f693cfa032ea4404e8e02d485599bd0d192282b921026e89d271aaa3d7565/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465" alt="CSS banner">
                        <img src="https://camo.githubusercontent.com/93c855ae825c1757f3426f05a05f4949d3b786c5b22d0edb53143a9e8f8499f6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d3332333333303f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d463744463145" alt="Js Banner">
                    </figure>
                </div>              
            </article>
           
           
    `;
    userSection.insertAdjacentHTML('beforeend', userHTML)

}