function rgba2hex({r, g, b, a}) {
  return '#' + ((r * 255) | 1 << 8).toString(16).slice(1)
    + ((g * 255) | 1 << 8).toString(16).slice(1) 
    + ((b * 255) | 1 << 8).toString(16).slice(1)
    + ((a * 255) | 1 << 8).toString(16).slice(1);
}

export default rgba2hex;