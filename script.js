
// random number between
function r(min, max) {
	return ~~(Math.random() * (max - min) + min);
}


// multistep process
function initialize() {


	//get the elements to change
	const outputEl = document.querySelector('#output');
	const outputDiv = document.querySelector('.card-body');
	const h1El = document.querySelector('h1');


	// get user text
	let getInputValue = function () {
		let inputValue = document.querySelector('#wordinput').value;
		if (inputValue.length == 0) {
			inputValue = ' you forgot the word jackass ';
			return inputValue;
		}
		return inputValue;
	}


	//swap H1 each time
	let changeH1 = function () {
		let ranH1 = '';
		ranH1 = suffixList[r(0, suffixList.length)]
			.toString()
			.replace(/-/g, `Suffix${ranH1}`)
			.replace(/\,/g, '')
		return ranH1;
	}


	// make the suffix list
	let generateSuffix = function () {

		let suffixArray = '';
		let howMany = r(50, 100);
		let inputText = getInputValue();

		for (let i = 0; i < howMany; i++) {
			suffixArray = suffixList.sort(() => Math.random() - Math.random())
				.slice(0, howMany)
				.toString()
				.replace(/-/g, `#${inputText}`)
				.replace(/\,/g, '\n');
		}
		return suffixArray;

	}

	//add suffixes
	const result = generateSuffix();
	const newH1 = changeH1();
	//put the new stuff into the page
	h1El.innerText = newH1;
	// if (getInputValue == )
	outputDiv.classList.remove('hide');
	outputEl.innerText = result;

}

//activate the html suffixate button
const suffixBtn = document.querySelector('#go');
suffixBtn.addEventListener('click', initialize);