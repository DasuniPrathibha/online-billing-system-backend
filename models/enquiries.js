const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const enquiriesSchema = new Schema({
  
  categories: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Enquiries = mongoose.model('Enquiries', enquiriesSchema);

module.exports = Enquiries;