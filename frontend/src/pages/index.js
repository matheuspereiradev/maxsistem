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
                      <button className="btn green-button margin-left-5">clique</button>
                      <button className="btn red-button margin-left-5">clique</button>
                      <button className="btn blue-button margin-left-5">clique</button>
                      <button className="btn yellow-button margin-left-5">clique</button>
                      <div class="dropdown margin-left-5">
                        <button class="btn green-button dropbtn">Dropdown</button>
                        <div class="dropdown-content">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <a href="#">Link 3</a>
                        </div>
                      </div> 
                      <br/>
                      <br/>
                      <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                      </label>
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
