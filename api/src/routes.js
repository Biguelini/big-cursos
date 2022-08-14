const { Router } = require('express')
const AdminController = require('./app/Controllers/AdminController')

const UserController = require('./app/Controllers/UserController')
const VideoController = require('./app/Controllers/VideoController')
const storage = require('./multerConfig')
const multer = require('multer')

const routes = new Router()
const upload = multer({ storage: storage })

routes.get('/users', UserController.getUsers)
routes.post('/users', UserController.postUser)
routes.put('/users', UserController.editUser)
routes.delete('/users', UserController.deleteUser)
routes.post('/users/login', UserController.loginUser)
routes.post('/users/auth', UserController.authUser)
routes.get('/courses', AdminController.getCourses)
routes.post('/courses', upload.single('cover'), AdminController.postCourse)
routes.post('/upload', upload.single('video'), VideoController.postUpload)

module.exports = routes
