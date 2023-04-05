//Import All Dependencies
const dotenv = require("dotenv");
const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

//Configure ENV File & Require Connection File
dotenv.config({ path: "./config.env" });
require("./db/conn");
const port = process.env.PORT;

// Require Model
const Users = require("./models/userSchema");

// These method is used to get data and cookies from frontend
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Registration
app.post("/register", async (req, res) => {
  try {
    //Get body or Data
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const createUser = new Users({
      username: username,
      email: email,
      password: password,
    });

    // Save Method is used to create user or insert user
    // But before saving or inserting, password will hash
    // Because of hasing. After hash, it will save to DB
    const created = await createUser.save();
    console.log(created);
    res.status(200).send("Registered");
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login User
app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // Find user if exist
    const user = await Users.findOne({ email: email });
    if (user) {
      // Verify Password
      const isMatch = await bcryptjs.compare(password, user.password);

      if (isMatch) {
        // Generate token which is define in User schema
        const token = await user.generateToken();
        res.cookie("jwt", token, {
          // Expires token in 24 hours
          expires: new Date(Date.now(+86400000)),
          httpOnly: true,
        });
        res.status(200).send("LoggedIn");
      } else {
        res.status(400).send("Invalid Credentials");
      }
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

// Run Server
app.listen(port, () => {
  console.log("Server is Listening");
});
