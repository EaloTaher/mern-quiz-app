import axios from "axios";

export function attempts_Number(result) {
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

//get server Data
export async function getServerData(url, callback) {
  var data = await (await axios.get(url))?.data;
  return callback ? callback(data) : data;
}

//post server data
export async function postServerData(url, result, callback) {
  var data = await (await axios.post(url, result))?.data;
  return callback ? callback(data) : data;
}
