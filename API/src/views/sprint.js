module.exports={
    render(sprint){
        let dtTermino = "";
        let UsuarioFechou = "";
        let status;
        if(sprint.dtFechada != null){
            dtTermino = sprint.dtFechada;
            status = "FINALIZADA";
        }else{
            status = "ABERTA";
        }

        if(sprint.idUsuarioFechou != null){
            UsuarioFechou = sprint.idUsuarioFechou;
        }

        return {
            id:sprint.id,
            titulo:sprint.dsTitulo,
            inicio:sprint.dtInicio,
            terminoPrevisto:sprint.dtFim,
            objetivo:sprint.dsObjetivo,
            status:status,
            dataTermino:dtTermino,
            usuarioFinalizou:UsuarioFechou
            
        }
    },

    renderMany(sprints){
        return sprints.map(s=>this.render(s))
    }


}