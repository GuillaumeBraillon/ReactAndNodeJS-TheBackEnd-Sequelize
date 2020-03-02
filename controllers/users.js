const UsersModel = require('../models').Users;

module.exports = {

  //Show the list of all 
  list(req, res) {
    console.log('Call list All Users');
    return UsersModel
      .findAll()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },

  create(req, res) {
    console.log('Call create One User');
    return UsersModel
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        available: req.body.available,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    console.log('Call retrieve user n°'+req.params.userId);
    return UsersModel
      .findByPk(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    console.log('Call update user n°'+req.params.userId);
    return UsersModel
    .findByPk(req.params.userId)
      .then(user => {
        //console.log(user);
        if (!user) {
          console.log('User n°'+ req.params.userId +' Not Found');
          return res.status(404).send({
            message: 'User n°'+ req.params.userId +' Not Found',
          });
          
        }

        return user
          .update(req.body, { fields: Object.keys(req.body) })
          .then(updatedUser => res.status(200).send(updatedUser),)
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    console.log('Call destroy user n°'+req.params.userId);
    return UsersModel
    .findByPk(req.params.userId)
      .then(user => {
        console.log(user);
        if (!user) {
          return res.status(404).send({
            message: 'User n°'+ req.params.userId +' Not Found',
          });
        }

        return user
          .destroy()
          .then(() => res.status(200).send({ message: 'User n°'+ req.params.userId +' deleted successfully.' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};