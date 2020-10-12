function hslVector3 ({ h, s, l }, v3) {
  const hv = v3[0];
  const sv = v3[0];
  const lv = v3[0];

  let h1 = ((h + hv) % 360);
  if (h1 < 0) {
    h1 += 360;
  }

  let s1 = Math.min(s + sv, 100); // caping 100;
  let l1 = Math.min(l + lv, 100); // caping 100;

  return { h: h1, s: s1, l: l1};
}

export default hslVector3;