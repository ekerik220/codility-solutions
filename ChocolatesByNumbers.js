function solution(N, M) {
  const g = gcd(N, M);
  return N / g;
}

function gcd(a, b) {
  if (a % b === 0) return b;
  else return gcd(b, a % b);
}
