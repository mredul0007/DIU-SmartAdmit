const mongoose = require('mongoose');

const departmentScoreSchema = new mongoose.Schema({
  code: String,
  name: String,
  confidenceScore: Number,
  academicAlignment: Number,
  interestAlignment: Number,
  careerAlignment: Number,
  practicalFit: Number,
  reasoning: [String],
  careerRoadmap: {
    year1: [String],
    year2: [String],
    year3: [String],
    year4: [String]
  },
  jobRoles: [String],
  industryPaths: [String],
  tuitionPerSemester: Number,
  scholarshipChance: String
}, { _id: false });

const recommendationSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, index: true },
  profileSnapshot: { type: mongoose.Schema.Types.Mixed },
  topDepartments: [departmentScoreSchema],
  parentSummaryEn: { type: String, default: '' },
  parentSummaryBn: { type: String, default: '' },
  generatedAt: { type: Date, default: Date.now },
  reportGenerated: { type: Boolean, default: false },
  reportPath: { type: String, default: null }
}, { timestamps: true });

module.exports = mongoose.model('Recommendation', recommendationSchema);
