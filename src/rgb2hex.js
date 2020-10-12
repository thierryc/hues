import rgba2hex from './rgba2hex'

function rgb2hex(rgb) {
  return rgba2hex({ ...rgb, a: 1 }).slice(0,7);
}

export default rgb2hex;