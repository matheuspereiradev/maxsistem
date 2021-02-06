const {Router} = require('express');
const sprint = require('../controller/sprint')


const routes = Router();

routes.get('/all',sprint.getSprint);
routes.get('/find/:id',sprint.getSprint);
routes.delete('/delete/:id',sprint.deleteSprint)

module.exports = routes;