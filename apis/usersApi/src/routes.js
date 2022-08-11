const { Router } = require('express')
const AdminController = require('./app/Controllers/AdminController')

const UserController = require('./app/Controllers/UserController')
const VideoController = require('./app/Controllers/VideoController')

const routes = new Router()


routes.get('/users', UserController.getUsers)
routes.post('/users', UserController.postUser)
routes.put('/users', UserController.editUser)
routes.delete('/users', UserController.deleteUser)
routes.post('/users/login', UserController.loginUser)
routes.post('/users/auth', UserController.authUser)
routes.get('/courses', AdminController.getCourses)
routes.post('/courses', AdminController.postCourse)
routes.post('/upload', VideoController.postUpload)

module.exports = routes