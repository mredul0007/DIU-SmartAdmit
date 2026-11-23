const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  role: { type: String, enum: ['user', 'assistant'], required: true },
  content: { type: String, required: true },
  intent: { type: String, default: 'UNKNOWN' },
  timestamp: { type: Date, default: Date.now }
}, { _id: false });

const chatHistorySchema = new mongoose.Schema({
  sessionId: { type: String, required: true, index: true },
  messages: [messageSchema],
  context: {
    gpa: { type: Number, default: null },
    interests: [{ type: String }],
    lastIntent: { type: String, default: null },
    mentionedDepts: [{ type: String }]
  },
  totalMessages: { type: Number, default: 0 }
}, { timestamps: true });

chatHistorySchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

module.exports = mongoose.model('ChatHistory', chatHistorySchema);
