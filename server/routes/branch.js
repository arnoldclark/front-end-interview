const express = require("express");
const branchesRoutes = express.Router();
const dbo = require('../db/connection');

const collectionName = "branches"

branchesRoutes.route("/branches").get(async function (req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection(collectionName)
    .find({}).limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
     } else {
        res.json(result);
      }
    });
});

branchesRoutes.route("/branches").post(function (req, res) {
  const dbConnect = dbo.getDb();
  const branchesCollection = dbConnect.collection(collectionName)

  branchesCollection.insertOne(req.body, function (err, result) {
    if (err) {
      res.status(400).send("Error inserting matches!");
    } else {
      branchesCollection
        .find({ _id: result.insertedId })
        .next(function(_err, document) {
          if (!document) {
            res.status(400).send("Error finding inserted document!");
          } else {
            res.status(201).json(document);
          }
        });
    }
  });
  
});

module.exports = branchesRoutes;