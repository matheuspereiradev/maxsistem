import React, { useEffect, useState } from 'react'
import '../../styles/home.css'
import TopBar from '../../components/topBarAdmin'
import LeftMenu from '../../components/leftMenuAdmin'
import Footer from '../../components/footer'
import api from '../../services/api'
import { Link, useHistory, useParams } from 'react-router-dom'
import datas from '../../utils/dates'
import { FaArrowLeft, FaCog, FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import Modal from 'react-modal'
Modal.setAppElement('#root');

export default function ListSprints(){
    
    const params = useParams();
    const {goBack} = useHistory();

    const [sprint,setSprint]=useState({});
    const [isOpen,setisOpen]=useState(false);

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
                      <button className="btn transparent-button" onClick={()=>{goBack()}}><FaArrowLeft size={12}/> Voltar</button>
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
                    <caption>Backlogs <button onClick={()=>{setisOpen(true)}} className="btn green-button margin-left-5"><FaPlus size={12}/> Novo backlog</button></caption>
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
                    <Modal isOpen={isOpen} onRequestClose={()=>setisOpen(false)} >
                    
                        <h3>Cadastrar backlog</h3>
                        
                        <form>
                          <div className="row">
                            <div className="col-30">
                              <label>Dominio:</label>
                              <input maxLength="45" required className="input-text" type="text"/>
                            </div>
                            <div className="col-70 margin-left-5">
                              <label>Titulo:</label>
                              <input maxLength="45" required className="input-text" type="text"/>
                            </div>
                          </div>
                          <div className="row">
                            
                            <div className="col-30">
                              <label>Chamado:</label>
                              <input required className="input-text" type="text"/>
                            </div>
                            <div className="col-40 margin-left-5">
                              <label>Responsável:</label>
                              <input required className="input-text" type="text"/>
                            </div>
                            <div className="col-10 margin-left-5">
                              <label>Pontos:</label>
                              <input min="1" max="100" required className="input-text" type="number"/>
                            </div>
                            <div className="col-10 margin-left-5">
                              <label>Valor:</label>
                              <input min="1" max="100" required className="input-text" type="number"/>
                            </div>
                            <div className="col-10 margin-left-5">
                              <label>Tempo (Min.):</label>
                              <input required className="input-text" type="number"/>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-50">
                              <label>Descrição:</label>
                              <textarea rows="7" className="text-area"/>
                            </div>
                            <div className="col-50 margin-left-5">
                              <label>Requisitos:</label>
                              <textarea rows="7" className="text-area"/>
                            </div>
                            
                          </div>

                        </form>    
                        <br/><br/>    
                        <hr/>
                        <div className="row">
                            <button className="btn red-button" onClick={()=>setisOpen(false)}>Cancelar</button>
                            <button className="btn green-button margin-left-5">Salvar</button>
                        </div>
                    </Modal>
                </div>
                <Footer/>
              </div>
        </div>           
              
      </div>

    )
}
