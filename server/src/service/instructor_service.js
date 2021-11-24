// get Instructor model in model folder
import Instructor from '../model/Instructor.js';

// get Tag model in model folder
import Tag from '../model/Tag.js';

// get Rate model in model folder
import Rate from '../model/Rate.js';

// create instructor receipt model that contains methods for rating receipt data manipulation
const instructorService = {
  // this retrieves and returns all rating receipt data in the database
  // from most to least recent
  getAllRatings: async () => Rate.find({}).sort({ createdAt: 'descending' }),

  // this method retrieves ratings done by this user
  // from most to least recent
  getUserRatings: async (userID) =>
    Rate.find({ userID: userID }).sort({ createdAt: 'descending' }),

  // this method retrieves all instructor ratings
  // from most to least recent
  getInstructorRatings: async (instructorID) =>
    Rate.find({ instructorID: instructorID }).sort({ createdAt: 'descending' }),

  // add new rating to instructor
  addRating: async (rating) => {
    const newRating = new Rate({
      rating: rating.rating,
      userID: rating.userID,
      instructorID: rating.instructorID,
      timestamp: rating.timestamp,
    });
    await newRating.save();
  },

  // update rating of instructor
  updateRating: async (id, data) =>
    Rate.findOneAndUpdate(
      { id: id },
      { $set: data },
      { new: true, omitUndefined: true }
    ),
};

export default instructorService;
