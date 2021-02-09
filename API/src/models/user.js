
const mySQL = require('./database/config');

const columnsUser = [
      'u.id as userID'
     ,'u.nmUsuario as userName' 
     ,'u.dsEmail as userEmail'
     ,'u.cdTelefone as userTelefone'
     ,'u.flCliente as userIsClient'
     ,'u.flClienteGestor as userIsManager'
     ,'e.nmEmpresa as userCompany'
     ,'s.nmSetor as userSector'
];

module.exports = {
    async getUsers(id){
        let filtro = { "u.dtExcluiu":null };
        if (id!==undefined) {
            filtro = {
                ...filtro,
                "u.id":id
            }
        }

        const userList = await mySQL
            .select(...columnsUser)
            .from('usuarios as u')
            .innerJoin('empresa as e','u.idEmpresa','e.id')
            .leftJoin('setores as s','u.idSetor','s.id')
            .where(filtro);

        return userList;
    },

};