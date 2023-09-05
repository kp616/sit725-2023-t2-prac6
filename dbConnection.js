const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://kevinphan4:42sysuwDcD3H5ER@cluster0.icn9n44.mongodb.net/?retryWrites=true&w=majority";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

client.connect();
// connection nothing else

module.exports = client; //other files can reference this
