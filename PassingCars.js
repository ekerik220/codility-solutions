function solution(A) {
  let east_count = 0;
  let passed_total = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) east_count++;
    else passed_total += east_count;

    if (passed_total > 1000000000) return -1;
  }

  return passed_total;
}
