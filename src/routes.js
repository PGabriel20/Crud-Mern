import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
//---Paginas---
import Landing from './pages/Landing';
import Paineis from './pages/Paineis';
// import Landing from './pags/Landing';
// import Landing from './pags/Landing';


function Routes(){
    return(
        <BrowserRouter>
            <Route path='/' exact component={Landing}></Route>
            <Route path='/paineis' exact component={Paineis}></Route>
        </BrowserRouter>

    );
}


export default Routes;