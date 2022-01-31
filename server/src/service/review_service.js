// get Instructor model in model folder
import Review from '../model/review.js';

// create instructor receipt model that contains methods for rating receipt data manipulation
const reviewService = {
  addReview: async (review) => {
    const newReview = new Review({
      id: review.id,
      user_id: review.user_id,
      userName: review.userName,
      instructor_id: review.instructor_id,
      course_code: review.course_code,
      review: review.review,
      date: review.date,
    });
    return newReview.save();
  },
  getReviews: async (instructorID) =>
    Review.find({ instructor_id: instructorID }),

  deleteReview: async (id) => Review.findOneAndDelete({ id: id.reviewid }),
};

export default reviewService;
