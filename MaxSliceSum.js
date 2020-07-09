function solution(A) {
  const n = A.length;

  if (n === 1) return A[0];

  // Each index represents the greatest sub-array sum of 'A' ending at that index
  const subArraySums = [A[0]];

  // Go through each index and check whether we would get
  // a bigger sum by continuing a sub array vs. just the
  // value at that index of A.
  let globalMax = A[0];
  for (let i = 1; i < n; i++) {
    const localMax = Math.max(A[i], A[i] + subArraySums[i - 1]);
    subArraySums.push(localMax);
    globalMax = Math.max(globalMax, localMax);
  }

  return globalMax;
}
