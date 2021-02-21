
const mySQL = require('./database/config');

const columnsCompany = [
      'c.nmEmpresa as companyName'
     ,'c.id as companyId' 
];

module.exports = {
    async getCompany(id){
        let filtro = {};
        if (id!==undefined) {
            filtro = {
                ...filtro,
                "c.id":id
            }
        }

        const companyList = await mySQL
            .select(...columnsCompany)
            .from('empresa as c')
            .where(filtro);

        return companyList;
    },

};