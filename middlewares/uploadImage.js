const multer = require('multer');
const recipesService = require('../services/recipesServices');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: async (req, file, cb) => {
    const { params: { id }, user: { _id: userId, role } } = req;
    const existRecipe = await recipesService.findRecipeById(id);
    if (String(existRecipe.authorId) === String(userId) || role === 'admin') {
      const type = file.mimetype.split('/');
      const fileName = `${id}.${type[1]}`;
      return cb(null, fileName);
    }
    const err = {
      error: { message: 'You not have permission to add image', code: 'Unauthorized' } };
    req.next(err);
  },
});

const upload = multer({ storage }).single('image');

module.exports = upload;
