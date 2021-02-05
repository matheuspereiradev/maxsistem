const modelSprint = require('../models/sprint')

module.exports = {
    async getSprint(req,res){

        const {id} = req.params;
  
        const sprints = await modelSprint.getSprint(id);

        return sprints;
        /*const orfanato = await orfanatosRepository.findOneOrFail(id,{
          relations:['imagens']
        })
        return res.json(orfanatoView.render(orfanato))//chama a view pq ela vai tratar como eses dados devem ser retornados*/
      }
}