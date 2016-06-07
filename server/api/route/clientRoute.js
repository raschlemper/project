'use strict'

let config = require('../../config/environment');
let clientController = require(config.resources.controllers + '/clientController');
let express = require('express');
let router = express.Router();

/**
 * /api/component
 */

router.get('/', clientController.findAll);

router.get('/:id', clientController.findById);

router.post('/', clientController.save);

router.put('/:id', clientController.update);

router.delete('/:id', clientController.remove);

module.exports = router;