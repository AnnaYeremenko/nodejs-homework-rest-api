const express = require('express');
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const {
    putContactValidation,
    postContactValidation
} = require ("../../middlewares/validateBody");

// const {validateBody} = require("../../middlewares");

// const schemas = require("../../schemas/contacts");

router.get('/', ctrl.getAll);

router.get('/:id', ctrl.getById);

router.post('/', postContactValidation, ctrl.addContact);

router.delete('/:id', ctrl.deleteById);

router.put('/:id', putContactValidation, ctrl.updateById);

module.exports = router;
