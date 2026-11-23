const mongoose = require('mongoose');

const studentProfileSchema = new mongoose.Schema(
{
  sessionId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },

  name: {
    type: String,
    default: null
  },

  sscGpa: {
    type: Number,
    default: null,
    min: 0,
    max: 5
  },

  hscGpa: {
    type: Number,
    default: null,
    min: 0,
    max: 5
  },

  group: {
    type: String,
    enum: ['Science', 'Business', 'Humanities', null],
    default: null
  },

  favoriteSubjects: [{
    type: String
  }],

  skills: [{
    type: String
  }],

  interests: [{
    type: String
  }],

  careerGoals: [{
    type: String
  }],

  financialConstraint: {
    type: String,
    enum: ['low', 'medium', 'high', null],
    default: null
  },

  scholarshipInterest: {
    type: Boolean,
    default: null
  },

  parentMode: {
    type: Boolean,
    default: false
  },

  profileComplete: {
    type: Boolean,
    default: false
  },

  completionStage: {
    type: String,
    enum: [
      'greeting',
      'sscGpa',
      'hscGpa',
      'gpa',
      'group',
      'subjects',
      'interests',
      'career',
      'financial',
      'complete'
    ],
    default: 'greeting'
  }
},
{
  timestamps: true
});

module.exports = mongoose.model('StudentProfile', studentProfileSchema);