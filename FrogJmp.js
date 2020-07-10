function solution(X, Y, D) {
  const distance = Y - X;
  const jumps = Math.ceil(distance / D);
  return jumps;
}
