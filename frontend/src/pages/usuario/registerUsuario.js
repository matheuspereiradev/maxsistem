import React, { useEffect, useState } from 'react'
import '../../styles/home.css'
import TopBar from '../../components/topBarAdmin'
import LeftMenu from '../../components/leftMenuAdmin'
import api from '../../services/api'
import { useHistory, useParams } from 'react-router-dom'
import { FaArrowLeft, FaSave } from 'react-icons/fa'

export default function RegisterUsuario(){

    const params = useParams();

    const {goBack} = useHistory();

    const [nome,setNome]=useState('');
    const [empresa,setEmpresa] = useState(''); 
    const [setor,setSetor] = useState(''); 
    const [email,setEmail] = useState('');  
    const [telefone,setTelefone] = useState(''); 
    const [senha,setSenha] = useState(''); 
    const [isClient,setIsClient] = useState(false); 
    const [isManager,setIsManager] = useState(false); 

    const[empresas,setEmpresas] = useState([])
    const[setores,setSetores] = useState([])

    useEffect(()=>{
      if(params.id!== undefined){
        api.get(`user/find/${params.id}`).then(
          result=>{
            
          }
        )
      }
      
    },[params.id])

    async function handleSubmit(event) {
        event.preventDefault();
        
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
                      <form onSubmit={handleSubmit}>
                        <h1>Cadastro de usuários</h1>
                        <hr/>
                        <label>Nome:</label>
                        <input maxLength="45" required onChange={event => { setNome(event.target.value) }} value={nome} className="input-text" type="text"/>
                          
                        <br/><br/>
                        <button type="submit"className="btn btn-block green-button"><FaSave/> Salvar</button>
                      </form>
                      
                    </div>
                </div>
                
              </div>
        </div>           
              
      </div>

    )
}
