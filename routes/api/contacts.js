const express = require('express');

const ctrl = require("../../controllers/contacts");

const {validateBody, isValidId, authenticate} = require("../../middlewares");

const {schemas} = require("../../schemas/contacts");

const router = express.Router();

router.get('/', authenticate, ctrl.getAll);

router.get('/:id', authenticate, isValidId, ctrl.getContactById);

router.post('/', authenticate, validateBody(schemas.schemePost), ctrl.add);

router.put('/:id', authenticate, isValidId, validateBody(schemas.schemePut), ctrl.updateById);

router.patch('/:id/favorite', authenticate, isValidId, validateBody(schemas.schemePatch), ctrl.updateFavorite);

router.delete('/:id', authenticate, isValidId, ctrl.deleteById);

module.exports = router;