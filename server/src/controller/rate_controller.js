import logger from '../logger/index.js';

// get user service methods from service folder
import userService from '../service/user_service.js';

// get instructor service methods from service folder
import instructorService from '../service/instructor_service.js';

// get rate service methods from service folder
import rateService from '../service/rate_service.js';

// get instructor model object from model folder
import Instructor from '../model/Instructor.js';

// get tag model object from model folder
import Tag from '../model/Tag.js';

// get rate model object from model folder
import Rate from '../model/Rate.js';

import uniqid from 'uniqid';

const rateController = {
  // get all ratings
  getAllRatings: async (req, res) => {
    try {
      // retrieve all ratings from database
      const ratings = await rateService.getAllRatings();

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

  getInstructorRatings: async (req, res) => {
    try {
      // fetch props email
      const instructor = await instructorService.getProf({
        email: req.body.instructorEmail,
      });

      // retrieve all ratings of this instructor
      const ratings = await rateService.getInstructorRatings(instructor.id);

      if (ratings.length != 0) {
        let avg = 0;
        for (let i = 0; i < ratings.length; i++) {
          avg += ratings[i].rating;
        }

        avg /= ratings.length;
        avg = avg.toFixed(2);

        const update = {
          rating: avg,
        };

        const result = await instructorService.updateRating(
          instructor.id,
          update
        );

        // if there are existing ratings of this instructor from the database
        return res.status(200).json(result.rating);
      }

      return res.status(404).json({ message: 'No ratings found' });
    } catch (err) {
      // if error has occured, send server error status and message
      return res.status(500).json({ message: 'Server Error' });
    }
  },

  findRating: async (req, res) => {
    try {
      logger.info(req.body.userEmail);

      const userID = await userService.getUser({ email: req.body.userEmail });
      const instructorID = await instructorService.getProf({
        email: req.body.instructorEmail,
      });

      const find = {
        userID: userID.id,
        instructorID: instructorID.id,
      };

      const findRate = await rateService.findRating(find);

      return res.status(200).json(findRate);
    } catch (err) {
      logger.error(err);
      return res.status(500).json({ message: 'Server Error' });
    }
  },

  addRating: async (req, res) => {
    try {
      const userID = await userService.getUser({ email: req.body.userEmail });
      const instructorID = await instructorService.getProf({
        email: req.body.instructorEmail,
      });

      const rate = {
        rating: req.body.rating,
        userID: userID.id,
        instructorID: instructorID.id,
      };

      const addRate = await rateService.addRating(rate);

      return res.status(201).json(addRate);
    } catch (err) {
      return res.status(500).json({ message: 'Server Error' });
    }
  },

  updateRating: async (req, res) => {
    try {
      const userID = await userService.getUser({ email: req.body.userEmail });
      // fetch props email
      const instructor = await instructorService.getProf({
        email: req.body.instructorEmail,
      });

      const update = {
        rating: req.body.rating,
      };

      const result = await rateService.updateRating(
        userID.id,
        instructor.id,
        update
      );

      logger.info(result);
      logger.info(update);

      return res.status(204).json(result);
    } catch (err) {
      logger.error(err);
      return res.status(500).json({ message: 'Server Error' });
    }
  },
};

// export instructor controller object for routing
export default rateController;
