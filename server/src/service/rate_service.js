// get Instructor model in model folder
import Instructor from '../model/Instructor.js';

// get Tag model in model folder
import Tag from '../model/Tag.js';

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
  updateRating: async (id, data) =>
    Instructor.findOneAndUpdate(
      { id: id },
      { $set: data },
      { new: true, omitUndefined: true }
    ),
};

export default rateService;
