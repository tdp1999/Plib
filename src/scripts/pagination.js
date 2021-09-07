export default function () {
    const container = document.getElementById('demo-container');
    if (!container) return;

    const demoPagination = document.createElement('div');

    let innerHTML = ``;

    innerHTML += `
      <div>
        Temporary no content. Depend on another component
      </div>
   `;

    innerHTML += `</div>`;

    demoPagination.innerHTML = innerHTML;

    // Render
    container.innerHTML = '<h1 style="padding-bottom: 20px">Demo Pagination</h1>';
    container.appendChild(demoPagination);
}
