function solution(N, A) {
  const counters = new Array(N).fill(0);

  let max_counter = 0; // current biggest counter
  let max_command = 0; // biggest counter when last max command was issued

  for (let i = 0; i < A.length; i++) {
    const c_index = A[i] - 1;

    if (A[i] <= N) {
      if (counters[c_index] < max_command) counters[c_index] = max_command;
      counters[c_index]++;
      max_counter = Math.max(max_counter, counters[c_index]);
    } else max_command = max_counter;
  }

  for (let i = 0; i < counters.length; i++) {
    counters[i] = Math.max(counters[i], max_command);
  }

  return counters;
}
