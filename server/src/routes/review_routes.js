// import express module for router
import express from 'express';

// import instructor controller object for instructor controller methods
import reviewController from '../controller/review_controller.js';

const router = express.Router();

// route for getting all instructors from database
router.post('/reviews', reviewController.getProfReviews);
router.post('/addreview', reviewController.addReview);
// export instructor routes
export default router;
