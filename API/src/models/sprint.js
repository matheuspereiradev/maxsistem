
const mySQL = require('./database/config');

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
    }
};