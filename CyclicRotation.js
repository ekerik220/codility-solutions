function solution(A, K) {
  const shifts = K % A.length;

  if (shifts === 0) return A;

  const spliced = A.splice(-shifts);
  return spliced.concat(A);
}
