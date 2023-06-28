const mongoose = require("mongoose");

// User Schema or Document Structure
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
});

// Create Model
const Category = new mongoose.model("CATEGORY", categorySchema);

module.exports = Category;
