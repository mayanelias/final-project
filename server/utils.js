// const products = require("../public/js/main");
// const MongoDB = require("mongodb");
import MongoDB from 'mongodb'
// const path = require("path");
// const express = require("express");
// require("dotenv").config({path:"../.env"});
// const app = express();
// app.use(express.json());
// const publicPath = path.join(__dirname,"..","public");
const collectionBooks = "books";
const dbName = "Live_Shows";
const collectionFavorites = "favorites";
const collectionComments = "comments";
const collectionCarts = "data";
const MongoClient = MongoDB.MongoClient;
// const ObjectId = MongoDB.ObjectId;
// const url =process.env.MONGO_URL;
const MONGO_URL= "mongodb://localhost:27017";
function getBooks(req, res) {
    MongoClient.connect(MONGO_URL, function (err, db) {
      if (err) throw err;
      const dbo = db.db(dbName);
      dbo
        .collection(collectionBooks)
        .find({})
        .toArray(function (err, allBooks) {
          if (err) throw err;
          res.send(allBooks);
          db.close();
        });
    });
  }
export {getBooks};