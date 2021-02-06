
const mySQL = require('./database/config');

module.exports = {
    async getSprint(id){
        try{
            let filtro;
            if (id===null)
                filtro = {"s.id":id,"s.dtExcluiu":null}
            else
                filtro = {'s.dtExcluiu':null}
            const sprintList = await mySQL.select('s.id as sprintId               '
                                                ,'s.dsTitulo as  sprintTitulo    '
                                                ,'s.dtInicio as sprintInicio     '
                                                ,'s.dtFim as sprintFimEsperado   '
                                                ,'s.dtFechada as sprintDtFechada '
                                                ,'s.dsObjetivo as sprintObjetivo '
                                                ).from('sprint as s')
                                                .where(filtro);
            return sprintList;
        }catch(erro){
            return erro;
        }
    }
};