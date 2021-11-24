// get rating service static object from service folder
import instructorService from '../service/instructor_service.js';

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

  addRating: async (req, res) => {
    try {
      const date = new Date();
      const year = date.getFullYear().toString();
      const month = (date.getMonth() + 1).toString().padStart(2, 0);
      const day = date.getDate().toString().padStart(2, 0);
      const formattedDate = `${year}-${month}-${day}`;

      const userID = await UserService.getUser({ id: req.body.userID });

      const rate = {
        rating: req.body.rating,
        userID: userID,
        instructorID: req.body.instructorID,
        timestamp: formattedDate,
      };

      const newRate = await instructorService.addRating(rate);

      return res.status(201).json(newRate);
    } catch (err) {
      return res.status(500).json({ message: 'Server Error' });
    }
  },

  updateRating: async (req, res) => {
    try {
      const id = req.params.instructorID;
      const data = {};

      if (req.body.rating) {
        data['rating'] = req.body.rating;
      }

      const result = await instructorService.updateRating(id, data);
      return res.status(204).json(result);
    } catch (err) {
      return res.status(500).json({ message: 'Server Error' });
    }
  },
};

// export instructor controller object for routing
export default instructorController;
