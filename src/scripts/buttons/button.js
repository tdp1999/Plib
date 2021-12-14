export default function () {
    const demoButtonsContainer = document.createElement('div');
    const title = document.createElement('h2');
    title.classList.add('my-3');
    title.textContent = "Buttons";

    const demoButtons = document.createElement('div');
    // demoButtons.style.backgroundColor = 'white';
    demoButtons.innerHTML = `
        <h4 class="text--bold">Button Utility</h4>
        <div class="button-utility-toggle ml-4">
            <button class="active">Btn Utility</button><button>Btn Utility</button>    
        </div>
        

        <h4 class="text--bold">Button Circle</h4>
        <button class="button-circle button-circle__lg mr-4">
            <i class="icon-forward3"></i>
        </button>
        
        <button class="button-circle button-circle__sm mr-4">
            <i class="icon-forward3"></i>
        </button>
        
        <button class="button-circle button-circle__lg mr-4" disabled>
            <i class="icon-forward3"></i>
        </button>
        
        <button class="button-circle button-circle__sm mr-4" disabled>
            <i class="icon-forward3"></i>
        </button>        
    `;

    // append to div parent
    demoButtonsContainer.appendChild(title);
    demoButtonsContainer.appendChild(demoButtons);

    return demoButtonsContainer;
}