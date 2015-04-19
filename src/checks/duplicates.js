'use strict';

var syntaxIgnoreRe = /^{|[,}]|(:after|:active|:before|@import|@require|@extend|@media|:hover|@font-face|src)/;

// check that selector properties are sorted alphabetically
module.exports = function duplicateSelectors() {
	// remove blank spaces now that we have our context
	var arr = this.stripWhiteSpace( new RegExp(/[\s\t]/), this.cache.line );
	var currContext = this.getContext( this.config.indentSpaces, this.cache.line );
	var isThereADupe = false;

	// before we add an item to a cache array
	// make sure it's not whitespace or syntax or whatever
	function _lineIsAcceptable( app ) {
		return (
			!syntaxIgnoreRe.test(app.cache.line) &&
			typeof arr[0] !== 'undefined' &&
			typeof app.cache.prevLine !== 'undefined' &&
			app.cache.prevLine.indexOf(',') === -1
		);
	}

	// if current context switched, reset array
	if ( this.cache.prevContext !== currContext || this.cache.prevFile !== this.cache.file ) {
		this.cache.selectorCache = [];
	}

	// if root check not global, wipe on each new file
	if ( !this.config.globalDupe && this.cache.prevFile !== this.cache.file ) {
		this.cache.rootCache = [];
	}

	// keep track of and check root selectors too
	if ( currContext === 0 ) {
		// if curr line is already in our cache, we have a dupe
		if ( this.cache.prevLine.indexOf(',') === -1 &&
			this.cache.rootCache.indexOf( this.cache.line ) !== -1 ) {
			isThereADupe = true;
		}

		// undefined check is for whitespace
		if ( _lineIsAcceptable( this ) ) {
			this.cache.rootCache.push( this.cache.line );
		}
	}
	// if selector is nested we check the selectorCache instead of rootCache
	else {
		if ( this.cache.prevLine.indexOf(',') === -1 &&
			this.cache.selectorCache.indexOf( arr[0] ) !== -1 ) {
			isThereADupe = true;
		}
		// cache the lines in the curr context
		if ( _lineIsAcceptable( this ) ) {
			this.cache.selectorCache.push( arr[0] );
		}
	}

	// save our curr context so we can use it next time
	this.cache.prevFile = this.cache.file;
	this.cache.prevLine = this.cache.line;
	this.cache.prevContext = currContext;

	if ( isThereADupe === true ) {
		this.cache.warnings.push( 'duplicate property or selector, consider merging' + '\nFile: ' + this.cache.file + '\nLine: ' + this.cache.lineNo + ': ' + this.cache.line.trim() );
	}

	return isThereADupe;
};
