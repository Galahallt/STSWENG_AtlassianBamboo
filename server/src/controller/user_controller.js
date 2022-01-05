import logger from '../logger/index.js';

// get user service methods from service folder
import UserService from '../service/user_service.js';

const userController = {
  // get user information by using user id
  getUserById: async (req, res) => {
    try {
      logger.info('uc: ' + req.body.id);
      const result = await UserService.getUser({ id: req.body.id });
      if (result) {
        return res.status(200).json(result);
      }
      return res.status(400).json({ message: 'User does not exists!' });
    } catch (err) {
      logger.error(err);
      return res.status(500).json({ message: 'Server Error' });
    }
  },
  // get user information by using user email
  getUserByEmail: async (req, res) => {
    try {
      logger.info('uc: ' + req.body.email);
      const result = await UserService.getUser({ email: req.body.email });
      if (result) {
        return res.status(200).json(result);
      }
      return res.status(400).json({ message: 'User does not exists!' });
    } catch (err) {
      logger.error(err);
      return res.status(500).json({ message: 'Server Error' });
    }
  },
};

// export user controller object for routing
export default userController;
