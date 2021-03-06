function hslaVector3 ({ h, s, l, a }, v3) {
  const hv = v3[0];
  const sv = v3[1];
  const lv = v3[2];

  let h1 = ((h + hv) % 360);
  if (h1 < 0) {
    h1 += 360;
  }

  let s1 = Math.min(Math.max(s + sv, 0), 100); // caping 0, 100;
  let l1 = Math.min(Math.max(l + lv, 0), 100); // caping 0, 100;

  return { h: h1, s: s1, l: l1, a};
}

export default hslaVector3;