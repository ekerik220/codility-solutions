function solution(A) {
  const sides = A.filter((num) => num > 0);

  if (sides.length < 3) return 0;

  sides.sort((a, b) => a - b);

  for (let i = 0; i < sides.length - 2; i++) {
    if (isTriangular(sides[i], sides[i + 1], sides[i + 2])) return 1;
  }

  return 0;
}

function isTriangular(p, q, r) {
  return p + q > r && q + r > p && r + p > q;
}
