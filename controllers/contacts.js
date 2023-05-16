const contacts = require('../models/contacts');
const { HttpError, ctrlWrapper } = require('../helpers')
const { schemePost, schemePut } = require('../schemas/contacts');

  const getAll = async (req, res) => {
      const result = await contacts.listContacts();
      res.json(result);
  }
  const getContactById = async (req, res) => {
      const { id } = req.params;
      const result = await contacts.getContactById(id);
      if (!result) {
        throw HttpError(404, 'Not found');
      }
      res.json(result);
  }
  const add = async (req, res) => {
      const { error } = schemePost.validate(req.body);
      if(error) {
        throw HttpError(400, error.message);
      }
      const result = await contacts.addContact(req.body);
      res.status(201).json(result);
  }
  const updateById = async (req, res) => {
      const { name, email, phone } = req.body;
      const { error } = schemePut.validate(req.body);
      if (error) {
        throw HttpError(400, error.message);
      }
      const { id } = req.params;
      if (!name && !email && !phone) {
        res.status(400).json({ message: '"message": "missing fields"' });
      }
      const result = await contacts.updateContact(id, req.body);
      if (!result) {
        return res.status(404).json({ message: "Not found" });
      }
      res.status(200).json(result);
  }
  const deleteById = async (req, res) => {
      const { id } = req.params;
      const result = await contacts.removeContact(id);
      if (!result) {
        throw HttpError(404, 'Not found');
      }
      res.status(200).json({ message: "contact deleted" });
  }
module.exports = {
    getAll: ctrlWrapper(getAll),
    getContactById: ctrlWrapper(getContactById),
    add: ctrlWrapper(add),
    updateById: ctrlWrapper(updateById),
    deleteById: ctrlWrapper(deleteById),
  };