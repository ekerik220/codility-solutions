function solution(A) {
  const n = A.length;

  // Make an array representing peaks with true and non
  // peaks with false. O(N)
  let peaks = [];
  for (let i = 1; i < n - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) peaks.push(true);
    else peaks.push(false);
  }

  // Trial and error planting more and more flags until
  // we hit a point that we aren't able to plant that many
  // flags. This would be brute force, but know that at most
  // we can plant sqrt(N) flags, so we only need to loop
  // sqrt(N) times worst case. The checking function is O(N)
  // so this loop is O(N log(n))
  let max = 0;
  let sqrtN = Math.ceil(Math.sqrt(n));
  for (let i = 1; i <= sqrtN; i++) {
    if (!canPlantXFlags(i, peaks)) break;
    max = i;
  }

  return max;
}

/** Check if x or more flags can be planted by going
 *  over the array of peaks and adding flags (making
 * sure to skip forward 'x' distance whenever we plant
 * a flag, since we can't plant another within 'x' units).
 * O(N)
 */
function canPlantXFlags(x, peaks) {
  let flags = 0;
  let i = 0;
  while (i < peaks.length) {
    if (peaks[i]) {
      i += x;
      flags++;
    } else i++;
  }

  return flags >= x;
}
