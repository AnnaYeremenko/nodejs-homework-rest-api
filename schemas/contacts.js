const Joi = require('joi');

const schemePost = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean(),
  });

  const schemePut = Joi.object({
    name: Joi.string().optional(),
    email: Joi.string().optional(),
    phone: Joi.string().optional(),
    favorite: Joi.boolean(),
  });

  const schemePatch = Joi.object({
    favorite: Joi.boolean().required(),
  });

const schemas = {
  schemePost,
  schemePut,
  schemePatch,
};
   
  module.exports = {
    schemas,
  }