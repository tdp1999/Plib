import buttonPrimary from './button-primary';
import linkPrimary from './link-primary';

export default function () {
    const container = document.getElementById('demo-container');
    if (!container) return;

    const demoList = [
        buttonPrimary,
        linkPrimary
    ];
    const demoButtons = document.createElement('div');
    demoButtons.id = 'demo-buttons';

    // Generate demo
    demoList.forEach(function(demo) {
        const demoEle = demo();
        demoEle.classList.add('mb-5');
        demoButtons.appendChild(demoEle);
    });

    // Render
    container.innerHTML = '<h1 class="mb-3 text-center">Demo Buttons</h1>';
    container.appendChild(demoButtons);
}