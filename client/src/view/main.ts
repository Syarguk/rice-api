import { button } from "../components/button";
import { getCars } from "../api/api";
import { getObjCar } from "./car";
import { getGarageControls } from "./garageControl";
import { QUANTITY_CARS_PAGE } from "../components/constants";
import { renderGaragePage } from "./garagePages";
import { storage } from "../helpers/helpers";

const getGarage =  () => {
    const garage = document.createElement('div');
    garage.classList.add('garage');
    const title = document.createElement('h3');
    title.classList.add('garage-title');
    title.textContent = 'Garage';
    const numberCars = document.createElement('span');
    title.append(numberCars);
    garage.append(title);
    garage.append(getGarageControls());
    let quantityIterations = 0;
    const res = async () => {
        const dataCars = await getCars();
        if (dataCars.length !== 0) {
            numberCars.textContent = ` (${dataCars.length})`;
        } else {
            numberCars.textContent = '';
        }
        if (dataCars.length < QUANTITY_CARS_PAGE) {
            quantityIterations = dataCars.length;
        } else {
            quantityIterations = QUANTITY_CARS_PAGE;
        }
        for (let i = 0; i < quantityIterations; i += 1) {
            garage.append(getObjCar(dataCars[i]));
        }
    }
    res();
    return garage;
}

const winners = () => {
    const winners = document.createElement('div');
    winners.classList.add('winners');
    winners.innerHTML = '<h3>Winners</h3>';
    return winners;
}

const changePage = async (e: Event) => {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const target = e.target as HTMLElement;
    const allCars = await getCars();
    if (target.id === 'prev') {
        storage.numberCurrentPage -= 1;
    } else if (target.id === 'next') {
        storage.numberCurrentPage += 1;
    }
    renderGaragePage(storage.numberCurrentPage);
    console.log(storage.numberCurrentPage);
    /* 
    if (storage.numberCurrentPage * QUANTITY_CARS_PAGE - QUANTITY_CARS_PAGE > 0) {
        prevButton?.removeAttribute('disabled');
    } else {
        prevButton?.setAttribute('disabled', '');
    }
    if (storage.numberCurrentPage * QUANTITY_CARS_PAGE < allCars.length) {
        nextButton?.removeAttribute('disabled');
    } else {
        nextButton?.setAttribute('disabled', '');
    } */
}

const footer = () => {
    const wrapFooter = document.createElement('div');
    wrapFooter.classList.add('footer');
    const prev = button('PREV', 'prev', 'disabled');
    const next = button('NEXT', 'next');
    (async function name() {
        const allCars = await getCars();
        if (allCars.length < QUANTITY_CARS_PAGE) {
            next.setAttribute('disabled', '');
        } else {
            next.removeAttribute('disabled');
        }
    })();
    prev.addEventListener('click', changePage);
    next.addEventListener('click', changePage);
    wrapFooter.append(prev);
    wrapFooter.append(next);
    return wrapFooter;
}

const checkView = (e: Event) => {
    const target = e.target as HTMLElement;
    const main = document.querySelector('.main');
    if (main) main.innerHTML = '';
    if (target.id === 'to-garage') {
        main?.append(getGarage());
    } else if (target.id === 'to-winners'){
        main?.append(winners());
    }
}

export const getMain = () => {
    const mainWrap = document.createElement('div');
    mainWrap.classList.add('wrap-main');
    const header = document.createElement('div');
    header.classList.add('header');
    const toGarage = button('TO GARAGE', 'to-garage');
    const toWinners = button('TO WINNERS', 'to-winners');
    header.append(toGarage);
    header.append(toWinners);
    header.addEventListener('click', checkView);
    const main = document.createElement('div');
    main.classList.add('main');
    main.append(getGarage());
    mainWrap.append(header);
    mainWrap.append(main);
    mainWrap.append(footer());
    return mainWrap;
}