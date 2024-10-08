import { Router } from "express";

// import controllers
import * as controller from "../controllers/controller.js";

const router = Router();

// Questions Routes API

router
  .route("/questions")
  .get(controller.getQuestions)
  .post(controller.insertQuestions)
  .delete(controller.dropQuestions);

router
  .route("/result")
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.dropResult);

export default router;
