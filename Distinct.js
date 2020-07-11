function solution(A) {
  const unique = {};

  for (let i = 0; i < A.length; i++) {
    if (!unique[A[i]]) unique[A[i]] = 1;
  }

  return Object.keys(unique).length;
}
