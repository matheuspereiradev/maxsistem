import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import index from './pages/index'
import sprintList from './pages/sprint/listSprints'
import sprintRegister from './pages/sprint/registerSprint'
import sprintDetails from './pages/sprint/detailsSprint'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={index}/>

                <Route path="/sprint" exact component={sprintList}/>
                <Route path="/sprint/cadastrar" component={sprintRegister}/>
                <Route path="/sprint/editar/:id" component={sprintRegister}/>
                <Route path="/sprint/detalhes/:id" component={sprintDetails}/>
                
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;