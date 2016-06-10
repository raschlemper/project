'use strict';

var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate');

var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    name: String,
    lastname: String,
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    password: {
      type: String,
      required: true
  },
    gender: String
});


/**
 * Virtuals
 */


/**
 * Validations
 */


/**
 * Pre-save hook
 */


/**
 * Methods
 */

ClientSchema.plugin(deepPopulate);
module.exports = mongoose.model('Client', ClientSchema);
