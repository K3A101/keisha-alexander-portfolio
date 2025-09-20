import { userSection } from "./variabele.js";


export function displayRepoData(repoName, repoDescription, githubPages, repoLink, programmingLanguage) {
    if (repoName, repoDescription, githubPages, repoLink, programmingLanguage) {

        return `
                 <article>
                    <h1>${repoName}</h1>
                    <p>${repoDescription}</p>
                      <ul>
                        <li>${programmingLanguage}</li>
                        <li><a href="${githubPages}">Demo</a></li>
                        <li><a class="button primary" href="${repoLink}">README</a></li>
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
