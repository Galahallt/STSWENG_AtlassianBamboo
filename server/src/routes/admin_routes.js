// import modules
import express from 'express';

// import index controller object for index controller methods
import adminController from '../controller/admin_controller.js';

// import multer for file upload
import multer from 'multer';
const upload = multer({ storage: multer.diskStorage({}) });

// get express router
const router = express.Router();

// route for logging in user to application
router.get('/adminlist', adminController.getAdminList);
router.post('/addadmin', adminController.postAddAdmin);
router.post('/removeadmin', adminController.postRemoveAdmin);
router.patch(
  '/editprof',
  upload.single('image-file'),
  adminController.editProfessor
);

// export index routes
export default router;
