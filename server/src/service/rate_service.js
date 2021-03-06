// get Rate model in model folder
import Rate from '../model/Rate.js';

// create instructor receipt model that contains methods for rating receipt data manipulation
const rateService = {
  // this method retrieves all instructor ratings
  // from most to least recent
  getInstructorRatings: async (instructorID) =>
    Rate.find({ instructorID: instructorID }),

  // find rating of user in instructor
  findRating: async (data) =>
    Rate.findOne({
      course: data.course,
      userID: data.userID,
      instructorID: data.profID,
    }),

  // add new rating to instructor
  addRating: async (rating) => {
    const newRating = new Rate({
      rating: rating.rating,
      course: rating.course,
      userID: rating.userID,
      instructorID: rating.instructorID,
    });
    await newRating.save();
  },

  // update rating of instructor
  updateRating: async (data, update) =>
    Rate.findOneAndUpdate(
      {
        course: data.course,
        userID: data.userID,
        instructorID: data.instructorID,
      },
      update
    ),
};

export default rateService;
