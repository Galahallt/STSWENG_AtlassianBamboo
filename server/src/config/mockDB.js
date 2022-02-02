import mongoose from 'mongoose';

const mongod = new MongoMemoryServer();

/**
 * Connect to the in-memory database.
 */
const mockDB = {
  connect: async () => {
    const uri = await mongod.getUri();

    await mongoose.connect(uri);
  },

  /**
   * Drop database, close the connection and stop mongod.
   */
  closeDatabase: async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
  },

  /**
   * Remove all the data for all db collections.
   */
  clearDatabase: async () => {
    const collections = mongoose.connection.collections;

    // eslint-disable-next-line guard-for-in
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany();
    }
  },
};

export default mockDB;
