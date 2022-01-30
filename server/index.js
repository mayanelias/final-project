console.log("app is loading");
// const utils=require("./utils");
import {getBooks} from "./utils.js";
console.log(getBooks);
// const express = require("express");
import express from "express";
const app = express();
// used for json inside body
app.use(express.json());

app.get("/api", (req, res) => {
  console.log("root is accessed");
  res.send({ res: "hi my name is maayan elias" });
});
app.get("/books", (req, res) => {
  getBooks(req,res);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
