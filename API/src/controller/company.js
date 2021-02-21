const modelCompany = require('../models/company');
const viewCompany = require('../views/viewCompany');


module.exports = {
    async getCompany(req,res, next){
        try {
            
            const {id} = req.params;
            const company = await modelCompany.getCompany(id);
            const renderCompany = viewCompany.renderMany(company);

            return res.json(renderCompany);

        } catch (error) {
            next(error)
        }
    }

}