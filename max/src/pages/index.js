import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import TopBar from '../components/topBarAdmin'
import LeftMenu from '../components/leftMenuAdmin'
import { FaEdit, FaTrash } from 'react-icons/fa'

export default function IndexPage(){

 
    return(
        <div className="page">
        <LeftMenu/> 
        <div>
            <TopBar/>
              
              <div className="main">
                  <div className="content">
                    <div className="content-body">
                    <button className="btn btn-block green-button">cadastrar novo</button>
                    <table>
                    <caption>Produtos</caption>
                    <thead>
                        <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                      <td data-label="nome">NOME</td>
                      <td data-label="preço">0,00</td>
                      <td data-label="quantidade">0</td>
                      <td data-label="categoria">NENHUMA</td>
                      <td data-label="editar"><button className="btn btn-block btn-sm blue-button"><FaEdit/> Editar</button></td>
                      <td data-label="excluir"><button className="btn btn-block btn-sm red-button"><FaTrash/> Excluir</button></td>
                          
                    </tbody>
                  </table>    
                    
                    </div>
                </div>
                <div id="footer">
                    <span>&copy; CSS ROCKS</span> 
                  </div>
              </div>
        </div>           
              
      </div>

    )
}
