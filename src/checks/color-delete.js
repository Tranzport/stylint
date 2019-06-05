'use strict'

var list = [
	'$list-header'
  , '$item-hover'
  , '$primary'
  , '$secondary'
  , '$danger'
  , '$light'
  , '$white'
  , '$blue'
  , '$light-blue'
  , '$floral-white'
  , '$cadet-blue'
  , '$primary-d05'
  , '$primary-d15'
  , '$primary-d25'
  , '$primary-d35'
  , '$primary-d45'
  , '$primary-d65'
  , '$primary-d85'
  , '$primary-d90'
  , '$primary-l05'
  , '$primary-l15'
  , '$primary-l25'
  , '$primary-l35'
  , '$primary-l45'
  , '$primary-l65'
  , '$primary-l85'
  , '$primary-l90'
  , '$primary-l95'
  , '$primary-l98'
  , '$primary-t02'
  , '$primary-t05'
  , '$primary-t08'
  , '$primary-t10'
  , '$primary-t12'
  , '$primary-t15'
  , '$primary-t25'
  , '$primary-t35'
  , '$primary-t45'
  , '$primary-t65'
  , '$primary-t85'
  , '$primary-t90'
  , '$primary-t95'
  , '$primary-t98'
  , '$row-unit-1'
  , '$row-unit-2'
  , '$row-unit-3'
  , '$row-unit-4'
  , '$details-width'
  , '$box-shadow-06'
  , '$box-shadow-12'
  , '$box-shadow-03'
  , '$box-shadow-00'
  , '$border-light'
  , '$border-dark'
  , '$color-sq'
  , '$row-unit-1'
  , '$details-width'
  , '$gray'
  , '$light-gray'
  , '$red'
  , '$header-font-size'
  , '$header-color'
  , '$header-border'
  , '$gray-01'
  , '$gray-02'
  , '$gray-03'
  , '$gray-04'
  , '$darker-gray'
  , '$customSwtichGreen'
  , '$customRippleGreen'
  , '$cell-offset-left'
];




var ignoreRe = /^\s*(?:#|.*=.*)/


/**
 * @description if we disallowed hex colors, check for them and return true if found
 * @param {string} [line] curr line being linted
 * @returns {boolean} true if hex color found, false if not
 */
var colors = function( line ) {
	if ( ignoreRe.test( line ) || this.state.root ) { return }

	var hex = false
	// var match = hexRe.exec( line )

	for (let x = 0 ; x < list.length ; x++ ) {
		const variable = list[x];
		if ( line.indexOf(variable8) < 0 ) {

			hex = true
			break
		}
	}

	// so basically if we're using #hex colors outside of a var declaration

	if ( hex === true ) {
		this.msg( 'this is a old variable please change for ITCSS new one.', match.index )
	}

	return hex
}

module.exports = colorsDelete
