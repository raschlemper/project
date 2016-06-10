'use strict'

var config = require('../../config/environment');
var clientController = require(config.resources.controller + '/clientController');
var express = require('express');
var router = express.Router();

/**
 * /api/component
 */

router.get('/', clientController.findAll);

router.get('/:id', clientController.findById);

router.post('/', clientController.save);

router.put('/:id', clientController.update);

router.delete('/:id', clientController.remove);

module.exports = router;