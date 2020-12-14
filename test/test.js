const assert = require('assert');
const {
  str2rgba,
  rgba2hsla,
  rgb2hsl,
  hsla2rgba,
  hsl2rgb,
  rgba2hex,
  rgb2hex,
  contrast,
  relativeLuminance,
  aa,
	aaa,
	hslaVector3,
	getAccesibleHexColor,
	ratios,
} = require('..');

/* function MockHues () {
	this.white = '#ffffff';
};

Object.assign(MockHues.prototype, {
});

const myHues = new MockHues();
 */

function testStr2rgba(color, expected) {
	assert.deepStrictEqual(str2rgba(color), expected);
	console.log(`\u001B[32m✓\u001B[39m str2rgba ${color} ${JSON.stringify(expected).substring(0, 40)}`);
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

function testRgba2hsla(color, expected) {
	const hsla = str2rgba(color);
	assert.deepStrictEqual(rgba2hsla(hsla), expected);
	console.log(`\u001B[32m✓\u001B[39m rgba2hsla ${color} ${JSON.stringify(expected).substring(0, 40)}`);
}

testRgba2hsla('#ffffff', {
	h: 0,
	s: 0,
	l: 100,
	a: 1.0,
});

testRgba2hsla('#ff0000', {
	h: 0,
	s: 100,
	l: 50,
	a: 1.0,
});

testRgba2hsla('#2C4F87', {
	h: 216.92307692307693,
  s: 50.837988826815646,
  l: 35.09803921568627,
	a: 1.0,
});

testRgba2hsla('#1CB674', {
	h: 154.28571428571428,
  s: 73.33333333333336,
  l: 41.17647058823529,
	a: 1.0,
});


function testRgb2hsl(color, expected) {
	const {r, g, b} = str2rgba(color);
	assert.deepStrictEqual(rgb2hsl({r, g, b}), expected);
	console.log(`\u001B[32m✓\u001B[39m rgb2hsl ${JSON.stringify({r, g, b})} ${JSON.stringify(expected).substring(0, 40)}`);
}

testRgb2hsl('#ff0000', {
	h: 0,
	s: 100,
	l: 50,
});

function testRgba2hex(color, expected) {
	const rgba = str2rgba(color);
	assert.strictEqual(rgba2hex(rgba), expected);
	console.log(`\u001B[32m✓\u001B[39m rgba2hex ${JSON.stringify(rgba)} ${JSON.stringify(expected).substring(0, 40)}`);
}

testRgba2hex('#ff0000', '#ff0000ff');
testRgba2hex('#ff000001', '#ff000001');
testRgba2hex('#fff', '#ffffffff');


function testRelativeLuminance(color, expected) {
	const rgba = str2rgba(color);
	assert.strictEqual(relativeLuminance(rgba), expected);
	console.log(`\u001B[32m✓\u001B[39m relativeLuminance ${JSON.stringify(rgba)} ${JSON.stringify(expected).substring(0, 40)}`);
}

testRelativeLuminance('#fff', 1);
testRelativeLuminance('#000', 0);
testRelativeLuminance('#ccc', 0.6038273388553377);
testRelativeLuminance('#ffffff00', 0);
testRelativeLuminance('#ff0000ff', 0.2126);
testRelativeLuminance('#5475f7', 0.2132279767305525);
testRelativeLuminance('#161616', 0.008023192985384994);

function testContrast(c1, c2, expected) {
	const rgba1 = str2rgba(c1);
	const rgba2 = str2rgba(c2);
	const l1 = relativeLuminance(rgba1);
	const l2 = relativeLuminance(rgba2);
	assert.strictEqual(contrast(l1, l2), expected);
	console.log(`\u001B[32m✓\u001B[39m contrast ${expected}`);
}

testContrast('#ff0000', '#ffffff', 3.9984767707539985);
testContrast('#ff0000', '#000000', 5.252);
testContrast('#00ff00', '#ffffff', 1.3721902770517513);
testContrast('#00ff00', '#000000', 15.303999999999998);
testContrast('#0000ff', '#ffffff', 8.592471358428805);
testContrast('#0000ff', '#000000', 2.444);
testContrast('#5274F7', '#161616', 4.480970389012467);
testContrast('#5274F7', '#0a0a0a', 4.902401938369846);
testContrast('#5274F7', '#000000', 5.20000419286932);
testContrast('#5475f7', '#161616', 4.536599300849487);

function testAA(c1, c2, expected) {
	const rgba1 = str2rgba(c1);
	const rgba2 = str2rgba(c2);
	const l1 = relativeLuminance(rgba1);
	const l2 = relativeLuminance(rgba2);
	const cont = contrast(l1, l2);
	assert.strictEqual(aa(cont), expected);
	console.log(`\u001B[32m✓\u001B[39m aa small font ${expected}`);
}

testAA('#ff0000', '#ffffff', false);
testAA('#ff0000', '#000000', true);
testAA('#00ff00', '#ffffff', false);
testAA('#00ff00', '#000000', true);
testAA('#0000ff', '#ffffff', true);
testAA('#0000ff', '#000000', false);

function testAAA(c1, c2, expected) {
	const rgba1 = str2rgba(c1);
	const rgba2 = str2rgba(c2);
	const l1 = relativeLuminance(rgba1);
	const l2 = relativeLuminance(rgba2);
	const cont = contrast(l1, l2);
	assert.strictEqual(aaa(cont), expected);
	console.log(`\u001B[32m✓\u001B[39m contrast ${expected}`);
}

testAAA('#ff0000', '#ffffff', false);
testAAA('#ff0000', '#000000', false);
testAAA('#00ff00', '#ffffff', false);
testAAA('#00ff00', '#000000', true);
testAAA('#0000ff', '#ffffff', true);
testAAA('#0000ff', '#000000', false);


function testRgb2hex(rgba, expected) {
	assert.strictEqual(rgb2hex(rgba), expected);
	console.log(`\u001B[32m✓\u001B[39m rgb2hex ${expected}`);
}

testRgb2hex({ r: 1, g: 1, b: 1, a: 1 }, '#ffffff');

// https://www.topster.net/relative-luminance/

function testHslaVector3(hsla, v3, expected) {
	assert.deepStrictEqual(hslaVector3(hsla, v3), expected);
	console.log(`\u001B[32m✓\u001B[39m hslaVector3 ${expected}`);
}

testHslaVector3({ h: 0, s: 90, l: 90, a: 1 }, [0,0,1], { h: 0, s: 90, l: 91, a: 1 });
testHslaVector3({ h: 0, s: 90, l: 90, a: 1 }, [-1,0,1], { h: 359, s: 90, l: 91, a: 1 });
testHslaVector3({ h: 0, s: 90, l: 90, a: 1 }, [0,0,100], { h: 0, s: 90, l: 100, a: 1 });
testHslaVector3({ h: 0, s: 10, l: 90, a: 1 }, [0,-11,100], { h: 0, s: 0, l: 100, a: 1 });


function testGetAccesibleHexColor(hex, background, expected) {
	const rgba = str2rgba(hex);
	const bg = str2rgba(background);
	assert.deepStrictEqual(getAccesibleHexColor(rgba, bg, ratios['AA'].minRatio), expected);
	console.log(`\u001B[32m✓\u001B[39m getAccesibleHexColor ${expected} ${rgb2hex(expected)}`);
}

testGetAccesibleHexColor('#051b71', '#161616', {
	r: 0.3322897972748431,
	g: 0.46228647391159927,
	b: 0.9704553007643733,
	a: 1
});