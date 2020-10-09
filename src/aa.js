
import ratios from './ratios'

function aa(ratio, txtSize = 16, verbose = false) {
  // If the ratio is 4.5 and above, it passes AA.
  if (ratio >= 3 && txtSize >= 18) {
    // large-size font AA pass
    if (verbose) console.log(ratios['min-ratio-3']);
    return true;
  } else if (ratio >= 4.5) {
    // normal-size font AA pass
    if (verbose) console.log(ratios['min-ratio-4.5']);
    return true;
  }
  return false;
}

export default aa;