function solution(A, B, K) {
  let first_divisible = -1;
  for (let i = A; i <= B; i++) {
    if (i % K === 0) {
      first_divisible = i;
      break;
    }
  }

  if (first_divisible === -1) return 0;

  return Math.floor((B - first_divisible) / K) + 1;
}
