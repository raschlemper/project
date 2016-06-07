'use strict';

// Development Specific Configuration
// ==================================
module.exports = {
  postgres: {
    uri: 'postgres://postgres:123456@localhost:5432/vision',
    options: {
      logging: console.log,
      dialect: 'postgres'
    }
  }
};