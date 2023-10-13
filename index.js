require("dotenv").config();
const express = require("express");
const studentsRouter = require("./routes/students");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/students", studentsRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("server listening");
});

console.log(process);
