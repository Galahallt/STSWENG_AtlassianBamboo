// import modules
import express from 'express';

// import index controller object for index controller methods
import adminController from '../controller/admin_controller.js';
// get express router
const router = express.Router();

// route for logging in user to application
router.get('/adminlist', adminController.getAdminList);
router.post('/addadmin', adminController.postAddAdmin);
router.post('/removeadmin', adminController.postRemoveAdmin);
router.patch('/editprof', adminController.editProfessor);

// export index routes
export default router;
