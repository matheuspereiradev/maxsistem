module.exports={
    render(user){
        const isCliente=!!user.userIsClient
        const isManager=!!user.userIsManager
        
        return {        

            userId:user.userID,
            userName:user.userName,
            userEmail:user.userEmail,
            userTelefone:user.userTelefone,
            userIsClient:isCliente,
            userIsManager:isManager,
            userCompany:user.userCompany,
            userSector:user.userSector,
        }
    },

    renderMany(users){
        return users.map(this.render) //return sprints.map(s=>this.render(s))
    }
}