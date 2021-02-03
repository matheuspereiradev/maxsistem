module.exports={
    render(backlog){
        return {
            id:backlog.id,
            titulo:backlog.dsTitulo,
            dominio:backlog.dsDominio,
            obs:backlog.dsObservacao,
            pontosValor:backlog.ptValor,
            pontosTrabalho:backlog.ptTrabalho,
            minutosEstimados:backlog.mnEstimados,
            link:backlog.dsLink,
            ticket:backlog.idTicket,
            status:backlog.nmStatusBacklog,
            responsavel:backlog.nmUsuario,
            idSprint:backlog.idSprint,
            documentacao:{
                scripts:backlog.dsScripts,
                forms:backlog.dsForms,
                testes:backlog.dsTestes,
                requisitos:backlog.dsRequisitos
            },
            datas:{
                conclusao:backlog.dtConcluido,
                aprovado:backlog.dtAprovado,
                homologado:backlog.dtHomologado,
                entregue:backlog.dtEntregue
            },
            tranferencia:{
                tranferidoDe:backlog.idBacklogOriginal,
                tranferidoEm:backlog.dtTransferido
            }
            
        }
    },

    renderMany(backlog){
        return backlog.map(b=>this.render(b))
    },

}