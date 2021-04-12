import React, { useMemo } from 'react'
import queryString from 'query-string';

import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heros/HeroCard';
import { searchHeros } from '../../selectors/filters';

import './SearchScreen.scss';

export const SearchScreen = ({ history }) => {
    // get location and parse query string
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    
    // useForm manage form changes
    const [ { search }, handleInputChange ] = useForm({ search: q});

    // Filter data
    const herosFiltered = useMemo(() => searchHeros(q), [ q ]);

    // Form submit management
    const handleSearch = (e) => {
        e.preventDefault();

        history.push(`?q=${ search }`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-md-4">
                    <h4>Search Form</h4>
                    <form onSubmit={ handleSearch }>
                        <div className="form-group">
                            <input type="text" 
                                placeholder="Find your hero here..."
                                className="form-control"
                                name="search"
                                autoComplete="off"
                                value={ search }
                                onChange={ handleInputChange }
                            />
                        </div>
                        
                        <button type="submit"
                            className="btn btn-block btn-outline-primary">
                                Search
                        </button>
                    </form>
                </div>

                <div className="col-md-8">
                    <h4>{ herosFiltered.length } results for "{ q }"</h4>
                    <hr/>
                    <div className="results">
                        { q === '' &&  <small className="alert alert-info">No results here!</small> }
                        {
                            herosFiltered.map( hero => 
                                <HeroCard {...hero} key={ hero.id } />   
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
