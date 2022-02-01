import UserService from '../service/user_service.js';
import InstructorService from '../service/instructor_service.js';
import logger from '../logger/index.js';
// get cloudinary for profile picture edit
import cloudinary from '../config/cloudinary.js';
// get uniqid for img name
import uniqid from 'uniqid';

const adminController = {
  getAdminList: async (req, res) => {
    try {
      const admins = await UserService.getAllAdmins();
      if (admins != null) return res.status(200).json(admins);
    } catch (error) {
      return res.status(500).json({ message: 'Server Error' });
    }
  },

  postAddAdmin: async (req, res) => {
    try {
      const email = req.body.email;
      logger.info(req.body.email);
      logger.info(req.body);
      const flag = await UserService.updateAdministratorUser(email, true);
      logger.info(JSON.stringify(flag));
      if (flag) {
        return res.status(200).json(flag);
      }
    } catch (error) {
      logger.info(error);
      return res.status(500).json({ message: 'Server Error' });
    }
  },

  postRemoveAdmin: async (req, res) => {
    try {
      const email = req.body.email;
      const flag = await UserService.updateAdministratorUser(email, false);
      if (flag)
        return res
          .status(200)
          .json({ message: 'Admin removed successfully! ' });
    } catch (error) {
      return res.status(500).json({ message: 'Server Error' });
    }
  },

  editProfessor: async (req, res) => {
    try {
      logger.info(req.file);
      if (req.file) {
        const result = await cloudinary.v2.uploader.upload(req.file.path, {
          public_id: `prof-${uniqid()}`,
          folder: 'STSWENG-Atlassian',
        });

        const editProf = {
          profilePicture: result.secure_url,
          id: JSON.parse(JSON.stringify(req.body.id)),
          firstName: JSON.parse(JSON.stringify(req.body.firstName)),
          lastName: JSON.parse(JSON.stringify(req.body.lastName)),
          email: JSON.parse(JSON.stringify(req.body.email)),
          college: JSON.parse(JSON.stringify(req.body.college)),
          department: JSON.parse(JSON.stringify(req.body.department)),
          status: JSON.parse(JSON.stringify(req.body.status)),
        };

        const edit = await InstructorService.updateProfDetails(editProf);
        if (edit) {
          return res
            .status(200)
            .json({ message: 'Instructor edit successful' });
        }
      } else {
        const editProf = {
          profilePicture: JSON.parse(JSON.stringify(req.body.profilePicture)),
          id: JSON.parse(JSON.stringify(req.body.id)),
          firstName: JSON.parse(JSON.stringify(req.body.firstName)),
          lastName: JSON.parse(JSON.stringify(req.body.lastName)),
          email: JSON.parse(JSON.stringify(req.body.email)),
          college: JSON.parse(JSON.stringify(req.body.college)),
          department: JSON.parse(JSON.stringify(req.body.department)),
          status: JSON.parse(JSON.stringify(req.body.status)),
        };

        const edit = await InstructorService.updateProfDetails(editProf);
        if (edit) {
          return res
            .status(200)
            .json({ message: 'Instructor edit successful' });
        }
      }
    } catch (error) {
      logger.error(error);
      return res.status(500).json({ message: 'Server Error' });
    }
  },
};

export default adminController;
