import React, { useEffect, useState } from 'react'
import '../../styles/home.css'
import TopBar from '../../components/topBarAdmin'
import LeftMenu from '../../components/leftMenuAdmin'
import Footer from '../../components/footer'
import api from '../../services/api'
import { useHistory, useParams } from 'react-router-dom'
import { FaSave } from 'react-icons/fa'
import dates from '../../utils/dates'

export default function RegisterSprint(){

    const params = useParams();

    const {goBack} = useHistory();

    const [titulo,setTitulo]=useState('');
    const [objetivo,setObjetivo] = useState(''); 
    const [dataInicio,setDataInicio] = useState(''); 
    const [dataFim,setDataFim] = useState('');  

    useEffect(()=>{
      if(params.id!== undefined){
        api.get(`sprint/find/${params.id}`).then(
          result=>{
            setTitulo(result.data[0].sprintTitulo);
            setObjetivo(result.data[0].sprintObjetivo);
            setDataInicio(dates.formatDateUS(result.data[0].sprintInicio));
            setDataFim(dates.formatDateUS(result.data[0].sprintFimEsperado));
          }
        )
      }
      
    },[params.id])

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
          "titulo":titulo,
          "objetivo":objetivo,
          "dataInicio":dataInicio,
          "dataFim":dataFim
        }
        if (params.id === undefined){
            const res = await api.post('/sprint/register',data);
            if (res.status === 200){
                alert('cadastrado com sucesso');
                goBack();
            }
        }else{
          const res = await api.put(`/sprint/edit/${params.id}`,data);
          if (res.status === 200){
              alert('Editada com sucesso');
              goBack();
          }
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
                      <form onSubmit={handleSubmit}>
                          <h1>Cadastro de sprints</h1>
                          <hr/>
                          
                          
                            <label>Titulo:</label>
                            <input maxLength="45" required onChange={event => { setTitulo(event.target.value) }} value={titulo} className="input-text" type="text"/>
                          
                          <div className="row">
                            <div className="col-30">
                                <label>Data de inicio</label><br/>
                                <input onChange={event => { setDataInicio(event.target.value) }} className="input-date" type="date" value={dataInicio}></input>
                            </div>
                            <div className="col-30">
                                <label>Previsão de fim</label><br/>
                                <input onChange={event => { setDataFim(event.target.value) }} value={dataFim} className="input-date" type="date"></input>
                            </div>
                          </div>   

                          <label>Objetivo da sprint:</label><br/>
                          <textarea value={objetivo} onChange={event=>{ setObjetivo(event.target.value)}} rows="5" className="text-area"/>
                          <br/><br/>
                          <button type="submit"className="btn btn-block green-button"><FaSave/> Salvar</button>
                      </form>
                      
                    </div>
                </div>
                <Footer/>
              </div>
        </div>           
              
      </div>

    )
}
