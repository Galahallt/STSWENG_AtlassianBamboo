// import modules
import express from 'express';

// import index controller object for index controller methods
import indexController from '../controller/index_controller.js';

// get express router
const router = express.Router();

// route for logging in user to application
router.post('/login', indexController.postLogin);

// export index routes
export default router;
