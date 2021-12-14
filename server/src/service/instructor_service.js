// get Instructor model in model folder
import Instructor from '../model/Instructor.js';

// get Tag model in model folder
import Tag from '../model/Tag.js';

// get Rate model in model folder
import Rate from '../model/Rate.js';

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
  updateRating: async (instructorID, update) =>
    Instructor.findOneAndUpdate({ instructorID: instructorID }, update),
};

export default instructorService;
