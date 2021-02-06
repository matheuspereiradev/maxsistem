
const mySQL = require('./database/config');
//const viewSprints = require('../views/sprint');
//const dates = require('../utils/dates');


module.exports = {
    async getSprint(id){
        try{
            const sprintList = await mySQL.select('s.id as sprintId               '
                                                ,'s.dsTitulo as  sprintTitulo    '
                                                ,'s.dtInicio as sprintInicio     '
                                                ,'s.dtFim as sprintFimEsperado   '
                                                ,'s.dtFechada as sprintDtFechada '
                                                ,'s.dsObjetivo as sprintObjetivo '
                                                ).from('sprint as s')
                                                .where('s.dtExcluiu',null);
            return sprintList;
        }catch(erro){
            return erro;
        }
    }
};