const express = require('express');
const router = express.Router();
const { UserController } = require('./controller');

module.exports.UsersAPI = (app) => {
    router
        .get('/', UserController.getUsers)
        .get('/:id', UserController.getuser)
        .post('/', UserController.createUser);

    // Registra el router en la aplicación utilizando app.use()
    app.use('/api/users', router);
};