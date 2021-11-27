import User from '../model/User.js';

const UserService = {
  // this method retrieves and returns a specific user
  getUser: async (data) => User.findOne(data),
  getAllAdmins: async() => User.find({isAdministrator: true}),
  // this method adds a new user to the database
  addUser: async (user) => {
    const newUser = new User({
      fullName: user.fullName,
      givenName: user.givenName,
      familyName: user.familyName,
      email: user.email,
    });
    // add new user data to 'User' Collection
    return newUser.save();
  },
  
  updateAdministratorUser: async(email, flag) => User.updateOne({email: email}, {$set: {isAdministrator: true}}, (e,s)=>{})

      
};

// export user service object
export default UserService;
