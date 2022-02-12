
import fs from "fs";
import dotenv from 'dotenv'
dotenv.config()
const URL=process.env.MONGO_URL
import MongoDB from 'mongodb'
const dbName = "Live_Shows";
const collectionUsers = "users";
const collectionContacts = "contacts";
const collectionConcertsData="concertsData";
const MongoClient = MongoDB.MongoClient;
const concertsDataJson=fs.readFileSync("./data/concerts.json","utf-8");
const concertsDataJSONStringify=JSON.parse(concertsDataJson);
// function insertConcertsData(req, res) {
//     MongoClient.connect(URL, function (err, db) {
//       if (err) throw err;
//       const dbo = db.db(dbName);
//       dbo
//         .collection(collectionConcertsData)
//         .insertMany(concertsDataJSONStringify.concerts, function (err,allConcerts) {
//           if (err) throw err;
//           res.send(allConcerts)
//           db.close();
//         });
//     });
//   }
function getConcertsData(req, res) {
    try{
    MongoClient.connect(URL, function (err, db) {
      if (err) throw err;
      const dbo = db.db(dbName);
      dbo
        .collection(collectionConcertsData)
        .find({})
        .toArray(function (err, allData) {
          if (err) throw err;
          res.send(allData);
          db.close();
        });
    })}
    catch(err){
      console.log(URL);
      res.send(URL)
    }
  }
  function addUser(req, res) {
    MongoClient.connect(URL, function (err, db) {
      if (err) throw err;
      const dbo = db.db(dbName);
      let newUser = req.body;
      console.log(newUser);
      dbo
      .collection(collectionUsers)
      .insertOne(newUser, function (err, resDbInsert) {
        console.log(resDbInsert);
        if (err) throw err;
        res.sendStatus(201);
      });
    });
  }
  function updateWishList(req, res) {
    MongoClient.connect(URL, function (err, db) {
      if (err) throw err;
      const dbo = db.db(dbName);
      const wishListToUpdate = req.body;
      const id = req.params.id;
      dbo
        .collection(collectionUsers)
        .findOneAndUpdate(
          { localId:id },
          { $set:wishListToUpdate },
          function (err, resUpdated) {
            if (err) throw err;
            console.log("findoneandupdate",resUpdated);
            if (resUpdated.value) {
              res.sendStatus(201);
              console.log(resUpdated);
            } else {
              res.sendStatus(404);
            }
            db.close();
          }
        );
    });
  }
  function getUserById(req, res) {
    MongoClient.connect(URL, function (err, db) {
      const id=req.params.id
      if (err) throw err;
      const dbo = db.db(dbName);
      dbo
        .collection(collectionUsers)
        .findOne({localId:id},
        function (err,wishList) {
          if (err) throw err;
          console.log(wishList);
          res.send(wishList);
          db.close();
        });
    });
  }
  function deleteFromWishList(req, res) {
    MongoClient.connect(URL, function (err, db) {
      if (err) throw err;
      const dbo = db.db(dbName);
      const wishListToUpdate = req.body;
      const id = req.params.id;
      dbo
        .collection(collectionUsers)
        .findOneAndUpdate(
          { localId:id },
          { $pull: {wishList:wishListToUpdate}},
          function (err, resUpdated) {
            if (err) throw err;
            if (resUpdated.value) {
              res.sendStatus(200);
            } else {
              res.sendStatus(404);
            }
  
            db.close();
          }
        );
    });
  }
  function addContact(req, res) {
    MongoClient.connect(URL, function (err, db) {
      if (err) throw err;
      const dbo = db.db(dbName);
      let newContact = req.body;
      console.log(newContact);
      dbo
      .collection(collectionContacts)
      .insertOne(newContact, function (err, resDbInsert) {
        console.log(resDbInsert);
        if (err) throw err;
        res.sendStatus(201);
      });
    });
  }
export {addUser,getConcertsData,updateWishList,getUserById,deleteFromWishList,addContact};
