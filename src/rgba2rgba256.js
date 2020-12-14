function rgba2rgba256({r, g, b, a}) {
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
    a: Math.round(a * 255)
  }
}

export default rgba2rgba256;