const {Router} = require('express');
const backlog = require('../controller/backlog');
const { route } = require('./routesSprints');


const routes = Router();

routes.post('/register',backlog.registerBacklog);
routes.delete('/delete/:id',backlog.deleteBacklog);
routes.put('/edit/:id',backlog.editBacklog)

module.exports = routes;