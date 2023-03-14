const API_URL = "https://api.github.com"
const username = "K3A101"
const accesToken = "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"
const repoList = document.getElementById('repository-list');

fetch(`${API_URL}/user/${username}/repos`, {
    headers: {
        Authorization: `token${accesToken}`
    }
})
.then((response) => response.json())
.then((repos)=> {
    repos.forEach(repo => {
        const repoName = repo.name;
        const repoDescription = repo.description;
        const githubPages = repo.homepage;
        const REPO_URL = `${API_URL}/repos/${username}/commits`

        fetch(REPO_URL, {
            headers: {
                Authorization: `token${accesToken}`
            }
        })
        .then((response) => response.json())
        .then((commits)=>{
            const commitCount = commits.length
            
            const repoElement = `
             <article>
                <h1>${repoName}</h1>
                <p>${repoDescription}</p>
                <iframe src="${githubPages}" frameborder="0" width="100%" height="400"></iframe>
                  <ul>
                    <li><a href="#">README</a></li>
                    <li>${commitCount}</li>
                    <li>issue</li>
                    <li><a href="${githubPages}">Demo</a></li>
                 </ul>           
             </article>`;

             repoList.insertAdjacentHTML('beforeend', repoElement);           
        })
            .catch((error) => {console.error(error) });
    });
    
})
    .catch((error) => { console.error(error) });

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