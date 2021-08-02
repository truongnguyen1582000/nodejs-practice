const express = require("express");
const router = express.Router();
const Student = require("../models/student");

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      status: "success",
      numberOfStudent: students.length,
      data: {
        students,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      msg: err,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({
        status: "fail",
        msg: "student not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        student,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      msg: err,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const student = await Student.create({
      ...req.body,
    });

    res.status(201).json({
      status: "success",
      data: {
        student,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      msg: err,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({
        status: "fail",
        msg: "student not found",
      });
    }
    console.log(deletedStudent);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      msg: err,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!updatedStudent) {
      return res.status(404).json({
        status: "fail",
        msg: "student not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: updatedStudent,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      msg: err,
    });
  }
});

module.exports = router;
