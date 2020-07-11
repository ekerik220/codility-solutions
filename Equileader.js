function solution(A) {
  const dom = dominator(A);
  if (dom === -1) return 0;

  // make a prefix sums array of the number of times dominator occured
  const pSums = [0];
  for (let i = 0; i < A.length; i++) {
    if (A[i] === dom) pSums.push(1 + pSums[i]);
    else pSums.push(pSums[i]);
  }

  // try all possible break points to see how many equi leaders
  let equileaders = 0;
  for (let i = 0; i < A.length - 1; i++) {
    const left = pSums[i + 1] - pSums[0];
    const right = pSums[pSums.length - 1] - pSums[i + 1];

    if (left > (i + 1) / 2 && right > (A.length - (i + 1)) / 2) equileaders++;
  }

  return equileaders;
}

function dominator(A) {
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

  if (max > A.length / 2) return A[max_index];
  else return -1;
}
