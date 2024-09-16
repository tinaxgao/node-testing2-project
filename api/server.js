const express = require("express");

const Stocks = require("./stocks/stocks-model")

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/stocks", (req, res) => {
  Stocks.getAll()
    .then(stocks => {
      res.status(200).json(stocks);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.get("/stocks/:id", (req, res) => {
  res.end()
});

server.post("/stocks", async (req, res) => {
  res.status(210).json(await Stocks.insert(req.body))
});

server.delete("/stocks/:id", (req, res) => {
  res.end()
});

server.put("/stocks/:id", (req, res) => {
  res.end()
});

module.exports = server;
