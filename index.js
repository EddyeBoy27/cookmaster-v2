require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const indexControllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'uploads')));

app.post('/users', indexControllers.usersControllers.getNewUsers);
app.post('/users/admin',
  middlewares.validateJwt.loginAdmin,
  indexControllers.usersControllers.newAdminUser);

app.post('/login', indexControllers.usersControllers.loginUser);

app.post('/recipes', middlewares.validateJwt.loginJwt, indexControllers.recipesControllers.newRecipe);
app.get('/recipes', indexControllers.recipesControllers.getAllRecipes);
app.get('/recipes/:id', indexControllers.recipesControllers.findRecipeById);
app.put('/recipes/:id', middlewares.validateJwt.loginJwt, indexControllers.recipesControllers.updateRecipeById);
app.delete('/recipes/:id', middlewares.validateJwt.loginJwt, indexControllers.recipesControllers.deleteById);

app.put('/recipes/:id/image',
  middlewares.validateJwt.loginJwt,
  middlewares.verifyImage,
  middlewares.uploadImage,
  indexControllers.recipesControllers.uploadImage);

app.use(indexControllers.errorController);

app.all('*', indexControllers.endPointController);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
