import UserService from '../service/user_service.js';
import InstructorService from '../service/instructor_service.js';
import logger from '../logger/index.js';
// get cloudinary for profile picture edit
import cloudinary from '../config/cloudinary.js';
// get uniqid for img name
import uniqid from 'uniqid';

const adminController = {
  getAdminList: async (req, res) => {
    const admins = await UserService.getAllAdmins();
    if (admins.length !== 0) {
      return res.status(200).json(admins);
    } else {
      return res.status(400).json({ message: 'No Admininistrators found! ' });
    }
  },

  postAddAdmin: async (req, res) => {
    try {
      const email = req.body.email;
      const flag = await UserService.updateAdministratorUser(email, true);
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

  // edit professor info here
  editProfessor: async (req, res) => {
    try {
      const editProf = {
        id: JSON.parse(JSON.stringify(req.body.id)),
        firstName: JSON.parse(JSON.stringify(req.body.firstName)),
        lastName: JSON.parse(JSON.stringify(req.body.lastName)),
        email: JSON.parse(JSON.stringify(req.body.email)),
        college: JSON.parse(JSON.stringify(req.body.college)),
        department: JSON.parse(JSON.stringify(req.body.department)),
        status: JSON.parse(JSON.stringify(req.body.status)),
      };
      if (req.file) {
        const result = await cloudinary.v2.uploader.upload(req.file.path, {
          public_id: `prof-${uniqid()}`,
          folder: 'STSWENG-Atlassian',
        });

        editProf['profilePicture'] = result.secure_url;

        const edit = await InstructorService.updateProfDetails(editProf);
        if (edit) {
          return res
            .status(200)
            .json({ message: 'Instructor edit successful' });
        }
      } else {
        editProf['profilePicture'] = JSON.parse(
          JSON.stringify(req.body.profilePicture)
        );

        const edit = await InstructorService.updateProfDetails(editProf);
        if (edit) {
          return res
            .status(200)
            .json({ message: 'Instructor edit successful' });
        }
      }
    } catch (error) {
      return res.status(500).json({ message: 'Server Error' });
    }
  },
};

export default adminController;
