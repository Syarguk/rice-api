import { getCars } from "../api/api";
import { storage } from "../helpers/helpers";
import { QUANTITY_CARS_PAGE } from "../components/constants";

export const renderNumberCarsTitle = async () => {
    const elemTitle = document.querySelector('.garage-title')?.children[0];
    const allCars = await getCars();
    if (elemTitle) {
        if (allCars.length !== 0) {
            elemTitle.textContent = ` (${allCars.length})`;
        } else {
            elemTitle.textContent = '';
        }
    }
}

export const onOffButtonsPage = async () => {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const allCars = await getCars();
    if (storage.numberCurrentPage * QUANTITY_CARS_PAGE - QUANTITY_CARS_PAGE > 0) {
        prevButton?.removeAttribute('disabled');
    } else {
        prevButton?.setAttribute('disabled', '');
    }
    if (storage.numberCurrentPage * QUANTITY_CARS_PAGE < allCars.length) {
        nextButton?.removeAttribute('disabled');
    } else {
        nextButton?.setAttribute('disabled', '');
    }
}