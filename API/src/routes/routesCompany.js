const {Router} = require('express');
const company = require('../controller/company')


const routes = Router();

routes.get('/all',company.getCompany);

module.exports = routes;