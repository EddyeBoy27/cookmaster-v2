const Joi = require('@hapi/joi');

const schemaNewUser = Joi.object({
  name: Joi.string()
    .min(2)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
  password: Joi.string()
    .min(5)
    .required(),
});

const schemaLogin = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
  password: Joi.string()
    .min(5)
    .required(),
});

const schemaNewRecipe = Joi.object({
  name: Joi.string()
    .min(3)
    .required(),
  ingredients: Joi.string()
    .min(5)
    .required(),
  preparation: Joi.string()
    .min(5)
    .required(),
});

module.exports = {
  schemaNewUser,
  schemaLogin,
  schemaNewRecipe,
};
