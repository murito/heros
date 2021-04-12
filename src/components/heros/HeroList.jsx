import React, { useMemo } from 'react'
import { getHerosByPublisher } from '../../selectors/filters';
import { HeroCard } from './HeroCard';
import PropTypes from 'prop-types';

import './HeroList.scss';

export const HeroList = ({ publisher }) => {

    const heroList = useMemo(() => getHerosByPublisher(publisher), [ publisher ]);

    return (
        <>
            <div className="hero-list animate__animated animate__fadeIn">
                {
                    heroList.map(hero => 
                        <HeroCard key={ hero.id }  { ...hero }></HeroCard>
                    )
                }    
            </div>   
        </>
    )
}

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired
}