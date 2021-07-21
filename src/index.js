import img from './images/icon/point-icon.png';

function createImgElement() {
	const imgElement = document.createElement('img');
	imgElement.src = img;
	imgElement.alt = 'point-icon';
	return imgElement;
}

document.getElementById('hero').appendChild(createImgElement());

const testObj = {
	apples: 2,
	pineapples: 1,
	stones: 4,
};

console.log(testObj);
