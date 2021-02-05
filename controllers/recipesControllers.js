const rescue = require('express-rescue');
const validJoi = require('../middlewares/validateJoi');
const { schemaNewRecipe } = require('../middlewares/schemasJoi');
const recipesServices = require('../services/recipesServices');

const newRecipe = rescue(async (req, res) => {
  const { ...recipe } = req.body;
  const { user } = req;
  await validJoi.validateJoi(schemaNewRecipe, recipe);
  const createdRecipe = await recipesServices.newRecipe(recipe, user);
  res.status(201).json(createdRecipe);
});

const getAllRecipes = rescue(async (req, res) => {
  const allRecipes = await recipesServices.getAllRecipes();
  res.status(200).json(allRecipes);
});

const findRecipeById = rescue(async (req, res) => {
  const { id } = req.params;
  const recipe = await recipesServices.findRecipeById(id);
  res.status(200).json(recipe);
});

const updateRecipeById = rescue(async (req, res) => {
  const { ...recipe } = req.body;
  const { user, params: { id } } = req;
  await validJoi.validateJoi(schemaNewRecipe, recipe);
  const updatedRecipe = await recipesServices.updateRecipeById(recipe, user, id);
  res.status(200).json(updatedRecipe);
});

const deleteById = rescue(async (req, res) => {
  const { user, params: { id } } = req;
  await recipesServices.deleteById(user, id);
  res.status(204).end();
});

const uploadImage = rescue(async (req, res) => {
  const { file: { filename }, params: { id } } = req;
  const updatedRecipe = await recipesServices.uploadImage(id, filename);
  res.status(200).json(updatedRecipe);
});

module.exports = {
  newRecipe,
  getAllRecipes,
  findRecipeById,
  updateRecipeById,
  deleteById,
  uploadImage,
};
