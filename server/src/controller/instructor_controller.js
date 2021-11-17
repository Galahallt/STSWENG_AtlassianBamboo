// get instructor model object from model folder
const Instructor = require('../model/Instructor.js');

// get tag model object from model folder
const Tag = require('../model/Tag.js');

// get rate model object from model folder
const Rate = require('../model/Rate.js');

const instructorController = {
  // get all ratings
  getAllRatings: async (req, res) => {
    try {
      // retrieve all ratings from database
      const ratings = await RateService.getAllRatings();

      // if there are existing ratings from the database
      if (ratings.length != 0) {
        return res.status(200).json(ratings);
      }

      // send the empty array of ratings back to the client with appropriate status code
      return res.status(404).json(ratings);
    } catch (err) {
      // if error has occured, send server error status and message
      return res.status(500).json({ message: 'Server Error' });
    }
  },

  getUserRatings: async (req, res) => {
    try {
      // retrieve all ratings from this user
      const ratings = await RateService.getUserRatings(req.params.userID);

      // if there are existing ratings from this user from the database
      if (ratings.length != 0) {
        return res.status(200).json(ratings);
      }

      // send the empty array of ratings back to the client with appropriate status code
      return res.status(404).json(ratings);
    } catch (err) {
      // if error has occured, send server error status and message
      return res.status(500).json({ message: 'Server Error' });
    }
  },

  getInstructorRatings: async (req, res) => {
    try {
      // retrieve all ratings of this instructor
      const ratings = await RateService.getUserRatings(req.params.instructorID);

      // if there are existing ratings of this instructor from the database
      if (ratings.length != 0) {
        return res.status(200).json(ratings);
      }

      // send the empty array of ratings back to the client with appropriate status code
      return res.status(404).json(ratings);
    } catch (err) {
      // if error has occured, send server error status and message
      return res.status(500).json({ message: 'Server Error' });
    }
  },
};

// export instructor controller object for routing
export default instructorController;
