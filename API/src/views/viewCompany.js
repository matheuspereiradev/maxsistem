module.exports={
    render(company){
        
        return {        
            companyId:company.companyId,
            companyName:company.companyName,
            
        }
    },

    renderMany(users){
        return users.map(this.render) //return sprints.map(s=>this.render(s))
    }
}