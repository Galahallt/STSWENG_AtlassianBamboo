// import express module for router
import express from 'express';

// import rate controller object for instructor controller methods
import rateController from '../controller/rate_controller.js';

const router = express.Router();

// route for finding rating
router.post('/findRating', rateController.findRating);

// route for adding rating
router.post('/addRating', rateController.addRating);

// route for all ratings
router.post('/getAllRatings', rateController.getAllRatings);

// route for display rating
router.patch('/getInstructorRatings', rateController.getInstructorRatings);

// route for update rating in db
router.patch('/updateRating', rateController.updateRating);

// export instructor routes
export default router;
