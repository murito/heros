import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

import './NavBar.scss';

export const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext);
    const history = useHistory();
    
    const makeLogout = () => {
        dispatch({
            type: types.logout
        });

        history.replace('/login');
    } 

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link className="navbar-brand" to="/">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        <span className="search"> 
                            <i className="fas fa-search"></i> Search
                        </span>
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    { user.logged && <span className="nav-item nav-link text-info">{ user.name }</span> }
                
                    <button className="nav-item nav-link btn" onClick={ makeLogout }>
                        <span className="search"> 
                            Logout
                        </span>
                    </button>
                </ul>
            </div>
        </nav>
    )
}