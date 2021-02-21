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
    const [login,setLogin] = useState('');
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

    useEffect(()=>{ 
      
      api.get('user/all').then(user=>{
        /*setUsers(user.data.filter((elemnt)=>{
          return elemnt.userIsClient === false;
        }));*/
      }) 
    },[])

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
                          
                        <div className="row">
                            <div className="col-50">
                                <label>Login</label><br/>
                                <input onChange={event => { setLogin(event.target.value) }} className="input-text" type="text" value={login}></input>
                            </div>
                            <div className="col-50 margin-left-5">
                                <label>Email</label><br/>
                                <input onChange={event => { setEmail(event.target.value) }} value={email} className="input-text" type="text"></input>
                            </div>
                        </div>  
                        <div className="row">
                            <div className="col-50">
                                <label>Telefone</label><br/>
                                <input onChange={event => { setTelefone(event.target.value) }} className="input-text" type="text" value={telefone}></input>
                            </div>
                            <div className="col-50 margin-left-5">
                                <label>Cliente:</label><br/>
                                <label className="switch">
                                  <input type="checkbox"/>
                                  <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-50">
                                <label>Empresa</label><br/>
                                <input onChange={event => { setTelefone(event.target.value) }} className="input-text" type="text" value={telefone}></input>
                            </div>
                            <div className="col-50 margin-left-5">
                                <label>Cliente:</label><br/>
                                <label className="switch">
                                  <input type="checkbox"/>
                                  <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
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
