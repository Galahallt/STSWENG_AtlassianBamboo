import logger from '../logger/index.js';

// get instructor model object from model folder
import Instructor from '../model/Instructor.js';

// get instructor service methods from service folder
import userService from '../service/user_service.js';

// get instructor service methods from service folder
import instructorService from '../service/instructor_service.js';

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
      csv
        .parseFile(req.file.path)
        .on('data', function (data) {
          fileRows.push(data);
        })
        .on('end', function () {
          fs.unlinkSync(req.file.path);
          logger.info(fileRows);
          return res.status(200).json(fileRows);
        });
    } catch (error) {
      logger.error(error);
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
};

// export instructor controller object for routing
export default instructorController;
