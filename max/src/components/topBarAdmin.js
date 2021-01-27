import React from 'react'
import {TopBar} from './topBarAdminStyle'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'

export default function (props){
    return(
        <>
            <TopBar>
            <div className="nav">
                <div className="nav-header">
                            <div className="nav-title">
                                VCommerce
                            </div>
                            
                        </div>
                        
                        <div className="nav-btn">
                            <label className="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                            </label>
                        </div>
                        <div className="nav-links">
                            <a href="https://codepen.io/jo_Geek/"><FaShoppingCart/> Carrinho</a>
                            <a href="https://jsfiddle.net/user/jo_Geek/"><FaUserAlt/> Login</a>
                        </div>
              </div>
            </TopBar>
       
        </>
    )
}
