function solution(H) {
  const stack = [H[0]];

  // If number doesn't change don't do anything
  // If number goes up, add the new height to stack
  // If number goes down, remove elements that are >
  // than it from the stack

  let blocks = 1;
  for (let i = 1; i < H.length; i++) {
    let endOfStack = stack[stack.length - 1];
    if (H[i] === endOfStack) continue;
    if (H[i] > H[i - 1]) {
      blocks++;
      stack.push(H[i]);
    }
    if (H[i] < H[i - 1]) {
      while (endOfStack > H[i]) {
        stack.pop();
        endOfStack = stack[stack.length - 1];
      }
      if (H[i] === endOfStack) continue;
      stack.push(H[i]);
      blocks++;
    }
  }

  return blocks;
}
