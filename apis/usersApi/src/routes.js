const { Router } = require('express')

const UserController = require('./app/Controllers/UserController')

const routes = new Router()


routes.get('/users', UserController.getUsers)
routes.post('/users', UserController.postUser)

module.exports = routes