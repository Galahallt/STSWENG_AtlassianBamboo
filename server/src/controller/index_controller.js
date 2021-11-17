const indexController = {
  // index controller method to login user
  postLogin: async (req, res) => {
    try {
      return res.status(204).json({ message: 'login' });
    } catch (error) {
      console.log(error);
    }
  },

  // index controller method if user fails to login
  failedLogin: async (req, res) => {
    try {
      return res.status(204).json({ message: 'fail' });
    } catch (error) {
      console.log(error);
    }
  },
};

// export index controller
export default indexController;
