function solution(N) {
  const binary = toBinary(N);

  let started = false;
  let local_count = 0;
  let max_count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      started = true;
      max_count = Math.max(local_count, max_count);
      local_count = 0;
    } else if (started) {
      local_count++;
    }
  }

  return max_count;
}

function toBinary(num) {
  return (num >>> 0).toString(2);
}
