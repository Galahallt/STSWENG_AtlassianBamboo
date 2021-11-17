// import mongoose module for schema modelling
const mongoose = require('mongoose');

const RateSchema = new.mongoose.Schema({
	rating: {
    type: Number,
    required: true,
  },
  
  userID: {
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
	}
}, { timestamps: true });

// implement rate schema as rate model
const RateModel = mongoose.model('Rate', RateSchema);

// export rate model for data creation and manipulation
export default RateModel;