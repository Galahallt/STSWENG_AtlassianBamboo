// import express module for router
import express from 'express';

// import instructor controller object for instructor controller methods
import instructorController from '../controller/instructor_controller.js';

const router = express.Router();

// route for adding instructor to database
router.post('/addProf', instructorController.postAddProf);

// export instructor routes
export default router;
