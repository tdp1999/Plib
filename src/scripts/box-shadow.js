import {list} from "postcss";

export default function () {
    const container = document.getElementById('demo-container');
    if (!container) return;

    const demoBoxShadow = document.createElement('div');
    demoBoxShadow.id = 'demo-box-shadow';

    const listOfBoxShadow = ['card', 'form', 'form-sm', 'fab', 'nav'];


    listOfBoxShadow.forEach(el => {
        addBoxShadowPanel(el)
    });


    // Render
    container.innerHTML = '<h1>Demo Box Shadow</h1>';
    container.appendChild(demoBoxShadow);

    function addBoxShadowPanel(boxName) {
        let boxNameNew = boxName.toUpperCase();
        let container = document.createElement('div');
        container.innerHTML = `<h2 class="demo-secondary-header text--bold">${boxNameNew} Box Shadow</h2>`;

        let panel = document.createElement('div');
        panel.classList.add('demo-box-shadow', `elevation--${boxName}`);

        container.appendChild(panel);
        demoBoxShadow.appendChild(container);
    }
}