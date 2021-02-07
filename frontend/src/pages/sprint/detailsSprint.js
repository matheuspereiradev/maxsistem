import React, { useEffect, useState } from 'react'
import '../../styles/home.css'
import TopBar from '../../components/topBarAdmin'
import LeftMenu from '../../components/leftMenuAdmin'
import Footer from '../../components/footer'
import api from '../../services/api'
import { Link, useParams } from 'react-router-dom'
import datas from '../../utils/dates'

export default function ListSprints(){
    
    const params = useParams();

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
                      <button onClick={()=>{console.log(params)}}>Voltar</button>
                        <h2>{sprint.sprintTitulo}</h2>
                        <hr/>
                    </div>
                </div>
                <Footer/>
              </div>
        </div>           
              
      </div>

    )
}
