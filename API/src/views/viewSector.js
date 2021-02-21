module.exports={
    render(sector){
        
        return {        
            sectorId:sector.sectorId,
            sectorName:sector.sectorName,
            
        }
    },

    renderMany(sector){
        return sector.map(this.render) //return sprints.map(s=>this.render(s))
    }
}