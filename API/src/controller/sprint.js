const modelSprint = require('../models/sprint');
const viewSprints = require('../views/viewSprint');
//const dates = require('../utils/dates');


module.exports = {
    async getSprint(req,res, next){
        try {
            
            const {id} = req.params;
            const sprints = await modelSprint.getSprint(id);
            const renderSprints = viewSprints.renderMany(sprints);

            return res.json(renderSprints);

        } catch (error) {
            next(error)
        }
    }
}