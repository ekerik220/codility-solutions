function solution(A) {
  A.sort();

  for (let i = 0; i < A.length; i += 2) {
    if (A[i] != A[i + 1]) return A[i];
  }
}
