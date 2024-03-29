
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
	const outputEl = document.querySelector('#output1');
	const outputE2 = document.querySelector('#output2');
	const outputE3 = document.querySelector('#output3');
	const outputDiv = document.querySelector('.card-body');
	const h1El = document.querySelector('h1');


	// get user text
	let getInputValue = function () {
		let inputValue = document.querySelector('#wordinput').value;
		if (inputValue.length === 0) {
			inputValue = ' add a word ';
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
		let hashtags = '';
		let howMany = getHowMany();
		let inputText = getInputValue();
		let tags = document.querySelector('input[name="tags"]:checked').value;
		let inputLastLetter = inputText[inputText.length - 1];
		//let suffixFirstLetter = suffixList.map(sfx => sfx.[0]);

		if (tags == 'yes') {
			hashtags = '#';
		}

		// check last letter of input text and add suffixes accordingly
		switch (inputLastLetter) {
			case 'y':
				inputText = inputText.replace('y', 'i');
				break;
			case 'k':
				inputText = inputText + 'o';
				break;
			case 'l':
				inputText = inputText + 'l';
				break;
			//case 'm':
			//inputText = inputText + 'm';
			//break;
			case 'p':
				inputText = inputText + 'p';
				break;
			case 't':
				inputText = inputText + 't';
				break;
			default:
				break;
		}


		let suffixArray = suffixList.sort(() => Math.random() - Math.random())
			.slice(0, howMany)
			.toString()
			.replace(/-/g, `${hashtags}${inputText}`)
			.replace(/\,/g, '\n');

		///////////////////////////// This works
		///////////////////////////// Add it to the switch statement
		///////////////////////////// Add inputText to the switch statement too
		// let firstLetterOfEachSuffix = suffixArray.map(el => el.charAt(0));
		///////////////////////////// this works 

		return suffixArray;
	}


	//add suffixes
	let result1 = generateSuffix();
	let result2 = generateSuffix();
	let result3 = generateSuffix();
	const newH1 = changeH1();
	//put the new stuff into the page
	h1El.innerText = newH1;
	outputDiv.classList.remove('hide');
	let clipboardText = (result1 + result2).replaceAll('\n', ' ');
	navigator.clipboard.writeText(clipboardText);
	outputEl.innerText = result1;
	outputE2.innerText = result2;
	outputE3.innerText = result3;

}

//activate the html suffixate button
const suffixBtn = document.querySelector('#go');

suffixBtn.addEventListener('click', initialize);

