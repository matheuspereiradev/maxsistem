const {Router} = require('express');
const sprint = require('../controller/sprint')


const routes = Router();

routes.get('/all',sprint.getSprint);
routes.get('/find/:id',sprint.getSprint);

module.exports = routes;