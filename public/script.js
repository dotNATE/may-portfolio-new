const projectGallery = document.querySelector('#projectGallery');

async function displayProjects() {
    let handlebars = await fetch('public/projects.hbs')
    let template = await handlebars.text()
    let html = Handlebars.compile(template)
    let fetchData = await fetch('public/projects.json')
    let data = await fetchData.json()
    projectGallery.innerHTML = html(data)
}

displayProjects()