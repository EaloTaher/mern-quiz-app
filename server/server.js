import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./router/route.js";

//Import connection file
import connect from "./database/conn.js";

const app = express();

// app middlerwares
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

// application port
const port = process.env.PORT || 8080;

// application port
app.use("/api", router); //apis

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

//start server only when we have a valid connection
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server Connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log("Cannot Connect to server");
    }
  })
  .catch((error) => {
    console.log("Invalid Databse Connection");
  });
