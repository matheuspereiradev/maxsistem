const {Router} = require('express');
const knex = require('../../database/config');
const viewSprints = require('../../views/sprint')

const routesSprint = Router();


routesSprint.get('/all',async (req,res)=>{
    try{
        const sprintList = await knex.select('*').from('sprint');
        return res.status(200).json(viewSprints.renderMany(sprintList));
    }catch(erro){
        return res.status(500).json({"error_mensage":erro});
    }
});

/*
routesSprint.get('/find/:id',async (req,res)=>{
    
    try{
        const {id}=req.params;
        const product = await knex.select('*').from('categorias').where({"id":id});
        return res.status(200).json(product);
    }catch(erro){
        return res.status(500).json({"error_mensage":erro});
    }
});*/


module.exports = routesSprint;