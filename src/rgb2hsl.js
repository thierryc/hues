import rgba2hsla from './rgba2hsla'

function rgb2hsl(rgb) {
  const { h, s, l } = rgba2hsla({ ...rgb, a: 1});
  return { h, s, l };
}

export default rgb2hsl;