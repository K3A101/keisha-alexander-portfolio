import { userSection } from "./variabele.js";


export function displayUserData(user) {
    let userHTML = ``
    userHTML = `
    
          <article>
                <img src="${user.avatar_url}" alt="gebruikers foto">
                <div>
                    <p>${user.name}</p>
                    <p>${user.login}</p>
                    <p>${user.bio}</p>
                    <a href="${user.html_url}">Github Profile</a>
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


export function displayRepoData(repoName, repoDescription, githubPages, repoLink, programmingLanguage) {
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

}


export function languageColorCode() {
    const language = document.querySelectorAll('article ul > li:nth-of-type(1)');

    language.forEach((lang) => {
        //   Ik pak de inhoud vanlanguage variabele
        switch (lang.textContent) {
            // if(lang === "CSS")
            case 'CSS':
                console.log(lang);
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
