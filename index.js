//Third Party Module
const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.json("Hi friends");
});

// Listen Port
app.listen(5000, () => {
  console.log("Server started on 5000");
});
