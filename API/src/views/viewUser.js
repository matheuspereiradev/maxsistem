module.exports={
    render(user){
        const isCliente=!!user.userIsClient
        const isManager=!!user.userIsManager
        
        return {        
            userId:user.userID,
            userName:user.userName,
            userLogin:user.userLogin,
            userEmail:user.userEmail,
            userTelefone:user.userTelefone,
            userIsClient:isCliente,
            company:{
                userCompany:user.userCompany,
                userIdCompany:user.userIdCompany
            },
            sector:{
                userIdSector:user.userIdSector,
                userSector:user.userSector,
            },
            userIsManager:isManager
        }
    },

    renderMany(users){
        return users.map(this.render) //return sprints.map(s=>this.render(s))
    }
}