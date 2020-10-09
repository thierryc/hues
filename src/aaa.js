import ratios from './ratios'

function aa(ratio, txtSize = 16, verbose = false) {
  // If the ratio is 7 and above, it passes AAA.
  if (ratio >= 4.5 && txtSize >= 18) {
    // large-size font AAA pass
    if (verbose) console.log(ratios['min-ratio-4.5']);
    return true;
  } else if (ratio >= 7) {
    // normal-size font AAA pass
    if (verbose) console.log(ratios['min-ratio-7']);
    return true;
  }
  return false;
}

/**
 * Level AA	Level AAA
 * small text	4.5+	7+
 * large text	3+	4.5+
 * Minimum required contrast ratio values
 */

export default aa;