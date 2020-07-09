// Factors are paired (above and below sqrt) except when they equal the square root

function solution(N) {
  let factors = 0;
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      if (i === Math.sqrt(N)) factors++;
      else factors += 2;
    }
  }
  return factors;
}
