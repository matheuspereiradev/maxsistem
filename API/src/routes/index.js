const {Router} = require('express');
const routesSprint = require('./routesSprints')

const routes = Router();

routes.get('/test',(req,res)=>{
    res.json({mensagem:"working"})
});

routes.use('/sprint',routesSprint);

module.exports = routes;
