const express = require("express");

const server = express();

server.get("/api/server2", (req, res) => {
  res.json({ message: "server2" });
});

server.listen(3000, () => {
  console.log("Server in listen port 3000");
});
