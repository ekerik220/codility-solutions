function solution(N, P, Q) {
  // Get primes up to N (sieve)
  const sieve = [0, 0]; // will hold [0,0,2,..N]
  for (let i = 2; i <= N; i++) sieve.push(i);

  // sieve the array (set non-primes to 0) and then filter out 0s
  for (let i = 2; i < N; i++) {
    for (let j = i * 2; j < N; j += i) {
      sieve[j] = 0;
    }
  }
  const primes = sieve.filter((ele) => ele !== 0);

  // Use primes to get semiprimes up to N
  const semiprimes = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes[i] * primes[i] > N) break; // optimization
    for (let j = i; j < primes.length; j++) {
      const semiprime = primes[i] * primes[j];
      if (semiprime > N) break; // optimization
      semiprimes.push(semiprime);
    }
  }
  semiprimes.sort((a, b) => a - b);

  // Make prefix sum array for number of semiprimes up to N
  const prefixSums = [0];
  let j = 0;
  for (let i = 1; i <= N; i++) {
    if (i === semiprimes[j]) {
      prefixSums[i] = prefixSums[i - 1] + 1;
      j++;
    } else prefixSums[i] = prefixSums[i - 1];
  }

  // Loop 0-M and use prefix sum array to calculate number
  // of semiprimes in each range of P,Q
  const M = P.length;
  const answer = [];
  for (let i = 0; i < M; i++) {
    const p = P[i];
    const q = Q[i];
    const semiprimeCount = prefixSums[q] - prefixSums[p - 1];
    answer.push(semiprimeCount);
  }

  return answer;
}
