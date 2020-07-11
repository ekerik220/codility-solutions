function solution(A) {
  A.sort((a, b) => a - b);

  const lastThree = A.slice(-3);
  const p1 = lastThree[0] * lastThree[1] * lastThree[2];
  const p2 = lastThree[2] * A[0] * A[1];
  return Math.max(p1, p2);
}
