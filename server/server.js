const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

const app = express();

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//db Config
const db = require("./config/keys").mongoURL;

//connect to mongodb
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(">>> MongoDB Connected");
  })
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.json("Hello there !!! How are u man ?");
});

//passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);

const port = process.env.PORT || 2030;

app.listen(port, () => {
  console.log(`>>> Server is running at port ${port}`);
});
