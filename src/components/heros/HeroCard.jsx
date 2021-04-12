import React from 'react'
import { loadImage } from '../../helpers/heroImages';
import { Link } from 'react-router-dom';

import './HeroCard.scss';

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
 }) => {

    const brand = publisher.toLocaleLowerCase().split(" ")[0];

    return (
        <div className="card ms-3 hero-card">
            <img src={ loadImage(`${ id }.jpg`) } alt={ superhero } className="card-img"/>
            <div className="card-body">
                <div className={`characters ${ brand }`}>
                    <Link to={ `./hero/${ id }`}>
                        <h4 className="text-center">
                            { characters }
                        </h4>
                    </Link>
                </div>
                <h5 className="card-title">{ superhero }</h5>
                <p className="card-text">{ alter_ego }</p>
                <small className="text-muted">{ first_appearance }</small>
            </div>
        </div>
    )
}
