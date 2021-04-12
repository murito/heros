import React from 'react'
import { HeroList } from '../heros/HeroList'

export const DcScreen = () => {
    const publisher = 'DC Comics';

    return (
        <div>
            <h1>DC Screen</h1>
            <hr/>
            <HeroList publisher={ publisher }/>
        </div>
    )
}
