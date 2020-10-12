/**
 * 
 * @param {sting} str ( rgba(0,0,0,0), rgb(0,0,0), #000000, #00000000, #000 or #0000 )
 */

function str2rgba(str) {
  let colorStr = str.toLowerCase();
  let color;
  if (colorStr.substring(0, 3) === 'rgb') {
    // rgb[a](0, 0, 0[, 0]) format.
    var matches = /^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)([^)]*)\)$/.exec(colorStr);
    color = {
      r: (matches[1] / 255),
      g: (matches[2] / 255),
      b: (matches[3] / 255),
      a: 1.0,
    };
    if (matches[4]) {
      color.a = parseFloat(/^,\s*(.*)$/.exec(matches[4])[1]);
    }
  } else {
    // Hex digit format.
    if (colorStr.charAt(0) === '#') {
      colorStr = colorStr.substr(1);
    }

    if (colorStr.length === 3) {
      colorStr = colorStr.replace(/^(.)(.)(.)$/, '$1$1$2$2$3$3');
    }

    if (colorStr.length === 4) {
      colorStr = colorStr.replace(/^(.)(.)(.)(.)$/, '$1$1$2$2$3$3$4$4');
    }

    color = {
      r: (parseInt(colorStr.substr(0, 2), 16) / 255),
      g: (parseInt(colorStr.substr(2, 2), 16) / 255),
      b: (parseInt(colorStr.substr(4, 2), 16) / 255),
      a: 1.0,
    };

    if (colorStr.length === 8) {
      color.a = parseInt(colorStr.substr(6, 2), 16) / 255;
    }
  }
  return color;
};

export default str2rgba;