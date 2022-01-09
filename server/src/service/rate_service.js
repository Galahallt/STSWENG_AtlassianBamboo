// get Rate model in model folder
import Rate from '../model/Rate.js';

// create instructor receipt model that contains methods for rating receipt data manipulation
const rateService = {
  // this retrieves and returns all rating receipt data in the database
  // from most to least recent
  getAllRatings: async () => Rate.find({}),

  // this method retrieves all instructor ratings
  // from most to least recent
  getInstructorRatings: async (instructorID) =>
    Rate.find({ instructorID: instructorID }),

  // find rating of user in instructor
  findRating: async (data) => Rate.findOne(data),

  // add new rating to instructor
  addRating: async (rating) => {
    const newRating = new Rate({
      rating: rating.rating,
      userID: rating.userID,
      instructorID: rating.instructorID,
    });
    await newRating.save();
  },

  // update rating of instructor
  updateRating: async (userID, instructorID, update) =>
    Rate.findOneAndUpdate(
      { userID: userID, instructorID: instructorID },
      update
    ),
};

export default rateService;
