import logger from '../logger/index.js';

// get review service methods from service folder
import ReviewService from '../service/review_service.js';

import uniqid from 'uniqid';

const reviewController = {
  getProfReviews: async (req, res) => {
    try {
      // TODO use the prof's ID to find all of his reviews
      const instructorID = req.body.instructorID;
      logger.info(instructorID);
      const reviews = await ReviewService.getReviews(instructorID);
      if (reviews != null) {
        return res.status(200).json(reviews);
      } else {
        return res.status(200).json({ message: 'No reviews yet.' });
      }
    } catch (err) {
      return res.status(500).json({ message: 'Server Error' });
    }
  },
  addReview: async (req, res) => {
    try {
      logger.info(req.body.user_id);
      const review = {
        id: uniqid(),
        user_id: req.body.user_id,
        userName: req.body.userName,
        instructor_id: req.body.instructor_id,
        course_code: req.body.course_code,
        review: req.body.review,
      };
      logger.info(JSON.stringify(review));
      const result = await ReviewService.addReview(review);
      if (result) {
        return res.status(200).json(result);
      }
      // use review.id and the id and add it to the Instructor's id
      // add review and add the new review's ID into the Instructor's
    } catch (err) {
      logger.error(err);
      return res.status(500).json({ message: 'Server Error' });
    }
  },
  deleteReview: async (req, res) => {
    try {
      const id = {
        reviewid: req.params.reviewid,
      };
      logger.info(id.reviewid);

      const revID = await ReviewService.deleteReview(id);

      return res.status(202).json(revID);
    } catch (err) {
      return res.status(500).json({ message: 'Server Error' });
    }
  },
};

// export review controller object for routing
export default reviewController;
