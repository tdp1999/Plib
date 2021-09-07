export default function () {
    const container = document.getElementById('demo-container');
    if (!container) return;

    const demoLoader = document.createElement('div');

    let innerHTML = ``;

    innerHTML += `

    <!--Wrong way! Do it again: inside just loader-content-->
      <div class="demo-loader">
        <div class="loader"><div class="loader-spinner"></div></div>
        <div class="loader"><div class="loader-spinner--lg"></div></div>
        <div class="loader"><div class="loader-spinner--oval"></div></div>
      </div>
   `;

    innerHTML += `</div>`;

    demoLoader.innerHTML = innerHTML;

    // Render
    container.innerHTML = '<h1 style="padding-bottom: 20px">Demo Loader</h1>';
    container.appendChild(demoLoader);
}
