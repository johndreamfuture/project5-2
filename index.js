const db = require("./connection/connection.js")
const routes = require("./router/router.js")
// import db from "./db/connection.js";
// import routes from "./router/router.js";

const express = require("express");
const cors = require("cors");
const logger = require("morgan");
// import express from "express";
// import cors from "cors";
// import logger from "morgan";
// import chalk from "chalk";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/books", routes);

db.on("connected", () => {
  console.clear();
  console.log("Connectd to MongoDB!");
  app.listen(PORT, () => {
    process.env.NODE_ENV === "production"
      ? console.log(`Express server running in production on port ${PORT}\n\n`)
      : console.log(
          `Express server running in development on: http://localhost:${PORT}`
        );
  });
});