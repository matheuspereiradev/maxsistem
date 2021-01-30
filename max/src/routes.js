import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import index from './pages/index'
import sprintList from './pages/sprint/listSprints'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={index}/>

                <Route path="/sprint" exact component={sprintList}/>
                
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;