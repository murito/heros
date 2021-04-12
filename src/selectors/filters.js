import { heroes } from "../data/heroes";

export const getHerosByPublisher = ( publisher ) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if( !validPublishers.includes(publisher) ){
        throw new Error(`Publisher "${publisher}" no es correcto.`);
    }

    return heroes.filter(h => h.publisher === publisher );
};

export const getHerosById = ( id ) => {
    return heroes.find(h => h.id === id );
}

export const searchHeros = ( search ) => {
    const s = search.trim().toLocaleLowerCase();

    if( !s ) return [];

    return heroes.filter(hero => 
        matcheableText(hero.superhero)
            .includes(matcheableText(s)) ||
        matcheableText(hero.characters)
            .includes(matcheableText(s)) ||
        matcheableText(hero.alter_ego)
            .includes(matcheableText(s))
    );
}

const matcheableText = (text) => text.trim().toLocaleLowerCase();