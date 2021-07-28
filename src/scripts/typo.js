export default function () {
	const container = document.getElementById('demo-container');
	if (!container) return;

	const demoColor = document.createElement('div');

	let innerHTML = ``;

	innerHTML += `
      <div>
         <p> It's okay to (be) stupid! </p>
      </div>
   `;

	innerHTML += `</div>`;

	demoColor.innerHTML = innerHTML;

	// Render
	container.innerHTML = '<h1>Demo Typo</h1>';
	container.appendChild(demoColor);
}
