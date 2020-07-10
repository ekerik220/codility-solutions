function solution(A) {
  if (A.length === 0) return 1;

  A.sort((a, b) => a - b);
  A.unshift(0);

  for (let i = 0; i < A.length; i++) {
    if (i !== A[i]) return i;
  }

  return A.length;
}
