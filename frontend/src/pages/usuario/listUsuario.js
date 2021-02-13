import React, { useEffect, useState } from 'react'
import '../../styles/home.css'
import TopBar from '../../components/topBarAdmin'
import LeftMenu from '../../components/leftMenuAdmin'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import api from '../../services/api'
import { Link } from 'react-router-dom'

export default function ListUsers(){

    const [users,setUsers]=useState([])

    useEffect(()=>{
      api.get('user/all').then(usr=>{
        console.log(usr.data)
          setUsers(usr.data);
        })
    },[])
  
 
    return(
        <div className="page">
        <LeftMenu/>
         
        <div>
            <TopBar/>
              
              <div className="main">
                  <div className="content">
                    <div className="content-body">
                      
                    <table>
                    <caption>Usuários <Link to="/usuarios/cadastrar"><button className="btn green-button margin-left-5"><FaPlus size={12}/> Novo usuário</button></Link></caption>
                    <thead>
                        <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Empresa</th>
                        <th scope="col">Setor</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users && (
                            users.map((usr)=>{
                              return(
                                <tr key={usr.userId}>
                                        <td data-label="Nome">{usr.userName}</td>
                                        <td data-label="Telefone">{usr.userTelefone}</td>
                                        <td data-label="Tipo">{usr.userIsClient}</td>
                                        <td data-label="Empresa">{usr.company.userCompany}</td>
                                        <td data-label="Setor">{usr.sector.userSector}</td>
                                        <td data-label="editar"><Link to={`sprint/editar/${usr.userId}`}><button className="btn btn-block btn-sm blue-button"><FaEdit/> Editar</button></Link></td>
                                        <td data-label="excluir"><button onClick={()=>{}} className="btn btn-block btn-sm red-button"><FaTrash/> Excluir</button></td>
                                </tr>
                              )
                            })
                            
                        )}
                        
                        
                    </tbody>
                    </table> 
                    </div>
                </div>
              </div>
        </div>           
              
      </div>

    )
}
