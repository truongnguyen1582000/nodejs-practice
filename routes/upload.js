const express = require("express");
const router = express.Router();
const multer = require("multer");
const File = require("../models/file");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    cb(null, file.fieldname + "-" + Date.now() + "." + ext);
  },
});

var upload = multer({ storage: storage });

router.get("/file/:id", async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    res.sendFile(`D:/CODE/COM/JWT/uploads/${file.fileName}`);
  } catch (err) {
    res.json({ status: "fail" });
  }
});

router.post("/uploadfile", upload.single("myFile"), async (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  await File.create({
    fileName: req.file.filename,
  });
  res.send(file);
});

//Uploading multiple files
router.post(
  "/uploadmultiple",
  upload.array("myFiles", 12),
  async (req, res, next) => {
    const files = req.files;
    if (!files) {
      const error = new Error("Please choose files");
      error.httpStatusCode = 400;
      return next(error);
    }
    const listFileName = files.map((file) => ({ fileName: file.filename }));
    await File.insertMany(listFileName);
    res.send(listFileName);
  }
);

module.exports = router;
