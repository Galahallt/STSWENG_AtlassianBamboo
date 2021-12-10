import logger from '../logger/index.js';

// get instructor model object from model folder
import Instructor from '../model/Instructor.js';

// get instructor service methods from service folder
import instructorService from '../service/instructor_service.js';

// import csv validator
import csvValidator from '../utils/csv-validator.js';

// get tag model object from model folder
import Tag from '../model/Tag.js';

// get rate model object from model folder
import Rate from '../model/Rate.js';

import uniqid from 'uniqid';
import csv from 'fast-csv';
import fs from 'fs';

const instructorController = {
  // add professor to database
  postAddProf: async (req, res) => {
    try {
      const email = req.body.email;
      const domain = email.split('@').pop();

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

  // add multiple professors to database via csv
  postAddProfsCsv: async (req, res) => {
    try {
      const fileRows = [];
      const newProf = [];
      csv
        .parseFile(req.file.path)
        .on('data', function (data) {
          fileRows.push(data);
        })
        .on('end', async function () {
          fs.unlinkSync(req.file.path);
          const validationError = csvValidator.validateCsvData(fileRows);
          if (validationError) {
            return res.status(400).json({ message: validationError });
          } else {
            fileRows.shift();
            await Promise.all(
              fileRows.map(async (row, i, arr) => {
                // format last name to title case
                arr[i][0] = row[0]
                  .toLowerCase()
                  .replace(/\b(\w)/g, (s) => s.toUpperCase());
                // format first name to title case
                arr[i][1] = row[1]
                  .toLowerCase()
                  .replace(/\b(\w)/g, (s) => s.toUpperCase());
                // format dlsu email
                arr[i][2] = row[2].toLowerCase();
                // format courses
                arr[i][5] = row[5].toUpperCase().split(',');

                const profExisting = await instructorService.getProf({
                  email: arr[i][2],
                });

                if (!profExisting) {
                  const prof = {
                    id: uniqid(),
                    lastName: arr[i][0],
                    firstName: arr[i][1],
                    email: arr[i][2],
                    college: arr[i][3],
                    department: arr[i][4],
                    courses: arr[i][5],
                  };
                  newProf.push(await instructorService.addProf(prof));
                }
              })
            );
            logger.info(newProf);
            if (newProf.length != 0) {
              return res.status(200).json(newProf);
            } else {
              return res
                .status(400)
                .json({ message: 'Professors already exists!' });
            }
          }
        });
    } catch (error) {
      logger.error(error);
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
