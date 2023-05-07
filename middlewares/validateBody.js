const Joi = require('joi');

const {HttpError} = require('../helpers');

module.exports = {
putContactValidation: (req, res, next ) => {
    const contactSchema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      phone: Joi.string().min(14).max(14).required(),
    });
const validationResult = contactSchema.validate(req.body);
        if (validationResult.error) {
            return (HttpError(400, error.message));
        }
        next();
    },
postContactValidation: (req, res, next ) => {
        const contactSchema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      phone: Joi.string().min(14).max(14).required(),
    });
const validationResult = contactSchema.validate(req.body);
        if (validationResult.error) {
            return (HttpError(400, error.message));
            }
            next();
        },
    };
