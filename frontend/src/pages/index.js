import React from 'react'
import '../styles/home.css'
import TopBar from '../components/topBarAdmin'
import LeftMenu from '../components/leftMenuAdmin'

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
                      <div className="dropdown margin-left-5">
                        <button className="btn green-button dropbtn">Dropdown</button>
                        <div className="dropdown-content">
                          <a href="404">Link 1</a>
                          <a href="404">Link 2</a>
                          <a href="404">Link 3</a>
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
