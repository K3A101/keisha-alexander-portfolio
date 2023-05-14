
    const URL = 'https://opensheet.elk.sh/1fH02oItqR9vj_-rTEA4Fj8L2UYaFXMnZiEkLn9VpsJQ/sheet1'
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('previous');
    const sectionImg = document.querySelectorAll(' main div.sections > img');
    const main = document.querySelector('main');

    // const sections = document.querySelectorAll('div');
    
    
    fetchApi()
    
    function fetchApi() {
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            displayProjectData(data)
            
            
        })
    }
     

    function displayProjectData(data) {
        let html = '';
        data.forEach(project => {
            html += `
            <div class="sections">
            <section>
            <article>
            <h1>${project.name} </h1>
            <h2>${project.short_description} </h2>
            </article>
            
            <img src="${project.projectImg}" alt="Schets van mijn poster">
            </section>
            
            <section>
            <article>
            <h2>De opdracht </h2>
            <p>${project.description}</p>
            <ul class="skills">
            <li>${project.skill_1}</li>
            <li>${project.skill_2}</li>
            <li>${project.skill_3}</li>
            </ul>
            
            <div class="project-info">
            <a href="${project.prototype_link}">Live Demo</a>
            <a href="${project.readme_link}">Readme</a>
            </div>
                
                </article>
                
                <img src="${project.sketch_Img}" alt="Schets van mijn poster">
                </section>
                </div>
                `
            })
            main.insertAdjacentHTML('beforeend', html);
            const sections = document.querySelectorAll(' main div.sections');
            console.log('section list',sections);  
        }
        
     

  

    


