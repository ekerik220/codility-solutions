function solution(A, B) {
  const L = A.length;
  const answer = [];

  const fibs = fib(L, 30);

  for (let i = 0; i < L; i++) {
    answer.push(fibs[A[i] + 1] % 2 ** B[i]);
  }

  return answer;
}

function fib(L, b) {
  const fibs = [0, 1];

  for (let i = 1; i <= L; i++) {
    fibs.push((fibs[i] + fibs[i - 1]) % 2 ** b);
  }

  return fibs;
}
