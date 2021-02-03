const {Router} = require('express');
const knex = require('../database/config');
const viewSprints = require('../views/sprint')
const dates = require('../utils/dates')

const routesSprint = Router();


routesSprint.get('/all',async (req,res)=>{
    try{
        const sprintList = await knex.select('s.id as sprintId               '
                                            ,'s.dsTitulo as  sprintTitulo    '
                                            ,'s.dtInicio as sprintInicio     '
                                            ,'s.dtFim as sprintFimEsperado   '
                                            ,'s.dtFechada as sprintDtFechada '
                                            ,'s.dsObjetivo as sprintObjetivo '
                                            ).from('sprint as s')
                                            .where('s.dtExcluiu',null);
        return res.status(200).json(viewSprints.renderMany(sprintList));
    }catch(erro){
        return res.status(500).json({"error_mensage":erro});
    }
});

routesSprint.get('/find/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const sprintList = await knex.select('s.id as sprintId               '
                                            ,'s.dsTitulo as  sprintTitulo    '
                                            ,'s.dtInicio as sprintInicio     '
                                            ,'s.dtFim as sprintFimEsperado   '
                                            ,'s.dtFechada as sprintDtFechada '
                                            ,'s.dsObjetivo as sprintObjetivo '
                                            ).from('sprint as s')
                                             .where({"s.id":id,"s.dtExcluiu":null});
        return res.status(200).json(viewSprints.renderMany(sprintList));
    }catch(erro){
        return res.status(500).json({"error_mensage":erro});
    }
});

routesSprint.get('/details/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const sprintList = await knex.select('s.id as sprintId               '
                                            ,'s.dsTitulo as  sprintTitulo    '
                                            ,'s.dtInicio as sprintInicio     '
                                            ,'s.dtFim as sprintFimEsperado   '
                                            ,'s.dtFechada as sprintDtFechada '
                                            ,'s.dsObjetivo as sprintObjetivo ')
                                .from('sprint as s')
                                .where({"s.id":id,"s.dtExcluiu":null});
                                               
        const backlogList = await knex.select('b.id as backlogId                     '
                                             ,'b.dsTitulo as backlogTitulo           '
                                             ,'b.dsDominio as backlogDominio         '  
                                             ,'b.dsObservacao as backlogObs          '
                                             ,'b.ptValor as backlogValor             '
                                             ,'b.ptTrabalho as backlogPtTrabalho     '
                                             ,'b.mnEstimados as backlogMnEstimando   '
                                             ,'b.dsScripts as backlogScripts         '
                                             ,'b.dsForms as backlogForms             ' 
                                             ,'b.dsTestes as backlogTestes           ' 
                                             ,'b.dsRequisitos as backlogRequisitos   '
                                             ,'b.idSprint as backlogIdSprint         '
                                             ,'b.dtConcluido as backlogDtConcluido   ' 
                                             ,'b.dtAprovado as backlogDtAprovado     '
                                             ,'b.dtHomologado as backlogDtHomologado '
                                             ,'b.dtEntregue as backlogDtEntregue     '
                                             ,'b.idBacklogOriginal as backlogOriginal'
                                             ,'b.dsLink as backlogLink               '
                                             ,'b.idTicket as backlogticket           '
                                             ,'sb.nmStatusBacklog as backlogStatus   '
                                             ,'u.nmUsuario as backlogResponsavel     '                                             
                                )
                                .from('backlog as b')
                                .leftJoin('statusbacklog as sb', 'sb.id', 'b.idStatus')
                                .leftJoin('usuarios as u','u.id','b.idResponsavel')
                                .where({"b.idSprint":id,"b.dtExcluiu":null});

                              
        return res.status(200).json(viewSprints.renderDetails(sprintList,backlogList));
    }catch(erro){
        return res.status(500).json({"error_mensage":erro});
    }
});

routesSprint.get('/details',async (req,res)=>{
    try{
        const {id}=req.params;
        const sprintList = await knex.select('s.id as sprintId               '
                                            ,'s.dsTitulo as  sprintTitulo    '
                                            ,'s.dtInicio as sprintInicio     '
                                            ,'s.dtFim as sprintFimEsperado   '
                                            ,'s.dtFechada as sprintDtFechada '
                                            ,'s.dsObjetivo as sprintObjetivo ')
                                .from('sprint as s')
                                .where({"s.dtExcluiu":null});
                                               
        const backlogList = await knex.select('b.id as backlogId                     '
                                             ,'b.dsTitulo as backlogTitulo           '
                                             ,'b.dsDominio as backlogDominio         '  
                                             ,'b.dsObservacao as backlogObs          '
                                             ,'b.ptValor as backlogValor             '
                                             ,'b.ptTrabalho as backlogPtTrabalho     '
                                             ,'b.mnEstimados as backlogMnEstimando   '
                                             ,'b.dsScripts as backlogScripts         '
                                             ,'b.dsForms as backlogForms             ' 
                                             ,'b.dsTestes as backlogTestes           ' 
                                             ,'b.dsRequisitos as backlogRequisitos   '
                                             ,'b.idSprint as backlogIdSprint         '
                                             ,'b.dtConcluido as backlogDtConcluido   ' 
                                             ,'b.dtAprovado as backlogDtAprovado     '
                                             ,'b.dtHomologado as backlogDtHomologado '
                                             ,'b.dtEntregue as backlogDtEntregue     '
                                             ,'b.idBacklogOriginal as backlogOriginal'
                                             ,'b.dsLink as backlogLink               '
                                             ,'b.idTicket as backlogticket           '
                                             ,'sb.nmStatusBacklog as backlogStatus   '
                                             ,'u.nmUsuario as backlogResponsavel     '                                             
                                )
                                .from('backlog as b')
                                .leftJoin('statusbacklog as sb', 'sb.id', 'b.idStatus')
                                .leftJoin('usuarios as u','u.id','b.idResponsavel')
                                .where({"b.dtExcluiu":null});

                              
        return res.status(200).json(viewSprints.renderDetails(sprintList,backlogList));
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