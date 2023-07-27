const Joi = require('joi');

const addSchema = Joi.object({
  title: Joi.string().min(5).required(),
});

module.exports = { addSchema };
