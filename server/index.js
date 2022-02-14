console.log("app is loading");
import {addUser,getConcertsData,updateWishList,getUserById,deleteFromWishList, addContact} from "./utils.js";
import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.use(express.json());
// app.get("/concerts", (req, res) => {
// insertConcertsData(req,res);
// });
app.get("/concerts", (req, res) => {
getConcertsData(req,res);
});
app.post("/users", (req, res) => {
  addUser(req,res);
});
app.post("/contacts", (req, res) => {
  addContact(req,res);
});
app.patch("/users/:id", (req, res) => {
updateWishList(req, res);
});
app.get("/users/:id", (req, res) => {
  getUserById(req, res);
});
app.patch("/users/delete/:id", (req, res) => {
  deleteFromWishList(req, res);
});
app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, resp) => {
  resp.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
