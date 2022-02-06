import logger from '../logger/index.js';

// get user service methods from service folder
import userService from '../service/user_service.js';

// get instructor service methods from service folder
import instructorService from '../service/instructor_service.js';

// get rate service methods from service folder
import rateService from '../service/rate_service.js';

const rateController = {
  getAllRatings: async (req, res) => {
    try {
      const ratings = await rateService.getInstructorRatings(
        req.body.instructorID
      );
      return res.status(200).json(ratings);
    } catch (err) {
      return res.status(500).json({ message: 'Server Error' });
    }
  },

  getInstructorRatings: async (req, res) => {
    try {
      // retrieve all ratings of this instructor
      const ratings = await rateService.getInstructorRatings(
        req.body.instructorID
      );

      let avg = 0;
      for (let i = 0; i < ratings.length; i++) {
        avg += ratings[i].rating;
      }

      avg /= ratings.length;
      avg = avg.toFixed(2);

      const prof = {
        profID: req.body.instructorID,
      };

      const update = {
        rating: avg,
      };

      const result = await instructorService.updateRating(prof, update);

      // if there are existing ratings of this instructor from the database
      return res.status(200).json(result.rating);
    } catch (err) {
      // if error has occured, send server error status and message
      return res.status(500).json({ message: 'Server Error' });
    }
  },

  findRating: async (req, res) => {
    try {
      const userID = await userService.getUser({ email: req.body.userEmail });
      const find = {
        course: req.body.course,
        userID: userID.id,
        profID: req.body.profID,
      };

      const findRate = await rateService.findRating(find);

      logger.info('---------');
      logger.info(findRate);
      logger.info('+++++++++');

      return res.status(200).json(findRate);
    } catch (err) {
      logger.error(err);
      return res.status(500).json({ message: 'Server Error' });
    }
  },

  addRating: async (req, res) => {
    try {
      const userID = await userService.getUser({ email: req.body.userEmail });

      const rate = {
        rating: req.body.rating,
        course: req.body.course,
        userID: userID.id,
        instructorID: req.body.instructorID,
      };

      const addRate = await rateService.addRating(rate);

      return res.status(200).json(addRate);
    } catch (err) {
      return res.status(500).json({ message: 'Server Error' });
    }
  },

  updateRating: async (req, res) => {
    try {
      const userID = await userService.getUser({ email: req.body.userEmail });

      const find = {
        course: req.body.course,
        userID: userID.id,
        instructorID: req.body.instructorID,
      };

      const update = {
        rating: req.body.rating,
      };

      const result = await rateService.updateRating(find, update);

      return res.status(200).json(result);
    } catch (err) {
      logger.error(err);
      return res.status(500).json({ message: 'Server Error' });
    }
  },
};

// export instructor controller object for routing
export default rateController;
