
    const URL = 'https://opensheet.elk.sh/1akGZ5OVoG3OMe2Eha_Zui9NQU2sH2yPIT0-EwH5pZmY/projecten'
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
            <div class="project columns">
            <section class="project-header col-1">
            <article class="tags">
            <h1>${project.name} </h1>
            <h2 class="subtitle">${project.short_description} </h2>
            <ul class="skills tag-list">
                <li>${project.skill_1}</li>
                <li>${project.skill_2}</li>
                <li>${project.skill_3}</li>
            </ul>
            <img class="${project.custom_class}" src="${project.projectImg}" width="600" height="600" alt="Schets van mijn poster">
                    </article>
            </section>
            
            <section class="project-description col-2">
            <article>
                    <h2>De opdracht </h2>
                    <p>${project.description}</p>
                    
                    
                    <div class="project-info button-container">
                    <a class="button secondary" href="${project.prototype_link}">Live Demo</a>
                    <a class="button secondary" href="${project.readme_link}">Readme</a>
                    </div>
                
                </article>
                
                <img src="${project.sketch_Img}" alt="Schets van mijn poster">
                </section>
                </div>
                `
            })
            main.insertAdjacentHTML('beforeend', html);
            const sections = document.querySelectorAll(' main div.project');
            
            console.log('section list',sections);  
          
        }
        
     

  

    


