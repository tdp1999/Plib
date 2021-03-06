import home from './home';
import color from './color';
import typo from './typo';
import boxShadow from './box-shadow';
import gridSystem from './grid-system';
import pagination from "./pagination";
import loader from "./loader";
import divider from "./divider";
import button from './buttons/index';

(function () {
	const pages = {
		home,
		color,
		typo,
		boxShadow,
		gridSystem,
		pagination,
		loader,
		divider,
		button
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
		if (hash === '') pages['home']();

		const pageArray = Object.keys(pages);
		const hashExist = pageArray.includes(hash);

		if (hashExist) pages[hash]();
		else pages['home']();
	}
})();
