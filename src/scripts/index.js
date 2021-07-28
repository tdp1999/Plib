import color from './color';
import typo from './typo';

(function () {
	const pages = {
		color,
		typo,
	};

	window.addEventListener('load', () => {
		loadDemo();
		buildNavbar();
	});

	window.addEventListener('hashchange', () => {
		loadDemo();
	});

	function buildNavbar() {
		const navbar = document.querySelector('#navbar');
		const pageArray = Object.keys(pages);
		let ul = document.createElement('ul');
		pageArray.forEach((element) => {
			let li = document.createElement('li');
			li.innerHTML = `<a href="${'#' + element}"> ${element.toString()} </a>`;
			ul.appendChild(li);
		});

		navbar.appendChild(ul);
	}

	function loadDemo() {
		const hash = window.location.hash.slice(1);
		const pageArray = Object.keys(pages);
		const hashExist = pageArray.includes(hash);

		if (hashExist) pages[hash]();
		else alert("nothing's here!");
	}
})();
