
// random number between
function r(min, max) {
	return ~~(Math.random() * (max - min) + min);
}

let range = document.querySelector('#range');
let rangeVal = document.querySelector('#rangeVal');
rangeVal.innerHTML = range.value;

range.oninput = function () {
	rangeVal.innerHTML = this.value;
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
			return inputValue.toString();
		} else {
			return inputValue.toString();
		}
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


	let getHowMany = function () {
		let howMany = document.querySelector('#range').value;
		return howMany;
	}


	// make the suffix list
	let generateSuffix = function () {
		let suffixArray = '';
		let howMany = getHowMany();
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
	outputDiv.classList.remove('hide');
	outputEl.innerText = result;

}

//activate the html suffixate button
const suffixBtn = document.querySelector('#go');
suffixBtn.addEventListener('click', initialize);