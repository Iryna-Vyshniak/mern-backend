const { Schema, model } = require('mongoose');

const { mongooseError } = require('../utils');

const length = lgth => [lgth, `Must be at least ${lgth} characters long!`];

const dataitemSchema = new Schema(
  {
    title: { type: String, minlength: length(5), default: 'title' },
    owner: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  },
  { timestamps: true, versionKey: false }
);

dataitemSchema.post('save', mongooseError); // Set validation-error status

const Dataitem = model('item', dataitemSchema);

module.exports = Dataitem;
