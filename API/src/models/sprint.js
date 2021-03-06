
const mySQL = require('./database/config');
const dates = require('../helpers/dates');

const columnsSprint = [
      's.id as sprintId               '
    , 's.dsTitulo as  sprintTitulo    '
    , 's.dtInicio as sprintInicio     '
    , 's.dtFim as sprintFimEsperado   '
    , 's.dtFechada as sprintDtFechada '
    , 's.dsObjetivo as sprintObjetivo '
];

module.exports = {
    async getSprint(id){
        let filtro = { "s.dtExcluiu":null };
        if (id!==undefined) {
            filtro = {
                ...filtro,
                "s.id":id
            }
        }

        const sprintList = await mySQL
            .select(...columnsSprint)
            .from('sprint as s')
            .where(filtro);

        return sprintList;
    },

    async closeSprint(sprint){
        await mySQL('sprint').where({"id":sprint.id}).update(sprint);
        return {"success_mensage":"success closed"};
    },

    async deleteSprint(id){
        const sprint = {
            "dtExcluiu":dates.getFormatDateUS()
        };
        
        await mySQL('sprint').where({"id":id}).update(sprint);
        return {"success_mensage":"deleted with success"};
    },

    async registerSprint(sprint){
        await mySQL('sprint').insert(sprint);
        return {"success_mensage":"success insert"};
    },

    async editSprint(sprint){
        await mySQL('sprint').where({"id":sprint.id}).update(sprint);
        return {"success_mensage":"sucess updated"};
    }
};