const express = require("express");
const router = express.Router();
const pool = require("../config/connectPostgreSql");

router.post("/", async (req, res) => {
  try {
    const { name, age, subjects, type, tien } = req.body;

    const query = `INSERT INTO students(name, age, subjects, type,tien) VALUES(${name}, ${age}, '{${subjects}}', ${type}, ${tien})`;
    const newStudent = await pool.query(query);

    res.status(201).json({
      status: "success",
      data: {
        newStudent,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "success",
      msg: err,
    });
  }
});

router.get("/", async (req, res) => {
  const students = await pool.query(`SELECT * FROM students`);
  try {
    res.status(201).json({
      status: "success",
      data: {
        students,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "success",
      msg: err,
    });
  }
});

router.get("/:id", async (req, res) => {
  const students = await pool.query(
    `SELECT * FROM students WHERE student.id = ${req.params.id}`
  );
  try {
    res.status(201).json({
      status: "success",
      data: {
        students,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "success",
      msg: err,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await pool.query(`DELETE FROM students WHERE id = ${req.params.id}`);
    res.status(201).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "success",
      msg: err,
    });
  }
});

module.exports = router;
