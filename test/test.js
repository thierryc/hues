const assert = require('assert');
const hues = require('..');

/* function MockHues () {
	this.white = '#ffffff';
};

Object.assign(MockHues.prototype, {
});

const myHues = new MockHues();
 */

function testStr2rgba(color, expected) {
	assert.deepStrictEqual(hues.str2rgba(color), expected);
	console.log(`\u001B[32m✓\u001B[39m ${color} ${JSON.stringify(expected).substring(0, 26)}`);
}

testStr2rgba('#ffffffff', {
	r: 1.0,
	g: 1.0,
	b: 1.0,
	a: 1.0,
});

testStr2rgba('#fff', {
	r: 1.0,
	g: 1.0,
	b: 1.0,
	a: 1.0,
});

testStr2rgba('#ffffff', {
	r: 1.0,
	g: 1.0,
	b: 1.0,
	a: 1.0,
});

testStr2rgba('#fff0', {
	r: 1.0,
	g: 1.0,
	b: 1.0,
	a: 0,
});

testStr2rgba('rgba(255, 255, 255, 1)', {
	r: 1.0,
	g: 1.0,
	b: 1.0,
	a: 1.0,
});

testStr2rgba('rgba(255, 255, 255, 1)', {
	r: 1.0,
	g: 1.0,
	b: 1.0,
	a: 1.0,
});
