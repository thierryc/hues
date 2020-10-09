import hsla2rgba from './hsla2rgba'

function hsl2rgb(hsl) {
  const { r, g, b } = hsla2rgba({ ...hsl, a: 1});
  return { r, g, b };
}

export default hsl2rgb;