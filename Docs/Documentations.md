# TIPOS DE USUÁRIO

- **1** - Cliente (funcionário||gestor)
- **2** - Operador

# CHAMADOS

## Status do chamado

- **NOVO** - Uma solicitação que ainda não passou pela trigem da equipe técnica responsável
- **EM ANDAMENTO** - Chamado que passou pela triagem e está como a fazer para equipe de desenvolvimento
- **PENDENTE** - Aguardando posição do cliente sobre alguma pendência
- **CONCLUIDO** - Feito pela equipe de desenvolvimento e entregue para homologação
- **FINALIZADO** - Homologado pelo cliente que teve sua solicitação atendida
- **REABERTO** - Entregue ao cliente porém não atendeu às suas necessidades
- **EM VOTAÇÃO** - Em votação no fórum
- **INDEFERIDO** - Solicitação não será feita
- **DEFERIDO** - Solicitação aprovada pelo PO


## Classificacao do chamado

- **TARJA PRETA**  
- **CRITICO**  
- **URGENTE**
- **IMPORTANTE**
- **ERRO**
- **DUVIDA**
- **MELHORIA**
- **MANIPULAÇÃO DE DADOS**


# BACKLOG

## STATUS DO BACKLOG

- **ABERTO**  
- **EM ANDAMENTO**  
- **CONCLUIDO**  
- **AGUARDANDO CORREÇÃO**  
- **APROVADO**  
- **AGUARDANDO ENTREGA**  
- **ENTREGUE**  
- **IMPEDIDO**  
- **TRANSFERIDO**  

# ROTAS

## SPRINT

### **BASEURL/sprint/all**
```
REQUEST
{
  
}

RESPONSE
[{
  sprintId,
  sprintTitulo,
  sprintInicio,
  sprintFimEsperado,
  sprintObjetivo,
  status (ABERTA||FINALIZADA)
  sprintDtFechada
}]
```
### **BASEURL/sprint/find/:id**
```
REQUEST
{
  
}

RESPONSE
{
  sprintId,
  sprintTitulo,
  sprintInicio,
  sprintFimEsperado,
  sprintObjetivo,
  status (ABERTA||FINALIZADA)
  sprintDtFechada
}
```

### **BASEURL/sprint/register**
```
REQUEST
{
  titulo
  objetivo
  dataInicio
  dataFim
}

RESPONSE 200
{
  success_mensage
}


```

### **BASEURL/sprint/edit/{id}**
```
REQUEST
{
  titulo
  objetivo
  dataInicio
  dataFim
}

RESPONSE 200
{
  success_mensage
}


```

### **BASEURL/sprint/close/{id}**
```
REQUEST
{
	usuario
}

RESPONSE 200
{
  success_mensage
}
```

### **BASEURL/sprint/delete/{id}**
```
REQUEST
{

}

RESPONSE 200
{
  success_mensage
}


```

### **BASEURL/sprint/details/{id}** //id é opcional

```
[{
    sprintId,
    sprintTitulo,
    sprintInicio,
    sprintFimEsperado,
    sprintDtFechada,
    sprintObjetivo,
    backlogs: [
      {
        backlogId,
        backlogTitulo,
        backlogDominio,
        backlogObs,
        backlogValor,
        backlogPtTrabalho,
        backlogMnEstimando,
        backlogScripts,
        backlogForms,
        backlogTestes,
        backlogRequisitos,
        backlogIdSprint,
        backlogDtConcluido,
        backlogDtAprovado,
        backlogDtHomologado,
        backlogDtEntregue,
        backlogOriginal,
        backlogLink,
        backlogticket,
        backlogStatus,
        backlogResponsavel
      }
    ]
  }]
```