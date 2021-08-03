const express = require("express");
const router = express.Router();

const xlsx = require("xlsx");

router.get("/readFile", (req, res) => {
  try {
    const workbook = xlsx.readFile(`${__dirname}/Students.xlsx`);
    const data = xlsx.utils.sheet_to_json(workbook.Sheets["students"]);
    res.status(200).json({
      status: "Success",
      data: {
        data,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      msg: err,
    });
  }
});

router.get("/writeFile", async (req, res) => {
  try {
    const workbook = xlsx.readFile(`${__dirname}/Students.xlsx`);
    const data = xlsx.utils.sheet_to_json(workbook.Sheets["students"]);
    data.push(req.body);
    const writedFile = xlsx.utils.json_to_sheet(data);
    xlsx.writeFile(writedFile, `${__dirname}/Students.xlsx`);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      msg: err,
    });
  }
});

module.exports = router;
