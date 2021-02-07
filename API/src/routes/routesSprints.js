const {Router} = require('express');
const sprint = require('../controller/sprint')


const routes = Router();

routes.get('/all',sprint.getSprint);
routes.get('/find/:id',sprint.getSprint);
routes.get('/details',sprint.getDetails);
routes.get('/details/:id',sprint.getDetails);
routes.delete('/delete/:id',sprint.deleteSprint);
routes.post('/register',sprint.registerSprint);
routes.put('/edit/:id',sprint.editSprint);

module.exports = routes;