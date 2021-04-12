const heroImages = require.context('../assets/heroes', true);
const brandsImages = require.context('../assets/brands', true);

export const loadImage = image => ( heroImages(`./${image}`).default );
export const loadBrand = brand => ( brandsImages(`./${brand}`).default );