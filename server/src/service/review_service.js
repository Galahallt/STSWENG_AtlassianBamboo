// get Instructor model in model folder
import Review from '../model/review.js';

// create instructor receipt model that contains methods for rating receipt data manipulation
const reviewService = {
  addReview: async (data) => Review.insertOne(data),
  getReviews: async (instructorID) =>
    Review.findMany({ instructor_id: instructorID }),
};

export default reviewService;
