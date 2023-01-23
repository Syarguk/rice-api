import { button } from "../components/button";
import { Car } from "../types/types";
import { getCars } from "../api/api";
import { getObjCar } from "./car";
import { getGarageControls } from "./garageControl";
import { getWinnerControls } from "./winnerControl";
import { QUANTITY_CARS_PAGE } from "../components/constants";
import { renderGaragePage } from "./garagePages";
import { storage } from "../helpers/helpers";

const getGarage =  () => {
    const garage = document.createElement('div');
    garage.classList.add('garage');
    const title = document.createElement('h3');
    const numberPageWrap = document.createElement('h4');
    title.classList.add('page-title');
    title.textContent = 'Garage';
    numberPageWrap.classList.add('number-page');
    numberPageWrap.textContent = 'Page - ';
    const numberCars = document.createElement('span');
    const numberPage = document.createElement('span');
    numberPage.textContent = `${storage.numberCurrentPage}`;
    title.append(numberCars);
    numberPageWrap.append(numberPage);
    garage.append(getGarageControls());
    garage.append(title);
    garage.append(numberPageWrap);
    const firstElem = (storage.numberCurrentPage - 1) * QUANTITY_CARS_PAGE;
    const lastElem = firstElem + QUANTITY_CARS_PAGE;
    const res = async () => {
        const allCarsData = await getCars();
        const currentCars = allCarsData.filter((el: Car, ind: number) => {
            if (ind >= firstElem && ind < lastElem) {
                return true;
            }
            return false;
        });
        for ( let car of currentCars) {
            garage.append(getObjCar(car));
        }
        if (allCarsData.length !== 0) {
            numberCars.textContent = ` (${allCarsData.length})`;
        } else {
            numberCars.textContent = '';
        }
    }
    res();
    return garage;
}

const winners = () => {
    const winners = document.createElement('div');
    winners.classList.add('winners');
    const title = document.createElement('h3');
    const numberPageWrap = document.createElement('h4');
    title.classList.add('page-title');
    title.textContent = 'Winners';
    numberPageWrap.classList.add('number-page');
    numberPageWrap.textContent = 'Page - ';
    const numberCars = document.createElement('span');
    const numberPage = document.createElement('span');
    numberPage.textContent = `${storage.numberCurrentPage}`;
    title.append(numberCars);
    numberPageWrap.append(numberPage);
    winners.append(title);
    winners.append(numberPageWrap);
    winners.append(getWinnerControls());
    return winners;
}

const changePage = (e: Event) => {
    const elemNumberPage = document.querySelector('.number-page span');
    const target = e.target as HTMLElement;
    if (target.id === 'prev') {
        storage.numberCurrentPage -= 1;
    } else if (target.id === 'next') {
        storage.numberCurrentPage += 1;
    }
    renderGaragePage(storage.numberCurrentPage);
    if (elemNumberPage) elemNumberPage.textContent = `${storage.numberCurrentPage}`;
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