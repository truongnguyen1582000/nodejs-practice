const express = require("express");
const app = express();
const port = 3000;

require("dotenv").config();
app.use(express.json());
app.use(express.static("uploads"));

// CONNECT DB
const connect = require("./connectDb");
connect().then(() => {
  console.log("connect to db success !");
});

// MODEL
const User = require("./models/user");

// ROUTE
const userRoute = require("./routes/auth");
const uploadRoute = require("./routes/upload");
const mailerRoute = require("./routes/mailer");
const studentRoute = require("./routes/student");

//MIDDLEWARE
const authMiddleware = require("./middlewares/authMiddleware");

// FB LOGIN
const fbLogin = require("./routes/fbLogin");

app.use("/user", userRoute);
app.use("/social", fbLogin);
app.use("/upload", uploadRoute);
app.use("/mailer", mailerRoute);
app.use("/student", studentRoute);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
