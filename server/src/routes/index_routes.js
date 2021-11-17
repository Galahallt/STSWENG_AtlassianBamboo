// import modules
import express from 'express';

// import index controller object for index controller methods
import indexController from '../controller/index_controller.js';

// import passport
import passport from 'passport';

// get express router
const router = express.Router();

// route for logging in user to application
router.post(
  '/login',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/login/callback',
  passport.authenticate('google', { failureRedirect: '/failed' }),
  indexController.postLogin
);

router.get('/failed', indexController.failedLogin);

// export index routes
export default router;
