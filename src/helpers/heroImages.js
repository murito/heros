// The initialization of those functions
// is to avoid issues with jest on the tests
// because require.context is a WebPack specific feature
let heroImages = () => ({ default: '' });
let brandsImages = () => ({ default: '' });

try{
    heroImages = require.context('../assets/heroes', true);
    brandsImages = require.context('../assets/brands', true);
}catch(error){}

export const loadImage = image => ( heroImages(`./${image}`).default );
export const loadBrand = brand => ( brandsImages(`./${brand}`).default );