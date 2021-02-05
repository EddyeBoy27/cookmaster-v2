const recipesModel = require('../models/recipesModels');

const newRecipe = async (recipe, user) => {
  const { _id } = user;
  const mountedId = { ...recipe, url: '', authorId: _id };
  const createdRecipe = await recipesModel.newRecipe(mountedId);
  return createdRecipe;
};

const getAllRecipes = async () => {
  const allRecipes = await recipesModel.getAllRecipes();
  return allRecipes;
};

const findRecipeById = async (id) => {
  const recipe = await recipesModel.findById(id);
  if (recipe === null) {
    const err = { error: { message: 'Recipe not found', code: 'Not_found' } };
    throw err;
  }
  return recipe;
};

const updateRecipeById = async (recipe, user, id) => {
  const { _id, role } = user;
  const existRecipe = await findRecipeById(id);
  const { authorId } = existRecipe;
  if (String(authorId) === String(_id) || role === 'admin') {
    const updatedRecipe = await recipesModel.updateRecipeById(id, recipe);
    return updatedRecipe;
  }
  const err = { error: { message: 'You not have permission to update', code: 'Unauthorized' } };
  throw err;
};

const deleteById = async (user, id) => {
  const { _id, role } = user;
  const existRecipe = await findRecipeById(id);
  const { authorId } = existRecipe;
  if (String(authorId) === String(_id) || role === 'admin') {
    await recipesModel.deleteById(id);
  } else {
    const err = { error: { message: 'You no have permission to delete', code: 'Unauthorized' } };
    throw err;
  }
};

const uploadImage = async (id, filename) => {
  const recipe = await findRecipeById(id);
  const { _id, name, ingredients, preparation, authorId } = recipe;
  const mountedRecipe = {
    _id,
    name,
    ingredients,
    preparation,
    url: `http://localhost:${process.env.PORT || 3000}/images/${filename}`,
    authorId,
  };
  const updatedRecipe = await recipesModel.updateRecipeById(id, mountedRecipe);
  return updatedRecipe;
};

module.exports = {
  newRecipe,
  getAllRecipes,
  findRecipeById,
  updateRecipeById,
  deleteById,
  uploadImage,
};
