const express = require('express');
const router = express.Router();
const TaskService = require("../services/tasks_service");

router.post('/task', TaskService.createTask);

router.get('/tasks', TaskService.readTasks);

router.patch('/task/:taskId', TaskService.updateTask);

router.delete('/task/:taskId',TaskService.deleteTask);

module.exports = router;