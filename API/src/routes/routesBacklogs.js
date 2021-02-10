const {Router} = require('express');
const backlog = require('../controller/backlog')


const routes = Router();

routes.post('/register',backlog.registerBacklog);

module.exports = routes;