function solution(A, B) {
  const downstream = [];
  let deaths = 0;

  for (let i = 0; i < A.length; i++) {
    if (B[i] === 1) downstream.push(A[i]);
    else {
      while (downstream.length > 0) {
        deaths++;
        const dsFish = downstream[downstream.length - 1];
        if (A[i] < dsFish) break;
        else downstream.pop();
      }
    }
  }

  return A.length - deaths;
}
