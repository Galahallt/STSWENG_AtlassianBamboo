// import express module for router
import express from 'express';

// import instructor controller object for instructor controller methods
import instructorController from '../controller/instructor_controller.js';

// import multer for file upload
import multer from 'multer';

const upload = multer({ dest: 'tmp/csv/' });

const router = express.Router();

// route for adding instructor to database
router.post('/addProf', instructorController.postAddProf);

// route for adding multiple instructors to database via csv
router.post(
  '/addProfsCsv',
  upload.single('csv-file'),
  instructorController.postAddProfsCsv
);

// route for getting all instructors from database
router.get('/getAllProfs', instructorController.getAllProfs);

// export instructor routes
export default router;
