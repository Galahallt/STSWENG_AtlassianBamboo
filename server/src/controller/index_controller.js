import UserService from '../service/user_service.js';

const adminController = {

    getAdminList: async(req, res) => {
        try{
            const users = await UserService.getAllUsers();
            const admins = [];

            for(i in users){
                var temp = {
                    familyName: i.familyName,
                    givenName: i.givenName,
                    email: i.email,
                    isAdministrator: isAdministrator
                }
                if(isAdministrator)
                    admins.push(temp);
            }
            return res.status(200).json(admins);
        } catch(error){
            return res.status(500).json({ message: "Server Error" })
        }   
    },
    postAddAdmin: async(req, res) => {
        try{
            const email = req.body.email;
            const flag = await UserService.updateAdministratorUser(email, true);
            if(flag)
                return res.status(200).json({ message: "Admin added successfully! "});
        } catch(error){
            return res.status(500).json({ message: "Server Error" });
        }

    },
    postRemoveAdmin: async(req, res) => {
        try{
            const email = req.body.email;
            const flag = await UserService.updateAdministratorUser(email, false);
            if(flag)
                return res.status(200).json({ message: "Admin removed successfully! "});
        } catch(error){
            return res.status(500).json({ message: "Server Error" });
        }
    }
};

export default adminController;