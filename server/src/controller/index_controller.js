import UserService from '../service/user_service.js';
import logger from '../logger/index.js';
import uniqid from 'uniqid';

const indexController = {
  // index controller method to login user
  postLogin: async (req, res) => {
    try {
      const email = req.body.email;
      const domain = email.split('@').pop();

      logger.info(domain);

      if (domain != 'dlsu.edu.ph') {
        logger.error(domain);
        return res.status(400).json({ message: 'Not DLSU account!' });
      } else {
        const userExisting = await UserService.getUser({ email: email });

        const user = {
          id: uniqid(),
          fullName: req.body.fullName,
          givenName: req.body.givenName,
          familyName: req.body.familyName,
          imgURL: req.body.imageURL,
          email: email,
        };

        const accessToken = req.body.accessToken;

        if (userExisting == null) {
          const newUser = await UserService.addUser(user);
          logger.info('User added sucessfully!' + newUser);
        }

        delete user.id;

        return res.status(200).json({ user: user, accessToken: accessToken });
      }
    } catch (error) {
      logger.error(error);
    }
  },
};

// export index controller
export default indexController;
