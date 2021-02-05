

        

import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

export default function (props){
    return(
        <>
            <div>
                <ul id="menu">
                    <li className="headerTitle">PROJETO MAX</li>
                    <li className="legend">Opções:</li>  
                    <li><Link to="/"><div className="item special">Home</div></Link></li>
                    <li><Link to="/sprint"><div className="item">Sprints</div></Link></li>
                    <li><div className="item">Opção 2</div></li>
                    <li><div className="item">Opção 3</div></li>
                    <li><div className="item">Opção 4</div></li>
                </ul>
            </div>
        </>
    )
}
