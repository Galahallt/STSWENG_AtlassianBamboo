const indexController = {
  // index controller method to login user
  postLogin: async (req, res) => {
    try {
      console.log(req.body.getBasicProfile());
      return res.status(204).json({ message: 'login' });
    } catch (error) {
      console.log(error);
    }
  },
};

// export index controller
export default indexController;
