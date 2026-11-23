const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, index: true },
  studentName: { type: String, default: 'Student' },
  pdfBase64: { type: String, required: true },
  generatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

reportSchema.index({ createdAt: 1 }, { expireAfterSeconds: 604800 });

module.exports = mongoose.model('Report', reportSchema);
