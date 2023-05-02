const Joi = require('joi');

// const schemePost = Joi.object({
//     name: Joi.string().required(),
//     email: Joi.string().required(),
//     phone: Joi.string().required(),
// });

// const schemePut = Joi.object({
//     name: Joi.string().required(),
//     email: Joi.string().required(),
//     phone: Joi.string().required(),
// });


// module.exports = {
//     schemePost, schemePut
// };


const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
});

module.exports = {
    addSchema,
};
