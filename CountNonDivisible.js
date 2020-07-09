function solution(A) {
  const N = A.length;

  // Max number in the array is N*2 (50,000 * 2)
  // so make an array of 0s big enough that it could
  // have 100,000 as an index
  const occurances = new Array(100001).fill(0);

  // Set number of occurances of each number by using
  // the occurances array.
  for (let i = 0; i < N; i++) {
    occurances[A[i]]++;
  }

  // For each A[i], find the number of divisors in A
  // and subtract from the length of A to get the number
  // of non-divisors. Add this to the divisor array.
  const divisorArr = [];
  for (let i = 0; i < N; i++) {
    divisorArr.push(N - divisorCount(A[i], occurances));
  }

  return divisorArr;
}

/** Gets the number of divisors of n in A (using the occurance array for A) */
function divisorCount(n, occurances) {
  const sqrtN = Math.sqrt(n);
  let divisors = 0;
  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      if (i !== sqrtN) divisors += occurances[n / i];
      divisors += occurances[i];
    }
  }
  return divisors;
}
