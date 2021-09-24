export default function () {
    const demoPrimaryLinkContainer = document.createElement('div');
    const title = document.createElement('h2');
    title.classList.add('my-3');
    title.textContent = "Link Primary";

    const demoPrimaryLink = document.createElement('div');
    demoPrimaryLink.innerHTML = 'HELLO WORLD PRIMARY LINK';

    // append to div parent
    demoPrimaryLinkContainer.appendChild(title);
    demoPrimaryLinkContainer.appendChild(demoPrimaryLink);

    return demoPrimaryLinkContainer;
}