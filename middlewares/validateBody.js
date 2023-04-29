const Joi = require("joi");

const {HttpError} = require("../helpers");

const validateBody = schema => {
    const func = (req, res, next)=> {
        const { error } = schema.validate(req.body);
        if (error) {
            next(HttpError(400, error.message));

        }
        next()
    }
    return func;
}

const add = async (req, res) => {
    const result = await contacts.addContact(req.body);
    if (!result) {
      res.status(400).json({"message": "missing required name field"})
    }
    res.status(201).json(result);
}
const updateById = async (req, res) => {
    const { name, email, phone } = req.body;
    const { id } = req.params;
    if (!name && !email && !phone) {
        res.status(400).json({"message": "missing fields"})
    }
    const result = await contacts.updateContact(id, req.body);
    if (!result) {
        return res.status(404).json ({
          "message": "Not found"
        });
    }
    res.status(200).json(result);
}
module.exports = {
    add: ctrWrapper(add),
    updateById: ctrWrapper(updateById),
    validateBody,
}