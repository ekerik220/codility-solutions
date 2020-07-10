function solution(A) {
  const uniqueCheck = new Array(A.length + 1).fill(0);

  for (let i = 0; i < A.length; i++) {
    if (uniqueCheck[A[i]] === 0 && A[i] <= A.length) uniqueCheck[A[i]]++;
    else return 0;
  }

  return 1;
}
