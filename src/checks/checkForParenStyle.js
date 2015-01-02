// checks for extra space when declaring mixins before variables
const
    tabs = /^(\t)/,
    spaces = /^(\s)/;

module.exports = function checkMixinStyle( line ) {
    'use strict';
    if ( typeof line === 'undefined' ) { return; }

    // if mixin exists and it has params
    if ( line.indexOf('(') !== -1 && line.indexOf('()') === -1 ) {
        if ( line.indexOf('( ') === -1 || line.indexOf(' )') === -1) {
            return false;
        }
        else {
            return true;
        }
    }
}