export default function () {
    const container = document.getElementById('demo-container');
    if (!container) return;

    const demoGridSystem = document.createElement('div');

    let innerHTML = ``;

    innerHTML += `
      <div>
        <h2 class="demo-secondary-header text--bold">Container</h2>
        <div class="container">
            <div class="row">
                <div class="col-3">Col 1</div>
                <div class="col-3">Col 2</div>
                <div class="col-3">Col 2</div>
                <div class="col-3">Col 2</div>
            </div>
        </div>
        
      </div>
   `;

    innerHTML += `</div>`;

    demoGridSystem.innerHTML = innerHTML;

    // Render
    container.innerHTML = '<h1 style="padding-bottom: 20px">Demo Grid System</h1>';
    container.appendChild(demoGridSystem);
}
