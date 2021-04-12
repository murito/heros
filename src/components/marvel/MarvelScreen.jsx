import React from 'react'
import { HeroList } from '../heros/HeroList'

export const MarvelScreen = () => {
    const publisher = 'Marvel Comics';
    
    return (
        <div>
            <h1>Marvel Screen</h1>
            <hr/>
            <HeroList publisher={ publisher }/>
        </div>
    )
}
