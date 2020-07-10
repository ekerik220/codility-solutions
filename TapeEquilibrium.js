function solution(A) {
  const N = A.length;

  const prefixSums = [A[0]];
  for (let i = 1; i < N; i++) {
    prefixSums.push(prefixSums[i - 1] + A[i]);
  }

  let min = Number.POSITIVE_INFINITY;
  for (let p = 0; p < N - 1; p++) {
    min = Math.min(min, Math.abs(prefixSums[N - 1] - 2 * prefixSums[p]));
  }

  return min;
}
