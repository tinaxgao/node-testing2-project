const router = require("express").Router();
const Stocks = require("./stocks-model");


router.get("/", (req, res, next) => { 
  Stocks.getAll()
    .then(users => {
      res.json(users);
    })
    .catch(next);
});

router.get("/:user_id", (req, res, next) => { 
  Stocks.getById(req.params.stock_id)
    .then(user => {
      res.json(user);
    })
    .catch(next);
});

module.exports = router;
