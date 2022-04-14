const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const port = 5000;
const cors = require("cors");
const admin = require("firebase-admin");
const ObjectId = require("mongodb").ObjectId;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

require("dotenv").config();

const serviceAccount = require("./config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const uri = process.env.DB_STRING;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//user authentication

const userRoute = require("./user/userRoute");
app.use("/api/user/", userRoute);

client.connect((err) => {
  const charityCollection = client
    .db("charify")
    .collection("charify-collection");
  app.post("/api/user/info", (req, res) => {
    const newCollection = req.body;
    charityCollection.insertOne(newCollection).then(result => {
      console.log(result)
    })
    console.log(newCollection);
  });
  app.get("/api/user/dashboard", (req, res) => {
    const bearer = req.headers.authorization;
    const userEmail = req.query.email;
    if (bearer && bearer.startsWith("Bearer ")) {
      const idToken = bearer.split(" ")[1];
      admin
        .auth()
        .verifyIdToken(idToken)
        .then((decodedToken) => {
          const decodedEmail = decodedToken.email;
          if (decodedEmail === userEmail) {
            charityCollection
              .find({ email: userEmail })
              .toArray((err, document) => {
                res.send(document);
              });
          }
        });
    }
   
  });
  app.delete('/api/user/delete/:id', (req, res) => {
    const id = req.params.id;
    charityCollection.deleteOne({_id: ObjectId(id)}).then(() =>{
      console.log("success")
    })
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
