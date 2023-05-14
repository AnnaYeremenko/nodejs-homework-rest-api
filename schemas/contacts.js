const Joi = require('joi');

const schemePost = Joi.object({
    name: Joi.string().optional(),
    email: Joi.string().optional(),
    phone: Joi.string().optional(),
  });

  const schemePut = Joi.object({
    name: Joi.string().optional(),
    email: Joi.string().optional(),
    phone: Joi.string().optional(),
  });

  module.exports = {
    schemePost, schemePut
  }