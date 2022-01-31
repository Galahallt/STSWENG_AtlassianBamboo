// import mongoose module for schema modelling
import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  instructor_id: {
    type: String,
    required: true,
  },
  course_code: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

// implement rate schema as rate model
const ReviewModel = mongoose.model('Review', ReviewSchema);

// export rate model for data creation and manipulation
export default ReviewModel;
