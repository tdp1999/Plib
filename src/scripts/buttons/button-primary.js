export default function () {
    const demoButtonContainer = document.createElement('div');
    const title = document.createElement('h2');
    title.classList.add('my-3');
    title.textContent = "Button Primary";

    const demoButtons = document.createElement('div');

    /*Road: Button primary:
    Responsive: desktop, mobile, desktop-mono -> mono subclass
    Size: lg, sm -> subclass
    State: hover, enable, disable -> css state
    Style: flat, outline -> subclass
    Color: red, white -> override class
    Has-icon: yes, no*/

    demoButtons.innerHTML = `
        <div>
            <button>Button Primary Flat LG</button>
        </div>
    `;

    // append to div parent
    demoButtonContainer.appendChild(title);
    demoButtonContainer.appendChild(demoButtons);

    return demoButtonContainer;
}