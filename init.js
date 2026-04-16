const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then(() => `Connected to MongoDB`)
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Alice",
    to: "Bob",
    message: "Hello Bob",
    createdAt: new Date(),
  },
  {
    from: "Bob",
    to: "Alice",
    message: "Hey Alice, how are you?",
    createdAt: new Date(),
  },
  {
    from: "Charlie",
    to: "David",
    message: "Are you coming to class today?",
    createdAt: new Date(),
  },
  {
    from: "David",
    to: "Charlie",
    message: "Yes, I’ll be there in 10 minutes.",
    createdAt: new Date(),
  },
  {
    from: "Eve",
    to: "Frank",
    message: "Did you finish the assignment?",
    createdAt: new Date(),
  },
  {
    from: "Frank",
    to: "Eve",
    message: "Almost done, just one question left.",
    createdAt: new Date(),
  },
  {
    from: "Grace",
    to: "Helen",
    message: "Let’s meet after lunch.",
    createdAt: new Date(),
  },
  {
    from: "Helen",
    to: "Grace",
    message: "Sure, see you then!",
    createdAt: new Date(),
  },
];

Chat.insertMany(allChats)
  .then(() => console.log("Chats inserted into database"))
  .catch((err) => console.log(err));
