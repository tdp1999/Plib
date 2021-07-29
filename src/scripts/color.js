export default function () {
	const container = document.getElementById('demo-container');
	if (!container) return;

	const demoColor = document.createElement('div');
	demoColor.id = 'demo-color';
	demoColor.innerHTML = `<div></div>`;

	// Color system as array
	const primaryColorList = [
		'red',
		'black',
		'white',
		'gray',
		'gray-light',
		'gray-medium',
		'gray-dark',
		'blue-gray',
		'blue-dark',
	];
	const secondaryColorList = ['peach', 'pink', 'teal', 'red-dim', 'blue-soft', 'violet', 'violet-light'];
	const shadeList = ['black-10', 'black-20', 'black-40', 'black-60', 'white-20', 'white-40', 'white-60'];
	const otherColorList = ['disabled-bg', 'disabled-text'];

	addColorPanel('Primary Color', primaryColorList);
	addColorPanel('Secondary Color', secondaryColorList);
	addColorPanel('Shade', shadeList);
	addColorPanel('Other Colors', otherColorList);

	// Render
	container.innerHTML = '<h1>Demo Color</h1>';
	container.appendChild(demoColor);

	function addColorPanel(channelName, colorArr) {
		let container = document.createElement('div');
		container.innerHTML = `<h2>${channelName}</h2>`;

		let panel = document.createElement('div');
		panel.classList.add('demo-color-panel');
		colorArr.forEach((color) => {
			let colorDiv = document.createElement('div');
			colorDiv.classList.add('demo-color-single');
			colorDiv.style.background = `var(--color-${color})`;
			colorDiv.innerText = `${color}`;
			panel.appendChild(colorDiv);
		});
		container.appendChild(panel);
		demoColor.appendChild(container);
	}
}
