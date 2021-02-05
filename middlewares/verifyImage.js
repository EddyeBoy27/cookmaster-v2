const rescue = require('express-rescue');
const recipesService = require('../services/recipesServices');

const verifyImageById = rescue(async (req, res, next) => {
  const { params: { id } } = req;
  await recipesService.findRecipeById(id);
  next();
});

module.exports = verifyImageById;
