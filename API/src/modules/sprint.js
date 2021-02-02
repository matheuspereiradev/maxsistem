const {Router} = require('express');
const knex = require('../database/config');
const viewSprints = require('../views/sprint')
const dates = require('../utils/dates')

const routesSprint = Router();


routesSprint.get('/all',async (req,res)=>{
    try{
        const sprintList = await knex.select('*').from('sprint').where('dtExcluiu',null);
        return res.status(200).json(viewSprints.renderMany(sprintList));
    }catch(erro){
        return res.status(500).json({"error_mensage":erro});
    }
});

routesSprint.get('/find/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const sprintList = await knex.select('*').from('sprint').where({"id":id,"dtExcluiu":null});
        return res.status(200).json(viewSprints.renderMany(sprintList));
    }catch(erro){
        return res.status(500).json({"error_mensage":erro});
    }
});

routesSprint.get('/details/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const sprintList = await knex.select('*')
                                .from('sprint')
                                .leftJoin('backlog', 'backlog.idSprint','sprint.id')
                                .leftJoin('statusbacklog', 'statusbacklog.id', 'backlog.idStatus')
                                .leftJoin('usuarios','usuarios.id','backlog.idResponsavel')
                                .where({"sprint.id":id,"sprint.dtExcluiu":null,"backlog.dtExcluiu":null});
        return res.status(200).json(sprintList);
    }catch(erro){
        return res.status(500).json({"error_mensage":erro});
    }
});

routesSprint.post('/register',async (req,res)=>{
    try{
        const {titulo,objetivo,dataInicio,dataFim} = req.body;
        const sprint = {
            "dsTitulo":titulo,
            "dtInicio":dataInicio,
            "dtFim":dataFim,
            "dsObjetivo":objetivo
        };
        await knex('sprint').insert(sprint);
        return res.status(200).json({"success_mensage":"sucess insert"});
    }catch(erro){
        return res.status(500).json({"error_mensage":erro});
    }
});

routesSprint.put('/edit/:id',async (req,res)=>{
    try{
        const {id}=req.params;

        const {titulo,objetivo,dataInicio,dataFim} = req.body;

        const sprint = {
            "dsTitulo":titulo,
            "dtInicio":dataInicio,
            "dtFim":dataFim,
            "dsObjetivo":objetivo
        };
        await knex('sprint').where({"id":id}).update(sprint);
        return res.status(200).json({"success_mensage":"sucess updated"});
    }catch(erro){
        return res.status(500).json({"error_mensage":erro});
    }
});

routesSprint.delete('/delete/:id',async (req,res)=>{
    try{
        const {id}=req.params;

        const sprint = {
            "dtExcluiu":dates.getFormatDateUS()
        };
        
        await knex('sprint').where({"id":id}).update(sprint);
        return res.status(200).json({"success_mensage":"deleted with success"});
    }catch(erro){
        return res.status(500).json({"error_mensage":erro});
    }
})


module.exports = routesSprint;