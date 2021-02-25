import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

import assetsRouter from "./routes/movie-router";

const app: express.Application = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", assetsRouter);

app.listen(apiPort, () => {
  console.log(`Server running on port ${apiPort}`);
});
