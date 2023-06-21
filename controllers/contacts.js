const Contact = require("../models/contact");

const { HttpError, ctrlWrapper } = require('../helpers')
const { schemePost, schemePut, schemePatch } = require('../schemas/contacts');

  const getAll = async (req, res) => {
      const result = await Contact.find();
      res.json(result);
  }
     
  const getContactById = async (req, res) => {
      const { id } = req.params;
      const result = await Contact.findById(id);
      if (!result) {
        throw HttpError(404, 'Not found');
      }
      res.json(result);
  }
  const add = async (req, res) => {
      const result = await Contact.create(req.body);
      res.status(201).json(result);
  }
  const updateById = async (req, res) => {
      const { name, email, phone } = req.body;
      const { id } = req.params;
      if (!name && !email && !phone) {
        res.status(400).json({ message: '"message": "missing fields"' });
      }
      const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
      if (!result) {
        throw HttpError(404, "Not found" );
      }
      res.status(200).json(result);
  }

  const updateFavorite = async (req, res) => {
    const { name, email, phone } = req.body;
    const { id } = req.params;
    if (!name && !email && !phone) {
      res.status(400).json({ message: '"message": "missing fields"' });
    }
    const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
    if (!result) {
      throw HttpError(404, "Not found" );
    }
    res.status(200).json(result);
}
  const deleteById = async (req, res) => {
      const { id } = req.params;
      const result = await Contact.findByIdAndRemove(id);
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
    updateFavorite: ctrlWrapper(updateFavorite),
    deleteById: ctrlWrapper(deleteById),
  };