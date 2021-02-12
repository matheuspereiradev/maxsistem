
const mySQL = require('./database/config');
const dates = require('../helpers/dates');

const columnsBacklog = [
     'b.id as backlogId                     '
    ,'b.dsTitulo as backlogTitulo           '
    ,'b.dsDominio as backlogDominio         '  
    ,'b.dsObservacao as backlogObs          '
    ,'b.ptValor as backlogValor             '
    ,'b.ptTrabalho as backlogPtTrabalho     '
    ,'b.mnEstimados as backlogMnEstimando   '
    ,'b.dsScripts as backlogScripts         '
    ,'b.dsForms as backlogForms             ' 
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
];

module.exports = {
    async getBacklog(id){
        let filtro = { "b.dtExcluiu":null };

        if (id!==undefined) {
            filtro = {
                ...filtro,
                "b.id":id
            }
        }

        const backlogList = await mySQL
            .select(...columnsBacklog)
            .from('backlog as b')
            .leftJoin('statusbacklog as sb', 'sb.id', 'b.idStatus')
            .leftJoin('usuarios as u','u.id','b.idResponsavel')
            .where(filtro);

        return backlogList;
    },

    async registerBacklog(backlog){
        await mySQL('backlog').insert(backlog);
        return {"success_mensage":"success insert"};
    },

    async deleteBacklog(id){
        const backlog = {
            "dtExcluiu":dates.getFormatDateUS()
        };
        
        await mySQL('backlog').where({"id":id}).update(backlog);
        return {"success_mensage":"deleted with success"};
    },

    async editBacklog(backlog){
        await mySQL('backlog').where({"id":backlog.id}).update(backlog);
        return {"success_mensage":"sucess updated"};
    }
};