const {Router} = require('express');


const routes = Router();

routes.get('/',(req,res)=>{
    res.json({mensagem:"funcionando"})
});

module.exports = routes;