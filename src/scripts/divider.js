export default function () {
    const container = document.getElementById('demo-container');
    if (!container) return;

    const demoDivider = document.createElement('div');

    let innerHTML = ``;

    innerHTML += `
        <div class="demo-divider">
            <div class="divider-hort w-50 w-lg-100"></div>
            <div style="margin-bottom: 10px"></div>
<!--            <div class="divider-vert"></div>-->
        </div>
   `;

    innerHTML += `</div>`;

    demoDivider.innerHTML = innerHTML;

    // Render
    container.innerHTML = '<h1 style="padding-bottom: 20px">Demo Divider</h1>';
    container.appendChild(demoDivider);
}
