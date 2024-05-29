//const { MongoClient, ServerApiVersion } = require('mongodb');
import { MongoClient, ServerApiVersion }  from'mongodb'
const uri = "mongodb+srv://jhonbernal:3213248484Jbc%40.@curso-full-stack.hracmrz.mongodb.net/?retryWrites=true&w=majority&appName=curso-full-stack";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default client