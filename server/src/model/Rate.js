// import mongoose module for schema modelling
import mongoose from 'mongoose';

const RateSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },

  course: {
    type: String,
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
});

// implement rate schema as rate model
const RateModel = mongoose.model('Rate', RateSchema);

// export rate model for data creation and manipulation
export default RateModel;
