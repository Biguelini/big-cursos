const { Router } = require('express')

const UserController = require('./app/Controllers/UserController')

const routes = new Router()


routes.get('/users', UserController.getUsers)
routes.post('/users', UserController.postUser)
routes.patch('/users', UserController.editUser)
routes.delete('/users', UserController.deleteUser)
routes.post('/users/login', UserController.loginUser)

module.exports = routes