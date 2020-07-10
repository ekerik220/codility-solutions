function solution(A) {
  for (let i = 0; i < A.length; i++) A[i] = Math.abs(A[i]);
  A.sort((a, b) => a - b);

  let currNum = A[0];
  let distinctCount = 1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== currNum) {
      currNum = A[i];
      distinctCount++;
    }
  }

  return distinctCount;
}
