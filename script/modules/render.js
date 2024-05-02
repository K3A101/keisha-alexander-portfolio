import { userSection } from "./variabele.js";


export function displayUserData(user) {
    let userHTML = ``
    if (user) {
        userHTML = `
    
          <article>
                <img src="${user.avatar_url}" alt="gebruikers foto">
                <div>
                    <p>Ik ben ${user.name}</p>
                    <p>${user.login}</p>
                    <p>${user.bio}</p>
                    <a href="${user.html_url}">Github</a>
                    <a href="./over-mij.html">Over mezelf</a>
                </div>              
            </article>
           
           
    `;
    } else {
        userHTML = `
    
          <article>
                <img src="https://avatars.githubusercontent.com/u/90068272?v=4" alt="gebruikers foto">
                <div>
                    <p>Ik ben Keïsha Alexander</p>
                    <p>K3A101</p>
                    <p>k ben een UI/UX designer en een Frontend Developer. Momenteel studeer ik Communication and Multimedia Design bij Hogeschool van Amsterdam</p>
                    <a href="https://github.com/K3A101">Github</a>
                    <a href="./over-mij.html">Over mezelf</a>
                </div>              
            </article>
           
           
    `;
    }
  
    userSection.insertAdjacentHTML('beforeend', userHTML)

}


export function displayRepoData(repoName, repoDescription, githubPages, repoLink, programmingLanguage) {
    if (repoName, repoDescription, githubPages, repoLink, programmingLanguage) {

        return `
                 <article>
                    <h1>${repoName}</h1>
                    <p>${repoDescription}</p>
                      <ul>
                        <li>${programmingLanguage}</li>
                        <li><a href="${githubPages}">Demo</a></li>
                        <li><a href="${repoLink}">README</a></li>
                     </ul>           
                 </article>
                 `;
    } else {
        `
                 <article>
                    <h1>Geen projecten beschikbaar</h1>   
                 </article>
                 `;
    }
   

}


export function languageColorCode() {
    const language = document.querySelectorAll('article ul > li:nth-of-type(1)');

    language.forEach((lang) => {
        //   Ik pak de inhoud vanlanguage variabele
        switch (lang.textContent) {
            // if(lang === "CSS")
            case 'CSS':
               
                // voegt een class .blue toe
                lang.classList.add('blue')
                break;

                 // if(lang === "HTML")
            case 'HTML':
                lang.classList.add('red')
                break;
                
                // if(lang === "JavaScript")
            case 'JavaScript':
                lang.classList.add('yellow')
                break;

            default:
                break;
        }

    })
}
