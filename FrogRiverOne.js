function solution(X, A) {
  const uniqueCheck = new Array(X + 1).fill(0);

  let uniqueCount = 0;

  for (let i = 0; i < A.length; i++) {
    if (uniqueCheck[A[i]] === 0) {
      uniqueCount++;
      uniqueCheck[A[i]]++;
    }

    if (uniqueCount === X) return i;
  }

  return -1;
}
