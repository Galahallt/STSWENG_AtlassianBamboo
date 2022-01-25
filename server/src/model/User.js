import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // user's id
  id: {
    type: String,
    required: true,
  },
  // user's full name
  fullName: {
    type: String,
    required: true,
  },
  // user's given name
  givenName: {
    type: String,
    required: true,
  },
  // user's family name
  familyName: {
    type: String,
    required: true,
  },
  // user's email
  email: {
    type: String,
    required: true,
  },
  // user's img URL
  imgURL: {
    type: String,
    required: true,
  },
  isAdministrator: {
    type: Boolean,
    required: true,
    default: false,
  },
});

// implement user schema as user model
const userModel = mongoose.model('User', userSchema);

// export user model
export default userModel;
