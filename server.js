let express = require('express');
let app = express();
let port = process.env.port || 3000;
//MongoDB
// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://kevinphan4:42sysuwDcD3H5ER@cluster0.icn9n44.mongodb.net/?retryWrites=true&w=majority";
// let collection;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', router); //replaces the lines below to have router file perform the logic\

app.listen(port, () => {
  console.log("App listening to: " + port);
});

// // app.post("/api/cat", (req, res) => {
//   let cat = req.body;
//   postCat(cat, (err, result) => {
//     if (!err) {
//       res.json({ statusCode: 201, data: result, message: "success" });
//     }
//   });
// //});

// //app.get("/api/cats", (req, res) => {
//   getAllCats((err, result) => {
//     if (!err) {
//       res.json({
//         statusCode: 200,
//         data: result,
//         message: "get all cats successful",
//       });
//     }
//   });
// //});

//MongoDB access

// async function runDBConnection() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     // await client.connect();
//     // collection = client.db().collection('Cat');
//     console.log(collection);
//   } catch(ex){
//     console.error(ex);
//   } 
// }

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });


//changed 201 to 200, but addCards are still note being called 14/08/2023


// function postCat(cat, callback) {
//     collection.insertOne(cat, callback);
// }

// function getAllCats(callback){
//   collection.find({}).toArray(callback);
// }
