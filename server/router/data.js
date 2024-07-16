const router = require("express").Router();
// const Data = require('../models/datamodel')
const { json } = require("express");

router.get('/data', async (req, res) => {
  try {
    const data = await Data.find();
  res.json(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;