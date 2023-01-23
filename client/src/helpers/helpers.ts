import { carModels } from "../data/carModels";

export const storage = {
    currentIdUpdate: 0,
    quantityCarsGarage: 0,
    numberCurrentPage: 1,
    createName: '',
    createColor: '#ff0000',
    updateName: '',
    updateColor: '#ff0000'
}

export const getRandomColorHex = () => {
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hex = '#';
    for(let i = 0; i < 6; i++){
        const index = Math.floor(Math.random() * hexValues.length)
        hex += hexValues[index];
    }
    return hex;
}

export const getRandomNameCar = () => {
    const carsBrandModel = Object.entries(carModels);
    const randomIndexBrand = Math.floor(Math.random() * 4);
    const randomIndexModel = Math.floor(Math.random() * 10);
    const randomBrand = carsBrandModel[randomIndexBrand][0];
    const randomModel = carsBrandModel[randomIndexBrand][1][randomIndexModel];
    return `${randomBrand} ${randomModel}`;
}
