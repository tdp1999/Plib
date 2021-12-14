import link from './link';
import buttonPrimary from './button-primary';
import other from "./other";
import button from './button';

export default function () {
    const container = document.getElementById('demo-container');
    if (!container) return;

    const demoList = [
        button,
        link,
        other,
        buttonPrimary,
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