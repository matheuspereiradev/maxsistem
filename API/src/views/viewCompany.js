module.exports={
    render(company){
        
        return {        
            companyId:company.companyId,
            companyName:company.companyName,
            
        }
    },

    renderMany(company){
        return company.map(this.render) //return sprints.map(s=>this.render(s))
    }
}