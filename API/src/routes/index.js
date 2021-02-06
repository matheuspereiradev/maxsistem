const {Router} = require('express');
const sprint = require('../controller/sprint')


const routes = Router();

routes.get('/',(req,res)=>{
    res.json({mensagem:"funcionando"})
});

routes.get('/sprint',sprint.getSprint);

module.exports = routes;