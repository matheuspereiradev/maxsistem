const modelSprint = require('../models/sprint')

module.exports = {
    async getSprint(req,res, next){

        const {id} = req.params;
  
        const sprints = await modelSprint.getSprint(id);

        return res.json(sprints);
      }
}