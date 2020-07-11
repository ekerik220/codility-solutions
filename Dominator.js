function solution(A) {
  const occurances = {};
  let max = 0;
  let max_index = 0;

  for (let i = 0; i < A.length; i++) {
    if (occurances[A[i]]) occurances[A[i]]++;
    else occurances[A[i]] = 1;

    if (occurances[A[i]] > max) {
      max = occurances[A[i]];
      max_index = i;
    }
  }

  if (max > A.length / 2) return max_index;
  else return -1;
}
