const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true, trim: true },
  answer: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ['deadline', 'documents', 'test', 'fees', 'scholarship', 'process', 'eligibility', 'general'],
    default: 'general'
  },
  keywords: [{ type: String, lowercase: true }],
  views: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

faqSchema.index({ keywords: 1 });

module.exports = mongoose.model('FAQ', faqSchema);
