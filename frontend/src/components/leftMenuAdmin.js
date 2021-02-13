

        

import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

export default function (props){
    return(
        <>
            <div>
                <ul id="menu">
                    <li className="headerTitle">MAX</li>
                    <li className="legend">Opções:</li>  
                    <li><Link to="/"><div className="item special">Home</div></Link></li>
                    <li><Link to="/sprint"><div className="item">Sprints</div></Link></li>
                    <li><Link to="/usuario"><div className="item">Usuários</div></Link></li>
                    <li><div className="item">Desenvolvimento</div></li>
                    <li><div className="item">Testes</div></li>
                    <li><div className="item">Suporte</div></li>
                </ul>
            </div>
        </>
    )
}
