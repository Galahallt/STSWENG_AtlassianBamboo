import sinon from 'sinon';
import indexController from '../../controller/index_controller.js';
import UserService from '../../service/user_service.js';
// import mockDB from './mockDB.js';

/**
 * Connect to a new in-memory database before running any tests.
 */
// beforeAll(async () => await mockDB.connect());

/**
 * Clear all test data after every test.
 */
// afterEach(async () => await mockDB.clearDatabase());

/**
 * Remove and close the db and server.
 */
// afterAll(async () => await mockDB.closeDatabase());

describe('Post controller', () => {
  // Setup the responses
  const mockReq = {
    body: {
      id: 'askdjasldkj112',
      fullName: 'Keil Finez',
      givenName: 'Keil Christopher',
      familyName: 'Finez',
      email: 'keilFinez@dlsu.edu.ph',
      imgURL: 'asdasdwqeq',
      isAdministrator: true,
    },
  };

  // let error = new Error({ error: 'Some error message' });

  let res = {};

  let expectedResult;

  describe('create', () => {
    let createUserStub;

    beforeEach(() => {
      // before every test case setup first
      res = {
        json: sinon.spy(),
        status: sinon.stub().returns({ end: sinon.spy() }),
      };
    });

    afterEach(() => {
      // executed after the test case
      createUserStub.restore();
    });

    it("should return 'status: 200' where account is created/added", () => {
      // Arrange
      expectedResult = {
        body: {
          id: 'askdjasldkj112',
          fullName: 'Keil Finez',
          givenName: 'Keil Christopher',
          familyName: 'Finez',
          email: 'keilFinez@dlsu.edu.ph',
          imgURL: 'asdasdwqeq',
          isAdministrator: true,
        },
      };

      createUserStub = sinon
        .stub(UserService, 'addUser')
        .yields(expectedResult.body);

      // Act
      indexController.postLogin(mockReq, res);

      // Assert
      sinon.assert.calledWith(res.status, 200);
      // sinon.assert.calledWith(res.json, sinon.match({ title: req.body.title }));
      // sinon.assert.calledWith(
      //   res.json,
      //   sinon.match({ content: req.body.content })
      // );
      // sinon.assert.calledWith(
      //   res.json,
      //   sinon.match({ author: req.body.author })
      // );
    });

    // Error Scenario
    // it("should return status 500 on server error", () => {
    //   // Arrange
    //   createUserStub = sinon.stub(PostModel, "createPost").yields(error);

    //   // Act
    //   PostController.create(req, res);

    //   // Assert
    //   sinon.assert.calledWith(PostModel.createPost, req.body);
    //   sinon.assert.calledWith(res.status, 500);
    //   sinon.assert.calledOnce(res.status(500).end);
    // });
  });

  describe('update', () => {});

  describe('findPost', () => {});
});

// // mock request object
// const mockReq = (user) => {
//   return {
//     body: {
//       fullName: user.fullName,
//       givenName: user.givenName,
//       familyName: user.familyName,
//       imageURL: user.imageURL,
//       email: user.email,
//       accessToken: user.accessToken,
//     },
//   };
// };

// // mock result object
// const mockRes = () => {
//   const res = {};
//   res.status = jest.fn().mockReturnValue(res);
//   res.json = jest.fn().mockReturnValue(res);
//   return res;
// };

// /**
//   User test suite.
//  /
// describe('invalid DLSU email', () => {
//   /**
//     Tests wrong user email in logging in
//    /
//   test('cannot login due to invalid DLSU e-mail', async () => {
//     const req = mockReq({
//       fullName: 'Keil Finez',
//       givenName: 'Keil Christopher',
//       familyName: 'Finez',
//       imageURL: 'asdasdwqeq',
//       email: 'keilFinez@gmail.com',
//       accessToken: 'asdasdasdasd',
//     });

//     const res = mockRes();

//     await indexController.postLogin(req, res);
//     expect(res.status).toHaveBeenCalledWith(400);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Not DLSU account!' });
//   });
// });

// describe('valid DLSU email', () => {
//   /**
//     Tests that a valid user can be created through the userService without throwing any errors.
//    /
//   test('can login to profs to pick web application', async () => {
//     const req = mockReq({
//       fullName: 'Keil Finez',
//       givenName: 'Keil Christopher',
//       familyName: 'Finez',
//       imageURL: 'asdasdwqeq',
//       email: 'keilFinez@dlsu.edu.ph',
//       accessToken: 'asdasdasdasd',
//     });

//     const res = mockRes();

//     await indexController.postLogin(req, res);
//     expect(res.status).toHaveBeenCalledWith(200);
//   });
// });
