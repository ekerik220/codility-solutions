function solution(S, P, Q) {
  const totalNucs = { A: 0, C: 0, G: 0, T: 0 };
  const totals = [{ ...totalNucs }];

  for (let i = 0; i < S.length; i++) {
    totalNucs[S[i]]++;
    totals.push({ ...totalNucs });
  }

  const answer = [];
  for (let i = 0; i < P.length; i++) {
    answer.push(getMinImpact(P[i], Q[i], totals));
  }

  return answer;
}

function getMinImpact(p, q, totals) {
  const inRange = {
    A: totals[q + 1].A - totals[p].A,
    C: totals[q + 1].C - totals[p].C,
    G: totals[q + 1].G - totals[p].G,
    T: totals[q + 1].T - totals[p].T,
  };

  if (inRange.A) return 1;
  if (inRange.C) return 2;
  if (inRange.G) return 3;
  if (inRange.T) return 4;
}
