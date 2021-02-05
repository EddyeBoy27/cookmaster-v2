const rescue = require('express-rescue');
const validJoi = require('../middlewares/validateJoi');
const usersService = require('../services/usersServices');
const { schemaNewUser, schemaLogin } = require('../middlewares/schemasJoi');

const getNewUsers = rescue(async (req, res) => {
  const { ...user } = req.body;
  await validJoi.validateJoi(schemaNewUser, user);
  const newUser = await usersService.newUsers(user);
  return res.status(201).json(newUser);
});

const loginUser = rescue(async (req, res) => {
  const { ...user } = req.body;
  await validJoi.validateJoi(schemaLogin, user);
  const loggedUser = await usersService.loginUser(user);
  return res.status(200).json({ token: loggedUser });
});

const newAdminUser = rescue(async (req, res) => {
  const { ...user } = req.body;
  await validJoi.validateJoi(schemaNewUser, user);
  const adminUser = await usersService.newAdminUser(user);
  return res.status(201).json(adminUser);
});

module.exports = {
  getNewUsers,
  loginUser,
  newAdminUser,
};
