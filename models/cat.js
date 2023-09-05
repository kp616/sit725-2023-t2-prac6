let client = require("../dbConnection.js");

let collection = client.db().collection("Cat");

function postCat(cat, callback) {
  collection.insertOne(cat, callback);
}

function getAllCats(callback) {
  collection.find({}).toArray(callback);
}
//includes database functions

module.exports = {postCat, getAllCats};