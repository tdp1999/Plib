export default function () {
    const demoOtherContainer = document.createElement('div');
    const title = document.createElement('h2');
    title.classList.add('my-3');
    title.textContent = "Eyebrow";

    const demoOther = document.createElement('div');

    demoOther.innerHTML = `
        <div>
            <div class="p-5">
                <button type="button" class="eyebrow">
                    Desktop Eyebrow LG
                </button>
            </div>
            <div class="p-5">
                <button type="button" class="eyebrow eyebrow--sm">
                    Eyebrow SM
                </button>
            </div>
            <div class="p-5" style="background-color: black;">
                <button type="button" class="eyebrow eyebrow--white">
                    Eyebrow Eyebrow LG
                </button>
            </div>
            <div class="p-5" style="background-color: black;">
                <button type="button" class="eyebrow eyebrow--white eyebrow--sm">
                    Eyebrow SM
                </button>
            </div>
        </div>
    `;

    // append to div parent
    demoOtherContainer.appendChild(title);
    demoOtherContainer.appendChild(demoOther);

    return demoOtherContainer;
}