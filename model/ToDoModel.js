const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 50,
    },
    description: {
      type: String,
      required: true,
      maxLength: 100,
    },
    createdAt: {
      type: Date,  // Use Date type instead of String
      default: Date.now,  // Pass Date.now as a function
    },
    updatedAt: {
      type: Date,  // Use Date type instead of String
      default: Date.now,  // Pass Date.now as a function
    }
  },
  {
    timestamps: true,  // Automatically manage createdAt and updatedAt
  }
);

module.exports = mongoose.model("ToDo", todoSchema);
