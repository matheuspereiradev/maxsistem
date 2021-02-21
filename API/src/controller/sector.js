const modelSector = require('../models/sector');
const viewSector = require('../views/viewSector');


module.exports = {
    async getSector(req,res, next){
        try {
            
            const {id} = req.params;
            const sector = await modelSector.getSector(id);
            const renderSector = viewSector.renderMany(sector);

            return res.json(renderSector);

        } catch (error) {
            next(error)
        }
    }

}