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
                      <h1>Bem vindo! Matheus</h1>
                      <hr/>
                    </div>
                </div>
                <div id="footer" className="align-center">
                    <span>&copy; Projeto MAX - Management Extreme</span> 
                  </div>
              </div>
        </div>           
              
      </div>

    )
}
