const Joi = require('joi');

const contacts = require('../models/contacts');

const { HttpError, ctrWrapper } = require('../helpers');

const getAll = async (req, res) => {
      const result = await contacts.listContacts();
      res.json(result);
  };

const getById = async (req, res) => {
      const { id } = req.params;
      const result = await contacts.getContactById(id);
      if (!result) {
          throw HttpError(404, 'Not found');
      }
      res.json(result);
  };
const addContact = async (req, res) => {
    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
    // if (!result) {
    //   res.status(400).json({"message": "missing required name field"})
    // }

};
const deleteById = async (req, res) => {
  const { id } = req.params;
  const  result = await contacts.removeContact(id);
  if (!result) {
      return res.status(404).json({ message: "Not found" });
  }
  res.status(200).json({message: 'contact deleted'});
};
const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await contacts.updateContact(id, req.body);
    if (!result) {
        return res.status(404).json ({
          "message": "Not found"
        });
    }
    res.status(200).json( {result} );
}
  module.exports = {
    getAll: ctrWrapper(getAll),
    getById: ctrWrapper(getById),
    addContact: ctrWrapper(addContact),
    deleteById: ctrWrapper(deleteById),
    updateById: ctrWrapper(updateById),
  }