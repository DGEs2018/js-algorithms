// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function() {
	// a container to store the jadenCaseStr
	let jadenCase = '';

	//  a container to store the next letter found
	// has to be capitalized
	// always capitalize the first letter of the string
	let capitalize = true;

	// iterate over each letter in the string
	for (let i = 0; i < this.length; i++) {
		const letter = this[i];
		// if the current letter happens to be a space
		if (letter === ' ') {
			// then capitalize the next letter
			capitalize = true;
			jadenCase += ' ';
		} else {
			// if next letter is capitalized
			if (capitalize) {
				jadenCase += letter.toUpperCase();
				capitalize = false;
			} else {
				jadenCase += letter.toLowerCase();
			}
		}
	}

	return jadenCase;
};

// String.prototype.toJadenCase = function() {
// 	return this.split(' ')
// 		.map((phrase) => {
// 			return phrase[0].toUpperCase + phrase.slice(1);
// 		})
// 		.join(' ');
// };

let sentence = "How can mirrors be real if our eyes aren't real";

let sentenceToJadens = sentence.toJadenCase();

console.log(sentenceToJadens);
// split strings at every space

// capitalize each letter after space / the first letter of each word

// join them
