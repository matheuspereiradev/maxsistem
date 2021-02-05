module.exports={
    render(sprint){
        let dtTermino = "";
        let status;
        if(sprint.sprintDtFechada != null){
            dtTermino = sprint.sprintDtFechada;
            status = "FINALIZADA";
        }else{
            status = "ABERTA";
        }
        return {
            sprintId:sprint.sprintId,
            sprintTitulo:sprint.sprintTitulo,
            sprintInicio:sprint.sprintInicio,
            sprintFimEsperado:sprint.sprintFimEsperado,
            sprintObjetivo:sprint.sprintObjetivo,
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