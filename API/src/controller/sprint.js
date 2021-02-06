const modelSprint = require('../models/sprint');
const viewSprints = require('../views/viewSprint');
//const dates = require('../utils/dates');


module.exports = {
    async getSprint(req,res, next){
        const {id} = req.params;
        const sprints = await modelSprint.getSprint(id);
        return res.json(viewSprints.renderMany(sprints));
    }
}