const modelSprint = require('../models/sprint');
const modelBacklog =require('../models/backlog')
const viewSprints = require('../views/viewSprint');
const dates = require('../helpers/dates');
//const dates = require('../utils/dates');


module.exports = {
    async getSprint(req,res, next){
        try {
            
            const {id} = req.params;
            const sprints = await modelSprint.getSprint(id);
            const renderSprints = viewSprints.renderMany(sprints);

            return res.json(renderSprints);

        } catch (error) {
            next(error)
        }
    },

    async getDetails(req,res,next){
        try {
            
            const {id} = req.params;
            const sprints = await modelSprint.getSprint(id);
            const backlogs = await modelBacklog.getBacklog();

            const renderSprints = viewSprints.renderDetails(sprints,backlogs);

            return res.json(renderSprints);

        } catch (error) {
            next(error)
        }
    },

    async deleteSprint(req,res,next){
        try {
            const {id}=req.params;
            const response= await modelSprint.deleteSprint(id);
            return res.json(response);

        } catch (error) {
            next(error)
        }
    },

    async closeSprint(req,res,next){
        try {
            const {id}=req.params;
            const {usuario } = req.body;
            const sprint = {
                "id":id,
                "idUsuarioFechou":usuario,
                "dtFechada":dates.getFormatDateUS()
            }
            const response = await modelSprint.closeSprint(sprint);
            return res.json(response);

        } catch (error) {
            next(error)
        }
    },

    async registerSprint(req,res,next){
        try{
            const {titulo,objetivo,dataInicio,dataFim} = req.body;
            const sprint = {
                "dsTitulo":titulo,
                "dtInicio":dataInicio,
                "dtFim":dataFim,
                "dsObjetivo":objetivo
            };
            const response = await modelSprint.registerSprint(sprint);

            return res.json(response);
        }catch(error){
            next(error)
        }
    },

    async editSprint(req,res,next){
        try{
            const {titulo,objetivo,dataInicio,dataFim} = req.body;
            const {id}=req.params;
            const sprint = {
                "id":id,
                "dsTitulo":titulo,
                "dtInicio":dataInicio,
                "dtFim":dataFim,
                "dsObjetivo":objetivo
            };
            const response = await modelSprint.editSprint(sprint);

            return res.json(response);
        }catch(error){
            next(error)
        } 
    }
}