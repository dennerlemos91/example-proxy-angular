const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

server.get("/api/server1", (req, res) => {
  res.json({ message: "server1" });
});

server.listen(3001, () => {
  console.log("Server in listen port 3001");
});
