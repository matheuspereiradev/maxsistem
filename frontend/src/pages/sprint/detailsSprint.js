import React, { useEffect, useState } from 'react'
import '../../styles/home.css'
import TopBar from '../../components/topBarAdmin'
import LeftMenu from '../../components/leftMenuAdmin'
import Footer from '../../components/footer'
import api from '../../services/api'
import { Link, useHistory, useParams } from 'react-router-dom'
import datas from '../../utils/dates'
import { FaCog, FaEdit, FaPlus, FaTrash } from 'react-icons/fa'

export default function ListSprints(){
    
    const params = useParams();
    const {goBack} = useHistory();

    const [sprint,setSprint]=useState({});

    useEffect(()=>{ 
      api.get(`sprint/details/${params.id}`).then(sprint=>{
          setSprint(sprint.data[0]);
        })
    },[params.id])
  
    function excluirSprint(id){
      try{
        api.delete(`sprint/delete/${id}`).then(res=>{
          setSprint(sprint.filter((sprints)=>{
            return sprint.id !== id
          }))
        })
      }catch(e){
        alert(e) //TODO colocar mensagem amigavel 
      }
    }

    if(!sprint){
        return (
          <p>carregando...</p>
        )      
    }  
 
    return(
        <div className="page">
        <LeftMenu/>
         
        <div>
            <TopBar/>
              
              <div className="main">
                  <div className="content">
                    <div className="content-body">
                      <button onClick={()=>{goBack()}}>Voltar</button>
                        <h2>{sprint.sprintTitulo}</h2>
                        <hr/>
                        <div className="row">
                            <div className="col-50">
                                <label>Duração prevista da sprint</label><br/>
                                <label>{datas.formatDateBR(sprint.sprintInicio)} - {datas.formatDateBR(sprint.sprintFimEsperado)}</label> 
                            </div>
                            <div className="col-30">
                                <label>Operações:</label>
                                <Link to={`sprint/editar/${sprint.sprintId}`}><button className="btn btn-block btn-sm blue-button"><FaEdit/> Editar</button></Link>
                            </div>
                          </div> 
                          <br/> <br/> 
                          <label>Objetivo:</label> <br/>
                          <label>{sprint.sprintObjetivo}</label>
                          <br/><br/>
                          
                    <table>
                    <caption>Backlogs <Link to="/backlog/cadastrar"><button className="btn green-button margin-left-5"><FaPlus size={12}/> Novo backlog</button></Link></caption>
                    <thead>
                        <tr>
                        <th scope="col">Cód</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Inicio/Fim</th>
                        <th scope="col">Status</th>
                        <th scope="col">Novo Backlog</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                    {sprint.backlogs && (
                            sprint.backlogs.map((backlog)=>{
                              return(
                                <tr key={backlog.backlogId}>
                                        <td data-label="Cód">{backlog.backlogId}</td>
                                        <td data-label="Titulo">{backlog.backlogTitulo}</td>
                                        <td data-label="Tempo estimado">{datas.getHoursByMinuts(backlog.backlogMnEstimando)}</td>
                                        <td data-label="descrição">{backlog.backlogStatus}</td>
                                        <td data-label="Associar backlog">{backlog.backlogResponsavel}</td>
                                        <td data-label="editar"></td>
                                        <td data-label="excluir"><button className="btn btn-block btn-sm red-button"><FaTrash/> Excluir</button></td>
                                </tr>
                              )
                            })
                            
                        )}
                        
                        
                    </tbody>
                    </table>
                    </div>
                </div>
                <Footer/>
              </div>
        </div>           
              
      </div>

    )
}
