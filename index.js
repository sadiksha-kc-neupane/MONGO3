const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

main()
  .then(() => `Connected to MongoDB`)
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
