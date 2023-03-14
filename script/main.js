console.log('hello')
const API_URL = "https://api.github.com/users/K3A101/repos";
const eerstePagina = document.getElementById('pagina-1');

fetchData()



function fetchData() {
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data[5].name)
            displayData(data)
        })
        .catch((error) => {
            console.error(error)
        })
}


function displayData(data) {
    let repositories = ``

    data.forEach(item => {
        repositories = ` <article>${item.name}</article>`;
        eerstePagina.insertAdjacentHTML('beforeend', repositories)
    })

    console.log(repositories)
    // eerstePagina.insertAdjacentHTML('beforeend', repositories)
}