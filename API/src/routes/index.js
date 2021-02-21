const {Router} = require('express');
const routesSprint = require('./routesSprints');
const routesUsers = require('./routesUsers');
const routesBacklog = require('./routesBacklogs');
const routeCompany = require('./routesCompany')

const routes = Router();

routes.get('/test',(req,res)=>{
    res.json({mensagem:"working"})
});

routes.use('/sprint',routesSprint);
routes.use('/user',routesUsers);
routes.use('/backlog',routesBacklog);
routes.use('/company',routeCompany);

// Rota não encontrada
routes.use("/", function (req, res, next) {
    next({
        status: 400,
        message: 'Rota não encontrada'
    })
});

// Tratando envio de erros
routes.use(function (err, req, res, next) {
    return res.status(err.status || 500).json({ message: err.message });
});

module.exports = routes;
