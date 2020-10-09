// http://www.w3.org/WAI/GL/wiki/Relative_luminance
// Calculating Luminance from r g b, a values
function relativeLuminance({ r, g, b, a }) {
  const [rl, gl, bl] = [r, g, b].map(c => {
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return (0.2126 * rl + 0.7152 * gl + 0.0722 * bl) * a;
}

export default relativeLuminance;