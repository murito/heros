import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heros/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container-fluid mt-5 px-5">
                <Switch>
                    <Route exact path="/dc" component={ DcScreen }/>
                    <Route exact path="/marvel" component={ MarvelScreen }/>
                    <Route exact path="/hero/:heroeId" component={ HeroScreen }/>
                    <Route exact path="/search" component={ SearchScreen }/>

                    <Redirect to="/marvel" />
                </Switch>    
            </div>   
        </>
    )
}
