import React from 'react'
import {  BrowserRouter, Switch, Route   } from  'react-router-dom'


import Auth from './pages/Authenticate/Auth'
import Register from './pages/Authenticate/Register'
import Home from './pages/Home'
import ListAnimes from './pages/SearchContent/searchAnimes'
import ListSeries from './pages/SearchContent/searchSeries'


const Routes = () => {
    return(
        <BrowserRouter >
            <Switch>
                <Route exact path="/" component={Auth} />
                <Route path="/register" component={Register} />
                <Route path="/home" component={Home} />
                <Route path="/search-animes" component={ListAnimes} />
                <Route path="/search-series" component={ListSeries} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes