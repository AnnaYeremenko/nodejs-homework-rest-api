const express = require('express');

const ctrl = require("../../controllers/contacts");

const { Contact } = require("../../models/contact")

const {validateBody} = require("../../middlewares");

const schema = require("../../schemas/contacts");

const router = express.Router();

router.get('/', ctrl.getAll);

// router.get('/:id', ctrl.getContactById);

// router.post('/', validateBody(schema.schemePost), ctrl.add);

// router.put('/:id', validateBody(schema.schemePut), ctrl.updateById);

// router.delete('/:id', ctrl.deleteById);

module.exports = router;