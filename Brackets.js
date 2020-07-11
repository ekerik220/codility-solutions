function solution(S) {
  if (S.length === 0) return 1;

  const stack = [];
  for (let i = 0; i < S.length; i++) {
    if (stack.length === 0) stack.push(S[i]);
    else if (complement(S[i]) === stack[stack.length - 1]) stack.pop();
    else stack.push(S[i]);
  }

  return stack.length === 0 ? 1 : 0;
}

function complement(symbol) {
  if (symbol === ")") return "(";
  if (symbol === "}") return "{";
  if (symbol === "]") return "[";
}
