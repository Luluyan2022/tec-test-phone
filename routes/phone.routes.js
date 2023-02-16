const router = require("express").Router();
const Phones = require('../data/phones.json')

router.get("/phones", (req, res, next) => {
    res.json(Phones)
});

router.get("/phones/:id", (req, res, next) => {
    const {id} = req.params;  
    console.log(req.params)  
    res.json(Phones[id]);
  });

module.exports = router;