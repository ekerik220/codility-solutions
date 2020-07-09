function solution(A) {
  // if array length is the minimum, 3, the solution can only be 0
  // since X, Y, and Z are not included in the sum, and an array of
  // length 3 must have X, Y, Z be assigned to each element.
  if (A.length === 3) return 0;

  // Since X and Z are not included in the sum, we should remove the
  // first and last elements of the original array since it's impossible
  // for them to be part of the sum.
  A.pop();
  A.shift();

  const n = A.length;

  // Greatest possible sub array for each end index, and each start index
  const endIndexSums = greatestSumByEndIndex(A);
  const startIndexSums = greatestSumByStartIndex(A);

  // The max sum *could* be when we choose the first or last index for Y,
  // and the loop below won't catch these cases, so we test for them here first.
  let max = Math.max(startIndexSums[1], endIndexSums[n - 2]);

  // Check each possible position of Y, adding the greatest sub array sum to the
  // left and right of it. If the sum of these is bigger than max this is our new
  // max. Also have to check if taking just the left OR right side of Y results
  // in a bigger max, since this is possible to do by setting either X and Y in
  // sequence, or Y and Z in sequence.
  for (let i = 1; i < n - 1; i++) {
    max = Math.max(
      max,
      startIndexSums[i + 1] + endIndexSums[i - 1],
      startIndexSums[i + 1],
      endIndexSums[i - 1]
    );
  }

  // if max was a negative number that's not really the max since we can set
  // X, Y, Z in sequence to get a result of 0.
  return max < 0 ? 0 : max;
}

/** Creates an array where the value at each index is the greatest possible
    sub array of 'A' that ENDS at that index */
function greatestSumByEndIndex(A) {
  const n = A.length;

  const greatestSums = [A[0]];
  for (let i = 1; i < n; i++) {
    greatestSums.push(Math.max(A[i], A[i] + greatestSums[i - 1]));
  }

  return greatestSums;
}

/** Creates an array where the value at each index is the greatest possible
    sub array of 'A' that STARTS at that index */
function greatestSumByStartIndex(A) {
  A.reverse();
  return greatestSumByEndIndex(A).reverse();
}
