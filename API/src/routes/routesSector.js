const {Router} = require('express');
const sector = require('../controller/sector')


const routes = Router();

routes.get('/all',sector.getSector);

module.exports = routes;