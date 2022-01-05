// import modules
import express from 'express';

// import index controller object for index controller methods
import userController from '../controller/user_controller.js';

// get express router
const router = express.Router();

// route for logging in user to application
router.post('/getUserById', userController.getUserById);
router.post('/getUserByEmail', userController.getUserByEmail);

// export index routes
export default router;
