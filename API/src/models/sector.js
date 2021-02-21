
const mySQL = require('./database/config');

const columnsSector = [
      's.nmSetor as sectorName'
     ,'s.id as sectorId' 
];

module.exports = {
    async getSector(id){
        let filtro = {};
        if (id!==undefined) {
            filtro = {
                ...filtro,
                "s.id":id
            }
        }

        const sectorList = await mySQL
            .select(...columnsSector)
            .from('setores as s')
            .where(filtro);

        return sectorList;
    },

};