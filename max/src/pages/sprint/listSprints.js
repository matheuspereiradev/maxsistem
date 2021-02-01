import React, { useEffect, useState } from 'react'
import '../../styles/home.css'
import TopBar from '../../components/topBarAdmin'
import LeftMenu from '../../components/leftMenuAdmin'
import Footer from '../../components/footer'
import { FaEdit, FaPlus, FaThumbtack, FaTrash } from 'react-icons/fa'
import api from '../../services/api'
import { Link } from 'react-router-dom'

export default function ListSprints(){

    const [sprints,setSprints]=useState([])

    useEffect(()=>{
      api.get('sprint/all').then(sprint=>{
          setSprints(sprint.data);
        })
    },[])
  
    function excluirSprint(id){
      try{
        api.delete(`sprint/delete/${id}`).then(res=>{
          setSprints(sprints.filter((sprints)=>{
            return sprints.id !== id
          }))
        })
      }catch(e){
        alert(e) //TODO colocar mensagem amigavel 
      }
    }
 
    return(
        <div className="page">
        <LeftMenu/>
         
        <div>
            <TopBar/>
              
              <div className="main">
                  <div className="content">
                    <div className="content-body">
                      
                    <table>
                    <caption>Sprints <Link to="/sprint/cadastrar"><button className="btn green-button margin-left-5"><FaPlus size={12}/> Nova sprint</button></Link></caption>
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
                    {sprints && (
                            sprints.map((sprint)=>{
                              return(
                                <tr key={sprint.id}>
                                        <td data-label="Cód">{sprint.id}</td>
                                        <td data-label="Titulo">{sprint.titulo}</td>
                                        <td data-label="descrição">{sprint.inicio}</td>
                                        <td data-label="descrição">{sprint.status}</td>
                                        <td data-label="Associar backlog"><button className="btn btn-block btn-sm yellow-button"><FaThumbtack/> Associar</button></td>
                                        <td data-label="editar"><Link to={`sprint/editar/${sprint.id}`}><button className="btn btn-block btn-sm blue-button"><FaEdit/> Editar</button></Link></td>
                                        <td data-label="excluir"><button onClick={()=>{excluirSprint(sprint.id)}} className="btn btn-block btn-sm red-button"><FaTrash/> Excluir</button></td>
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
