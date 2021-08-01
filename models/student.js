const mongoose = require("mongoose");

const studentShema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    age: Number,
    subjects: [String],
    type: String,
    tien: Number,
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("students", studentShema);
module.exports = Student;
