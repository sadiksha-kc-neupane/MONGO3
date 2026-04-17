const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

const path = require("path");
const Chat = require("./models/chat");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

main()
  .then(() => `Connected to MongoDB`)
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let Chat1 = new Chat({
  from: "Alice",
  to: "bob",
  message: "Hello Bob",
  createdAt: new Date(),
});

Chat1.save()
  .then(() => console.log("Chat saved to database"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("new");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
