const API_URL = "https://api.github.com"
const username = "K3A101"
const accessToken = "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"
const repoList = document.getElementById('repository-list');

fetchRepoData()

 function fetchRepoData() {
    fetch(`${API_URL}/users/${username}/repos`, {
        headers: {
            Authorization: `token ${accessToken}`
        }
    })
        .then((response) => response.json())
        .then((repos) => {
            repos.forEach(repo => {
                const repoName = repo.name;
                const repoDescription = repo.description;
                const githubPages = repo.homepage;
                const starredRepo = repo.stargazers_count;
                const programmingLanguage = repo.language;
              
                if (starredRepo != 0) {
                 const REPO_DOCS_URL = `${API_URL}/repos/${username}/${repoName}/readme`
                            fetch(REPO_DOCS_URL, {
                                headers: {
                                    Authorization: `token ${accessToken}`
                                }
                            })
                            .then((response)=> response.json())
                            .then((readmes) => {
                                const readmePage = readmes.html_url
                               let repoElement = displayRepoData(repoName, repoDescription,  githubPages, readmePage, programmingLanguage)
                               repoList.insertAdjacentHTML('beforeend', repoElement);  
                            })
                                .catch((error) => { console.error(error) });                        

                       
                }
            });

        })
        .catch((error) => { console.error(error) });
}


function displayRepoData(repoName, repoDescription,  githubPages, readmePage, programmingLanguage) {
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





// console.log('hello')
// const REPO_URL = "https://api.github.com/users/K3A101/repos";
// const USER_API = "https://api.github.com/users/K3A101";
// const repoList = document.getElementById('repository-list');
// const userSection = document.getElementById('user')

// fetchData()
// fetchUserData()



// function fetchData() {
//     fetch(REPO_URL)
//         .then((response) => response.json())
//         .then((data) => {
//             // console.log(data[5].name)
//             displayRepositories(data)
//         })
//         .catch((error) => {
//             console.error(error)
//         })
// }


// function displayRepositories(data) {
//     let repositories = ``

//     data.forEach(item => {
//         if (item.stargazers_count !== 0) {
//             repositories = `
//            <article>
//            <h1>${item.name}</h1>
//            <p>${item.description}</p>
//             <iframe src="${item.homepage}" frameborder="0" width="100%" height="400"></iframe>
//             <ul>
//                 <li><a href="#">README</a></li>
//                 <li>Commits</li>
//                 <li>issue</li>
//                 <li><a href="${item.homepage}">Demo</a></li>
//                 </ul>
//            </article>`



//                 ;



//             repoList.insertAdjacentHTML('beforeend', repositories)
//         }

//     })

//     // eerstePagina.insertAdjacentHTML('beforeend', repositories)
// }



// function fetchUserData() {
// fetch(USER_API)
// .then((response)=> response.json())
// .then((user) => {
//  console.log(user);
//  displayUserData(user)
// })
// .catch((error)=>{
//     console.error(error)
// })
// }

// function displayUserData(user) {
//     let userHTML =``
//     userHTML = `
    
//           <article>
//                 <img src="${user.avatar_url}" alt="gebruikers foto">
//                 <p>${user.login}</p>
//                 <p>${user.name}</p>
//                 <p>${user.bio}</p>
//             </article>
//             <a href="${user.html_url}">Github Account</a>
//             <figure>
//                 <img src="#" alt="HTML banner">
//                 <img src="#" alt="CSS banner">
//                 <img src="#" alt="Js Banner">
//             </figure>
//     `;
//     userSection.insertAdjacentHTML('beforeend', userHTML)
   
// }