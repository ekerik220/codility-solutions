function solution(S) {
  if (S.length === 0) return 1;

  const stack = [S[0]];

  for (let i = 1; i < S.length; i++) {
    if (stack[stack.length - 1] + S[i] === "()") stack.pop();
    else stack.push(S[i]);
  }

  return stack.length === 0 ? 1 : 0;
}
