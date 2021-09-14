export default function () {
    const container = document.getElementById('demo-container');
    if (!container) return;

    const demoLoader = document.createElement('div');

    let innerHTML = ``;

    innerHTML += `
        <div class="demo-loader">
            <div class="loader loader-spinner--lg"><div class="loader-content"></div></div>
            <div class="loader loader-spinner--md"><div class="loader-content"></div></div>
            <div class="loader loader-spinner--oval"><div class="loader-content"></div></div>
        </div>
   `;

    innerHTML += `</div>`;

    demoLoader.innerHTML = innerHTML;

    // Render
    container.innerHTML = '<h1 style="padding-bottom: 20px">Demo Loader</h1>';
    container.appendChild(demoLoader);
}
