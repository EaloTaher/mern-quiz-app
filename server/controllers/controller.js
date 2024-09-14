export async function getQuestions(req, res) {
  res.json("questions api GET request");
}

export async function insertQuestions(req, res) {
  res.json("questions api POST request");
}

export async function dropQuestions(req, res) {
  res.json("questions api DELETE request");
}

export async function getResult(req, res) {
  res.json("results api GET request");
}

export async function storeResult(req, res) {
  res.json("results api POST request");
}

export async function dropResult(req, res) {
  res.json("results api DELETE request");
}
