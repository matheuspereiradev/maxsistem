module.exports={
    render(sprint){
        let dtTermino = "";
        let status;
        if(sprint.dtFechada != null){
            dtTermino = sprint.dtFechada;
            status = "FINALIZADA";
        }else{
            status = "ABERTA";
        }

        return {
            id:sprint.id,
            titulo:sprint.dsTitulo,
            inicio:sprint.dtInicio,
            terminoPrevisto:sprint.dtFim,
            objetivo:sprint.dsObjetivo,
            status:status,
            dataTermino:dtTermino
            
        }
    },

    renderMany(sprints){
        return sprints.map(s=>this.render(s))
    },

    renderDetails(sprint){
        let dtTermino = "";
        let status;
        if(sprint.dtFechada != null){
            dtTermino = sprint.dtFechada;
            status = "FINALIZADA";
        }else{
            status = "ABERTA";
        }

        return {
            id:sprint.id,
            titulo:sprint.dsTitulo,
            inicio:sprint.dtInicio,
            terminoPrevisto:sprint.dtFim,
            objetivo:sprint.dsObjetivo,
            status:status,
            dataTermino:dtTermino
            
        }
    }


}