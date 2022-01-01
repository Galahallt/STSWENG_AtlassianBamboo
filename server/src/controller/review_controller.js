import logger from '../logger/index.js';

// get instructor model object from model folder
import Review from '../model/review.js';

// get instructor service methods from service folder
import instructorService from '../service/instructor_service.js';

// get instructor service methods from service folder
import ReviewService from '../service/review_service.js';

import uniqid from 'uniqid';

const instructorController = {
  getProfReviews: async (req, res) => {
    try {
      // TODO use the prof's ID to find all of his reviews
      const instructorID = req.body.instructorID;
      const reviews = await ReviewService.getReviews(instructorID);
      if (reviews != null) return res.status(200).json(reviews);
    } catch (err) {
      return res.status(500).json({ message: 'Server Error' });
    }
  },
  addReview: async (req, res) => {
    try {
      const review = {
        id: uniqid(),
        instructor_id: req.body.review.insturctorID,
        course_code: req.body.review.course_code,
        review: req.body.review.review,
        date: Date.now(),
      };
      // use review.id and the id and add it to the Instructor's id
      // add review and add the new review's ID into the Instructor's
    } catch (err) {
      return res.status(500).json({ message: 'Server Error' });
    }
  },
};

// export instructor controller object for routing
export default instructorController;
