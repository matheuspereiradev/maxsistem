import React from 'react'
import {TopBar} from './topBarAdminStyle'
import { FaCoffee, FaShoppingCart, FaSignOutAlt, FaUserAlt } from 'react-icons/fa'

export default function (props){
    return(
        <>
            <TopBar>
            <div className="nav">
                        <div className="nav-btn">
                            <label className="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                            </label>
                        </div>
                        <div className="nav-links">
                            <a href="hhh"><FaCoffee/> Minhas pendências</a>
                            <a href="hhh"><FaSignOutAlt/> Sair</a>
                        </div>
              </div>
            </TopBar>
       
        </>
    )
}
