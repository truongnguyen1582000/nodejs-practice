const express = require("express");
const app = express();
const port = 3000;

require("dotenv").config();
app.use(express.json());
app.use(express.static("uploads"));

// CONNECT DB
const connect = require("./config/connectMongoDb");
connect().then(() => {
  console.log("connect to db success !");
});

// MODEL
const User = require("./models/user");

// ROUTE
const userRoute = require("./routes/B19-JWT");
const uploadRoute = require("./routes/B21-Multer");
const mailerRoute = require("./routes/B22-Nodemailer");
const studentRoute = require("./routes/B23-Mongodb");
const studentPostgres = require("./routes/B24-PostgreSql");
const fbLogin = require("./routes/B20-fbLogin");
const excelRW = require("./routes/B26-ExcelRW");

//MIDDLEWARE
const authMiddleware = require("./middlewares/authMiddleware");

app.use("/user", userRoute);
app.use("/social", fbLogin);
app.use("/upload", uploadRoute);
app.use("/mailer", mailerRoute);
app.use("/student/v2/", studentPostgres);
app.use("/student", studentRoute);
app.use("/excel-file", excelRW);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
