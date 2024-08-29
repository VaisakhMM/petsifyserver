const usercontroller = require('../Controllers/userController');
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const projectController = require('../Controllers/projectController')
const multerConfig = require('../Middlewares/multerMiddleware')
const contactController = require('../Controllers/contactController')


const express = require('express')

const router = new express.Router();




router.post('/user/register',usercontroller.register)

router.post('/user/login',usercontroller.login)

router.post('/project/add',jwtMiddleware,multerConfig.single('image'),projectController.addProject)

router.get('/project/main-project',projectController.getMainProject)

router.post('/user/user-delivery',jwtMiddleware,contactController.addDelivery)

router.get('/project/user-project',jwtMiddleware,projectController.getUserProject)

router.delete('/project/remove/:id',jwtMiddleware,projectController.deleteUserProject)












module.exports= router;