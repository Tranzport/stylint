'use strict';

var whitespaceRe = /[ \t]+$/; // check for unecessary tabs or whitespace at eol
var anythingElseRe = /[^ \t]/; // anything BUT whitespace (we dont want to return false positives on empty lines)

/**
 * check for trailing whitespace
 * @param  {string} line  the line being tested
 * @return {boolean} true if whitespace found, false if not
 */
module.exports = function checkWhitespace() {
	var hasWhitespace = false;

	// not an empty line, with whitespace at the end
	if ( anythingElseRe.test(this.cache.line) &&
		whitespaceRe.test(this.cache.line) ) {
		hasWhitespace = true; // return true;
	}

	if ( hasWhitespace === true ) {
		this.cache.warnings.push( 'trailing whitespace' + '\nFile: ' + this.cache.file + '\nLine: ' + this.cache.lineNo + ': ' + this.cache.line.trim() );
	}

	return hasWhitespace;
};
