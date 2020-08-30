
// server.js
const express = require("express");
const app = express();
const connectDb = require("./src/dbConnection");
const User = require('./src/models/user');
const PORT = 8080;


app.use("/", (req, res, next) => {
    console.log(req.method + " " + req.url);
    next();
  }); 
app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
   });
   app.get("/user-create", async (req, res) => {
    const user = new User({ username: "userTest" });
    await user.save().then(() => console.log("user created"));
    res.send("User created \n");
   });
app.listen(PORT, function() {
    console.log(`Listening on ${PORT}`);

connectDb().then(() => {
 console.log("MongoDb connected");
 });
});