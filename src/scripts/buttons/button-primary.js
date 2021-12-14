export default function () {
    const demoButtonContainer = document.createElement('div');
    const title = document.createElement('h2');
    title.classList.add('my-3');
    title.textContent = "Button Primary";

    const demoButtons = document.createElement('div');

    /* Road:
        Button primary:
        Responsive: desktop, mobile, desktop-mono -> mono subclass => done
        Size: lg, sm -> subclass => done
        State: hover, enable, disable -> css state => done
        Style: flat, outline -> subclass => done
        Color: red, white -> override class => done
        Has-icon: yes, no => done
    */

    demoButtons.innerHTML = `
        <div style="background-color: grey">
            <button class="button button-primary mb-4 mr-lg-4">Desktop Primary Flat Btn LG</button>
            <button class="button button-primary mb-4" disabled>Mobile Primary Disabled Btn LG</button>
            <button class="button button-primary button-primary--mono mb-4">Mobile Primary Flat Mono LG</button>
            <div class="divider divider-hort my-4"></div>
            <button class="button button-primary button-primary--sm mb-4">Mobile Primary Flat Sm</button>
            <button class="button button-primary button-primary--sm mb-4" disabled>Mobile Primary Disabled Flat Sm</button>
            <button class="button button-primary button-primary--sm button-primary--mono mb-4">Mobile Primary Flat Mono Sm</button>
            <div class="divider divider-hort my-4"></div>
            <button class="button button-primary button-primary--sm button-primary--white mb-4">Primary Flat Btn SM</button>
            <button class="button button-primary button-primary--sm button-primary--white mb-4" disabled>Mobile Disabled Flat White Sm</button>
            <button class="button button-primary button-primary--sm button-primary--white button-primary--mono mb-4">Mobile Flat Mono White Sm</button>
            <div class="divider divider-hort my-4"></div>
            <button class="button button-primary button-primary-icon button-primary-icon--left mb-4">
                <i class="icon-checkmark2"></i>
                Primary Flat Btn SM
            </button>
            <button class="button button-primary button-primary-icon button-primary-icon--right mb-4">
                Primary Flat Btn SM
                <i class="icon-checkmark2"></i>
            </button>
            <button class="button button-primary button-primary-icon button-primary-icon--left mb-4" disabled>
                <i class="icon-checkmark2" ></i>
                Primary Flat Btn SM
            </button>
            <button class="button button-primary button-primary-icon button-primary-icon--right mb-4" disabled>
                Primary Flat Btn SM
                <i class="icon-checkmark2"></i>
            </button>
            <div class="divider divider-hort my-4"></div>
            <button class="button button-primary button-primary-outline mb-4">Primary Outline Btn SM</button>
            <button class="button button-primary button-primary-outline mb-4" disabled>Primary Outline Btn Disabled SM</button>
        </div>
    `;

    // append to div parent
    demoButtonContainer.appendChild(title);
    demoButtonContainer.appendChild(demoButtons);

    return demoButtonContainer;
}