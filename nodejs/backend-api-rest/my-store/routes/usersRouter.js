const express = require('express');
const router = express.Router();

const userService = require('./../services/user.service');
const service = new userService();


router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users);
});


module.exports = router;
