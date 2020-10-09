const assert = require('assert');
const hues = require('..');

function MockHues () {
	this.white = '#ffffff';
};

Object.assign(MockHues.prototype, {

});

const myHues = new MockHues();

/* function test(color, expected) {
	hues.setColor(color);
	assert.strictEqual(hues());
	console.log(`\u001B[32m✓\u001B[39m ${expected}`);
}
 */

// test('#ff000000', '#ff000000');

