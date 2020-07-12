var card = '';
const cardContainer = document.querySelector('.cardContainer');

function projectsList() {
    projects.forEach(project=> {
        card+=
        `<div class="card">
            <a href=${project.link} target="_blank">
            <img src=${project.image} alt="">
            <h3>${project.name}</h3>
            <p>${project.text}</p>
            </a>
        </div>`;
        cardContainer.innerHTML = card;
    });
}

projectsList();