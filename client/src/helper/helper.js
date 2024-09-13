export function attemps_Number(result) {
  return result.filter((r) => r !== undefined).length;
}

export function earnedPoints_Number(result, answers, point) {
  return result
    .map((e, i) => e === answers[i])
    .filter((i) => i)
    .map((i) => point)
    .reduce((prev, curr) => prev + curr, 0);
}

export function flagResult(totalPoints, earnedPoints) {
  return totalPoints / 2 <= earnedPoints;
}
