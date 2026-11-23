const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    department: {
      type: String,
      required: true,
      trim: true,
    },

    faculty: {
      type: String,
      required: true,
    },

    tuitionFee: Number,

    totalCredits: Number,

    duration: String,

    description: String,

    skills: [String],

    majorSubjects: [String],

    careerPaths: [String],

    jobSectors: [String],

    topCompanies: [String],

    entrySalary: String,

    midSalary: String,

    seniorSalary: String,

    bdDemand: String,

    globalDemand: String,

    admissionRequirement: String,

    scholarship: String,

    internship: String,

    personalityMatch: String,

    interestTags: [String],

    higherStudy: String,

    difficulty: String,

    programmingLevel: String,

    mathLevel: String,

    remoteOpportunities: String,

    freelancingOpportunities: String,

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

departmentSchema.index({ code: 1 });
departmentSchema.index({ faculty: 1 });
departmentSchema.index({ interestTags: 1 });

module.exports = mongoose.model("Department", departmentSchema);