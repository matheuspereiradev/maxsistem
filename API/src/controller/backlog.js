const modelBacklog = require('../models/backlog');
//const viewUser = require('../views/viewUser');
const dates = require('../helpers/dates');


module.exports = {
    async registerBacklog(req,res, next){
        try{

            const {titulo,descricao,dominio,chamado,responsavel,pontos,valor,tempo,requisitos,sprint} = req.body;
            const backlog = {
                "dsTitulo":dominio,
                "dsDominio":titulo,
                "idTicket":chamado,
                "idResponsavel":responsavel,
                "ptTrabalho":pontos,
                "ptValor":valor,
                "mnEstimados":tempo,
                "dsObservacao":descricao,
                "dsRequisitos":requisitos,
                "idSprint":sprint,
                "idStatus":1
            };
            const response = await modelBacklog.registerBacklog(backlog);

            return res.json(response);
        }catch(error){
            next(error)
        }
    },

    async deleteBacklog(req,res,next){
        try {
            const {id}=req.params;
            const response= await modelBacklog.deleteBacklog(id);
            return res.json(response);

        } catch (error) {
            next(error)
        }
    },

}