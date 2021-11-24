import logger from '../logger/index.js';

// get instructor model object from model folder
import Instructor from '../model/Instructor.js';

// get instructor service methods from service folder
import instructorService from '../service/instructor_service.js';

// get tag model object from model folder
import Tag from '../model/Tag.js';

// get rate model object from model folder
import Rate from '../model/Rate.js';

import uniqid from 'uniqid';

const instructorController = {
  // add professor to database
  postAddProf: async (req, res) => {
    try {
      const email = req.body.email;
      const domain = email.split('@').pop();

      logger.info(domain);

      const profExisting = await instructorService.getProf({ email: email });

      if (!profExisting) {
        const prof = {
          id: uniqid(),
          lastName: req.body.lastName,
          firstName: req.body.firstName,
          email: req.body.email,
          college: req.body.college,
          department: req.body.department,
          courses: req.body.courses,
        };

        const newProf = await instructorService.addProf(prof);
        logger.info('Professor added successfully' + newProf);

        delete prof.id;

        return res.status(200).json(newProf);
      } else {
        return res.status(400).json({ message: 'Professor already exists.' });
      }
    } catch (err) {
      logger.error(err);
      // if error has occurred, send server error status and message
      return res.status(500).json({ message: 'Server Error' });
    }
  },

  // get all professors from the database
  getAllProfs: async (req, res) => {
    try {
      // retrieve all professors from the database
      const profs = await instructorService.getAllProfs();

      // if there are existing professors in the database
      if (profs.length != 0) {
        return res.status(200).json(profs);
      } else {
        // send back empty array with appropriate status code
        return res.status(400).json(profs);
      }
    } catch (err) {
      logger.error(err);
      // if error has occurred, send server error status and message
      return res.status(500).json({ message: 'Server Error' });
    }
  },

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
