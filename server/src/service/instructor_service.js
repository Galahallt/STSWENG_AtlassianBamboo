// get Instructor model in model folder
import Instructor from '../model/Instructor.js';

// create instructor receipt model that contains methods for rating receipt data manipulation
const instructorService = {
  // this method retrieves and returns a specific instructor
  getProf: async (data) => Instructor.findOne(data),
  // this method retrieves and returns all instructors from the database
  getAllProfs: async () =>
    Instructor.find({}).sort({ createdAt: 'descending' }),
  // this method adds a new instructor to the database
  addProf: async (prof) => {
    const newProf = new Instructor({
      id: prof.id,
      lastName: prof.lastName,
      firstName: prof.firstName,
      email: prof.email,
      college: prof.college,
      department: prof.department,
      courses: prof.courses,
    });
    return newProf.save();
  },
  updateRating: async (data, update) =>
    Instructor.findOneAndUpdate({ instructorID: data.profID }, update),
  addProfReview: async (instructorID, reviewID) =>
    Instructor.updateOne(
      { id: instructorID },
      { $addToSet: { reviews: reviewID } }
    ),
};

export default instructorService;
