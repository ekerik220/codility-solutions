function solution(N) {
  // Get factors up to the sqrt of N
  const factors = [];
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) factors.push(i);
  }

  // Loop over factors
  // Get the complement of each factor and find the minimum
  let min_perim = Number.POSITIVE_INFINITY;
  for (let i = 0; i < factors.length; i++) {
    const complement = N / factors[i];
    const perimeter = (complement + factors[i]) * 2;

    // the perim should decrease every loop until we've
    // found our true minimum... if it increased then
    // we've already found true minimum on the last loop
    if (perimeter > min_perim) break;

    min_perim = perimeter;
  }

  return min_perim;
}
