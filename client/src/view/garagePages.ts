import { getObjCar } from "./car";
import { getCars, deleteCar } from "../api/api";
import { Car } from "../types/types";
import { QUANTITY_CARS_PAGE } from "../components/constants";
import { onOffButtonsPage } from "./additional";

export const renderGaragePage = async (currentPage: number) => {
    const garage = document.querySelector('.garage');
    const wrapCars = document.querySelectorAll('.wrap-car');
    wrapCars.forEach((car) => car.remove());
    const firstElem = (currentPage - 1) * QUANTITY_CARS_PAGE;
    const lastElem = firstElem + QUANTITY_CARS_PAGE;
    const allCarsData = await getCars();
    const currentCars = allCarsData.filter((el: Car, ind: number) => {
        if (ind >= firstElem && ind < lastElem) {
            return true;
        }
        return false;
    });
    for ( let car of currentCars) {
        garage?.append(getObjCar(car));
    }
    onOffButtonsPage();
}

export const deleteAllCars = async () => {
    const garageTitle = document.querySelector('.page-title');
    const allCars = await getCars();
    const idAllCars = allCars.map((car: Car) => car.id);
    idAllCars.forEach((id: number) => deleteCar(id));
    const wrapCars = document.querySelectorAll('.wrap-car');
    wrapCars.forEach((car) => car.remove());
    if (garageTitle?.children[0]) {
        garageTitle.children[0].textContent = '';
    }
}