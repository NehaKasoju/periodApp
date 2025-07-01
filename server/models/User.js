const mongoose = require('mongoose');

const symptomSchema = new mongoose.Schema({}, { strict: false });

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  periods: [String], // ISO date strings
  symptoms: { type: Map, of: symptomSchema, default: {} },
  resetToken: String,
  resetTokenExpiry: Date
});

module.exports = mongoose.model('User', userSchema); 