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
const Message = require("./models/msgSchema");
const Category = require("./models/categorySchema");

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
    const role = req.body.role;

    const createUser = new Users({
      username: username,
      email: email,
      password: password,
      role: role,
    });

    // Save Method is used to create user or insert user
    // But before saving or inserting, password will hash
    // Because of hasing. After hash, it will save to DB
    const created = await createUser.save();
    console.log({ created });
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
    const role = req.body.role;

    // Find user if exist
    const user = await Users.findOne({ email: email, role: role });
    console.log({ user });
    if (user) {
      // Verify Password
      const isMatch = await bcryptjs.compare(password, user.password);
      console.log({ isMatch });
      if (isMatch) {
        // Generate token which is define in User schema
        // const token = await user.generateToken();
        // res.cookie("jwt", token, {
        //   // Expires token in 24 hours
        //   expires: new Date(Date.now(+86400000)),
        //   httpOnly: true,
        // });
        res.status(200).json(user);
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

// Registration
app.get("/users", async (req, res) => {
  try {
    //Get body or Data
    const { role } = req.query;

    const userslist = await Users.find({ role: role });

    console.log({ userslist });

    res.status(200).json(userslist);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// Message
app.post("/message", async (req, res) => {
  try {
    //Get body or Data
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const sendMsg = new Message({
      name: name,
      email: email,
      message: message,
    });

    // Save Method is used to create user or insert user
    // But before saving or inserting, password will hash
    // Because of hasing. After hash, it will save to DB
    const created = await sendMsg.save();
    console.log(created);
    res.status(200).send("Sent");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// Logout Page
app.get("/logout", (req, res) => {
  res.clearCookie("jwt", { path: "/" });
  res.status(200).send("User Logged Out");
});

// Run Server
app.listen(port, () => {
  console.log("Server is Listening at port", port);
});
