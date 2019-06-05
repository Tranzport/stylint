'use strict'

// var list = [
//   '$font-size-double-extra-large'
// , '$font-size-extra-large'
// , '$font-size-xxxxx-large'
// , '$font-size-xxxx-large'
// , '$font-size-xxx-large'
// , '$font-size-xx-large'
// , '$font-size-x-large'
// , '$font-size-large'
// , '$font-size-base'
// , '$font-size-small'
// , '$font-size-x-small'
// , '$font-size-xx-small'
// ];
var list = [
  '%'
, 'px'
, 'rem'
, 'large'
, 'small'
];


var ignoreRe = /^\s*(?:#|.*=.*)/

/**
 * @description if we disallowed hex colors, check for them and return true if found
 * @param {string} [line] curr line being linted
 * @returns {boolean} true if hex color found, false if not
 */
var fontVariables = function( line ) {
	if ( ignoreRe.test( line ) || this.state.root ) { return }

  var hex = false
  var variable = '';
	// var match = hexRe.exec( line )

		if ( line.indexOf('font-size') >= 0 ) {
      
      for (let y = 0 ; y < list.length ; y++ ) {
        variable = list[y];

        if ( line.indexOf(variable) >= 0 ) {
          hex = true
			    break
				};
				
      };
			
		}
	
	// so basically if we're using #hex colors outside of a var declaration

	if ( hex === true ) {
		this.msg( `this is a old variable please change for ITCSS new one ${variable}.`, variable )
	}

	return hex
}

module.exports = fontVariables
