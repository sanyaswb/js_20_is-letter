function isLetter(charCode) {
	return charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123;
}

module.exports = isLetter;