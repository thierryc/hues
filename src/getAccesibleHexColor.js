import relativeLuminance from './relativeLuminance'
import contrast from './contrast'
import rgba2hsla from './rgba2hsla'
import hsla2rgba from './hsla2rgba'
import hslaVector3 from './hslaVector3'
import rgba2hex from './rgba2hex'
import str2rgba from './str2rgba'

const THRESHOLD = 0.5;

// experimental 

/**
 * 
 * @param {object} color {rgba object}
 * @param {object} background {rgba object}
 * @param {number} ratio exemple: 4.5
 */
function getAccesibleHexColor(rgba, background, ratio) {
  let result = rgba;
  let r; // contrast ratio
  do { 
    result = hsla2rgba( 
      hslaVector3( rgba2hsla(result), [0, 0, THRESHOLD]) // vector3
    );
    // to get a consistant Accesible hex value str2rgba( rgba2hex(result)).
    r = contrast( relativeLuminance( str2rgba( rgba2hex(result) ) ), relativeLuminance(background) );
  } while ((Math.round(r * 10) / 10) <= ratio);
  return result;
}

export default getAccesibleHexColor;