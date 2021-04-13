import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { loadBrand, loadImage } from '../../helpers/heroImages';
import { getHerosById } from '../../selectors/filters';

import './HeroScreen.scss';

export const HeroScreen = ({ history }) => {
    const { heroeId } = useParams();

    const hero = useMemo(() => getHerosById( heroeId ), [ heroeId ])

    if( !hero ) return <Redirect to="/" />

    const {
        id,
        superhero, 
        publisher, 
        alter_ego,
        first_appearance,
        characters
    } = hero ;

    const brand = publisher.toLocaleLowerCase().split(" ")[0];

    const back = () => {
        history.length <= 2 ?  history.push('/') : history.goBack();
    }

    return (
        <div>
            <div className="header" onClick={ back }>
                <i className="fas fa-angle-left"></i>
                <h1>{ superhero }</h1>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-12">
                    <div className="hero">
                        <div className={`image-wrapper animate__animated animate__fadeInLeft ${brand}`}>
                            <img src={ loadImage(`${ id }.jpg`) } alt={ superhero } className="card-img"/>
                        </div>
                        <div className="data">
                            <ul>
                                <li>
                                    <div className="img-wrapper">
                                        <img src={ loadBrand(`${brand}.png`) } alt="dc"/>
                                    </div>
                                </li>
                                <li>
                                    <strong>Alter ego:</strong>
                                    <p>{ alter_ego }</p>
                                </li>
                                <li>
                                    <strong>First Appearance:</strong>
                                    <p>{ first_appearance }</p>
                                </li>
                                <li>
                                    <strong>Characters:</strong>
                                    <p>{ characters }</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
