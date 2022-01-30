import userService from '../service/user_service.js';
import logger from '../logger/index.js';
import uniqid from 'uniqid';

const indexController = {
  // index controller method to login user
  postLogin: async (req, res) => {
    try {
      const email = req.body.email;
      const domain = email.split('@').pop();

      if (domain != 'dlsu.edu.ph') {
        return res.status(400).json({ message: 'Not DLSU account!' });
      } else {
        const userExisting = await userService.getUser({ email: email });

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
          const newUser = await userService.addUser(user);
          logger.info('User added successfully!' + newUser);
        }

        delete user.id;

        return res.status(200).json({ user: user, accessToken: accessToken });
      }
    } catch (error) {
      logger.error(error);
      return res.status(500).json({ message: 'Server Error' });
    }
  },
};

// export index controller
export default indexController;
