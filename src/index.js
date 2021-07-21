const testObj = {
	apples: 2,
	pineapples: 1,
	stones: 4,
};

const anotherObj = {
	...testObj,
	branches: 1,
	bees: 100,
};

console.log(testObj);
console.log(anotherObj);
