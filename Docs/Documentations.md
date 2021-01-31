# TIPOS DE USUÁRIO

- **1** - Cliente funcionário
- **2** - Cliente Gestor
- **3** - Administrador do sistema(SUPORTE)
- **4** - Desenvolvedor
- **5** - Lançador versão
- **6** - Tester
- **7** - Gestor de equipe de desenvolvimento
- **8** - PO

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
  id,
  titulo
  inicio
  terminoPrevisto
  objetivo
  status (ABERTA||FINALIZADA)
  dataTermino
}]
```
### **BASEURL/sprint/find/:id**
```
REQUEST
{
  
}

RESPONSE
{
  id,
  titulo
  inicio
  terminoPrevisto
  objetivo
  status (ABERTA||FINALIZADA)
  dataTermino
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

RESPONSE 500
{
  error_mensage
}
```

### **BASEURL/sprint/delete/:id**
```
REQUEST
{

}

RESPONSE 200
{
  success_mensage
}

RESPONSE 500
{
  error_mensage
}
```