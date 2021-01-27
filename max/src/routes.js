import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import index from './pages/index'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={index}/>
                
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;