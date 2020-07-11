function solution(A) {
  const N = A.length;

  let min_start = 0;
  let global_min = Number.POSITIVE_INFINITY;

  for (let i = 0; i < N - 1; i++) {
    // Average of 2 slice starting at i
    let local_min = (A[i] + A[i + 1]) / 2;

    // If there is enough items left in array to check 3 slice
    // get the average of 3 slice starting at i and take the
    // minimum of the average of the 2 slice vs 3 slice.
    if (i < N - 2)
      local_min = Math.min(local_min, (A[i] + A[i + 1] + A[i + 2]) / 3);

    // If we have found a new global_min, record the starting index
    // and update the global_min.
    if (local_min < global_min) {
      min_start = i;
      global_min = local_min;
    }
  }

  return min_start;
}
