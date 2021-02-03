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

    renderDetails(sprints,backlogs){
        /*let dtTermino = "";
        let status;
        if(sprint.sprintDtFechada != null){
            dtTermino = sprint.sprintDtFechada;
            status = "FINALIZADA";
        }else{
            status = "ABERTA";
        }
        */
        return sprints.map(s=>({
            ...s,
            backlogs:backlogs.filter(b => b.backlogIdSprint === s.sprintId)
        }));
        
    }


}