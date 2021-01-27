

        

import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
//import {LeftMenu} from './leftMenuAdminStyle'

export default function (props){
    return(
        <>
            <div>
                <ul id="menu">
                    <li className="headerTitle">VComerce</li>
                    <li className="legend">Opções:</li>  
                    <li><Link to="/admin/produto"><div className="item">Produtos</div></Link></li>
                    <li><Link to="/admin/categorias"><div className="item">Categorias</div></Link></li>
                    
                </ul>
            </div>
        </>
    )
}
