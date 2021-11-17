// import mongoose module for schema modelling
const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema(
  {
    tagName: {
      type: String,
      required: true,
    },

    instructorID: {
      type: String,
      required: true,
    },

    timestamp: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

// implement tag schema as tag model
const TagModel = mongoose.model('Tag', TagSchema);

// export tag model for data creation and manipulation
export default TagModel;
