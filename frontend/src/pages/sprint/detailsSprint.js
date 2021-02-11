import React, { useEffect, useState } from 'react'
import '../../styles/home.css'
import TopBar from '../../components/topBarAdmin'
import LeftMenu from '../../components/leftMenuAdmin'
import api from '../../services/api'
import { Link, useHistory, useParams } from 'react-router-dom'
import datas from '../../utils/dates'
import { FaArrowLeft, FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import Modal from 'react-modal'
Modal.setAppElement('#root');

export default function DetailsSprints(){
    
    const params = useParams();
    const {goBack} = useHistory();

    const [sprint,setSprint]=useState({});
    const [backlogs,setBacklogs]=useState([]);
    const [isOpen,setisOpen]=useState(false);
    const [users,setUsers]=useState([]);

    const [dominio,setDominio]=useState('');
    const [titulo,setTitulo]=useState('');
    const [chamado,setChamado]=useState('');
    const [pontos,setPontos]=useState(50);
    const [valor,setValor]=useState(50);
    const [tempo,setTempo]=useState(60);
    const [responsavel,setResponsavel]=useState(0);
    const [requisitos,setRequisitos]=useState('');
    const [descricao,setDescricao]=useState('');

    useEffect(()=>{ 
      api.get(`sprint/details/${params.id}`).then(s=>{
        setSprint(s.data[0]);
        if (s.data[0].backlogs !== undefined)
          setBacklogs(s.data[0].backlogs)
        else
          setBacklogs([])  
      })

      api.get('user/all').then(user=>{
        setUsers(user.data.filter((elemnt)=>{
          return elemnt.userIsClient === false;
        }));
      }) 
    },[params.id])
  
    async function handleSubmit(event) {
      event.preventDefault();
        console.log('oi')
        const data = {
          "dominio":dominio,
          "titulo":titulo,
          "chamado":chamado,
          "responsavel":responsavel,
          "pontos":pontos,
          "valor":valor,
          "tempo":tempo,
          "descricao":descricao,
          "requisitos":requisitos,
          "sprint":params.id
        }

        console.log(data)
        const res = await api.post('/backlog/register',data);
        if (res.status === 200){
          alert('cadastrado com sucesso');
        }   
    }

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

    function excluirBacklog(id){
      try{
        api.delete(`backlog/delete/${id}`).then(res=>{
          setBacklogs(backlogs.filter((b)=>{
            return b.backlogId !== id
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
                    {backlogs && (
                            backlogs.map((backlog)=>{
                              return(
                                <tr key={backlog.backlogId}>
                                        <td data-label="Cód">{backlog.backlogId}</td>
                                        <td data-label="Titulo">{backlog.backlogTitulo}</td>
                                        <td data-label="Tempo estimado">{datas.getHoursByMinuts(backlog.backlogMnEstimando)}</td>
                                        <td data-label="descrição">{backlog.backlogStatus}</td>
                                        <td data-label="Associar backlog">{backlog.backlogResponsavel}</td>
                                        <td data-label="editar"></td>
                                        <td data-label="excluir"><button onClick={()=>{excluirBacklog(backlog.backlogId)}} className="btn btn-block btn-sm red-button"><FaTrash/> Excluir</button></td>
                                </tr>
                              )
                            })
                            
                        )}
                        
                        
                    </tbody>
                    </table>
                    </div>
                    <Modal isOpen={isOpen} onRequestClose={()=>setisOpen(false)} >
                    
                        <h3>Cadastrar backlog</h3>
                        
                        <form onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-30">
                              <label>Dominio:</label>
                              <input maxLength="45" value={dominio} onChange={event=>{ setDominio(event.target.value)}} required className="input-text" type="text"/>
                            </div>
                            <div className="col-70 margin-left-5">
                              <label>Titulo:</label>
                              <input maxLength="45" value={titulo} onChange={event=>{ setTitulo(event.target.value)}} required className="input-text" type="text"/>
                            </div>
                          </div>
                          <div className="row">
                            
                            <div className="col-30">
                              <label>Chamado:</label>
                              <input required className="input-text" value={chamado} onChange={event=>{ setChamado(event.target.value)}} type="text"/>
                            </div>
                            <div className="col-40 margin-left-5">
                              <label>Responsável:</label>
                              <select className="select-box" id="responsavel" value={responsavel} onChange={event=>{ setResponsavel(event.target.value)}}>
                                    <option value="0">Sem responsável</option>
                                    {users && (users.map(user=>{
                                      return(
                                        <option key={user.userId} value={user.userId}>{user.userName}</option>
                                      )
                                    }))}
                              </select>
                            </div>
                            <div className="col-10 margin-left-5">
                              <label>Pontos:</label>
                              <input min="1" max="100" value={pontos} onChange={event=>{ setPontos(event.target.value)}} required className="input-text" type="number"/>
                            </div>
                            <div className="col-10 margin-left-5">
                              <label>Valor:</label>
                              <input min="1" max="100" value={valor} onChange={event=>{ setValor(event.target.value)}} required className="input-text" type="number"/>
                            </div>
                            <div className="col-10 margin-left-5">
                              <label>Tempo (Min.):</label>
                              <input required value={tempo} onChange={event=>{ setTempo(event.target.value)}} className="input-text" type="number"/>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-50">
                              <label>Descrição:</label>
                              <textarea rows="7" value={descricao} onChange={event=>{ setDescricao(event.target.value)}} className="text-area"/>
                            </div>
                            <div className="col-50 margin-left-5">
                              <label>Requisitos:</label>
                              <textarea rows="7" value={requisitos} onChange={event=>{ setRequisitos(event.target.value)}}  className="text-area"/>
                            </div>
                            
                          </div>

                           
                        <br/><br/>    
                        <hr/>
                        <div className="row">
                            <button className="btn red-button" onClick={()=>setisOpen(false)}>Cancelar</button>
                            <button className="btn green-button margin-left-5">Salvar</button>
                        </div>
                      </form>   
                    </Modal>
                </div>
               
              </div>
        </div>           
              
      </div>

    )
}
