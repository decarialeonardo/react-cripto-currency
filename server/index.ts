import express from "express";
import cookieParser from "cookie-parser";

import api from "./api";

const server: express.Application = express();
const apiPort = 3000;
server.disable("x-powered-by");

// Enable cookie parsing
server.use(cookieParser());
server.use((err, req, res, next) => {
  console.log(err);
  next();
});

// Mount an API application if you need
server.use("/api", api);

server.listen(apiPort, () => {
  console.log(`Server running on port ${apiPort}`);
});

export { server };
