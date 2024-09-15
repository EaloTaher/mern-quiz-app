import Results from "../models/resultSchema.js";
import Questions from "../models/questionSchema.js";
import questions, { answers } from "../database/data.js";
export async function getQuestions(req, res) {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

export async function insertQuestions(req, res) {
  try {
    Questions.insertMany({ questions, answers }).then(function (err, data) {
      res.json("Data Saved Successfuly...!");
    });
  } catch (error) {
    res.json({ error });
  }
}

export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json("Questions deleted successfully...!");
  } catch (error) {
    res.json({ error });
  }
}

// get all results
export async function getResult(req, res) {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json(error);
  }
}

export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achieved } = req.body;
    if (!username && !result) throw new Error("Data not provided...!");

    Results.create({ username, result, attempts, points, achieved }).then(
      function (err, data) {
        res.json("Result Saved Successfuly");
      }
    );
  } catch (error) {
    res.json(error);
  }
}

export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json("Results Deleted Successfully...!");
  } catch (error) {
    res.json(error);
  }
}
