const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the Company API!',
  }));

  //Routes for the CRUD requests

  //CREATE http://localhost:8000/users body 	firstName,lastName,email,phoneNumber,weekAvailable
  app.post('/users', usersController.create);

  //READ All http://localhost:8000/users
  app.get('/users', usersController.list);

  //READ ONE http://localhost:8000/users/3
  app.get('/users/:userId', usersController.retrieve);

  //UPDATE http://localhost:8000/users/5 body 	firstName,lastName,email,phoneNumber,weekAvailable
  app.put('/users/:userId', usersController.update);

  //DELETE http://localhost:8000/users/1
  app.delete('/users/:userId', usersController.destroy);

  // For any other request method on users, we're going to return "Method Not Allowed"
  app.all('/', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
    }));

};