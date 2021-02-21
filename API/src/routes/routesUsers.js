const {Router} = require('express');
const user = require('../controller/user')


const routes = Router();

routes.get('/all',user.getUser);
routes.post('/register',user.registerUser)

module.exports = routes;