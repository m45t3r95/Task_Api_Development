const express = require('express');
const router = express.Router();
const UserService = require("../services/users_service");

router.post('/user', UserService.createUser);

router.get('/users', UserService.readUsers);

router.patch('/user/:userId', UserService.updateUser);

router.delete('/user/:userId',UserService.deleteUser);

module.exports = router;