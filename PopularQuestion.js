const mongoose = require('mongoose');

const popularQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  intent: { type: String, default: 'UNKNOWN' },
  count: { type: Number, default: 1 }
}, { timestamps: true });

popularQuestionSchema.index({ count: -1 });

module.exports = mongoose.model('PopularQuestion', popularQuestionSchema);
