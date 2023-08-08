let express = require('express');
let app = express();
let port = process.env.port || 3000;
//MongoDB
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://kevinphan4:42sysuwDcD3H5ER@cluster0.icn9n44.mongodb.net/?retryWrites=true&w=majority";
let collection;

app.use(express.static(__dirname + '/'));

//MongoDB access

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function runDBConnection() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    collection = client.db().collection('Cat');
    console.log(collection);
  } catch(ex){
    console.error(ex);
  } 
}


app.get('/', (req, res) =>{
    res.render('index.html');
})

app.post('/api/cat', (req, res) => {
    let cat = req.body;
    postCat(cat, (err, result) => {
        if(!err) {
        res.json({statusCode: 201, data: result, message:'success'})
        }
    });
});

function postCat(cat, callback) {
    collection.insertOne(cat, callback);
}

app.listen(port, ()=>{
    console.log('App listening to: ' + port);
    runDBConnection();
}
); //will fire upon server start
