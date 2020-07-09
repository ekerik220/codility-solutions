function solution(A) {
  // Loop through and update minimum as we go
  // Minus minimum from each number and track the max profit
  let curr_min = A[0];
  let max_profit = 0;
  for (const price of A) {
    max_profit = Math.max(max_profit, price - curr_min);
    curr_min = Math.min(curr_min, price);
  }

  return max_profit;
}
