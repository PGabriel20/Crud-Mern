import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
//---Paginas---
import Adicionar from './pages/Adicionar';
import Landing from './pages/Landing';
import Paineis from './pages/Paineis';


function Routes(){
    return(
        <BrowserRouter>
            <Route path='/' exact component={Landing}></Route>
            <Route path='/paineis' exact component={Paineis}></Route>
            <Route path='/paineis/add' exact component={Adicionar}></Route>
        </BrowserRouter>

    );
}


export default Routes;