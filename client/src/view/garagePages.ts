import { getObjCar } from "./car";
import { getCars, deleteCar } from "../api/api";
import { Car } from "../types/types";
import { QUANTITY_CARS_PAGE } from "../components/constants";

export const renderGaragePage = async () => {
    const garage = document.querySelector('.garage');
    const wrapCars = document.querySelectorAll('.wrap-car');
    wrapCars.forEach((car) => car.remove());
    const allCarsData = await getCars();
    let quantityIterations = 0;
    if (allCarsData.length < QUANTITY_CARS_PAGE) {
        quantityIterations = allCarsData.length;
    } else {
        quantityIterations = QUANTITY_CARS_PAGE;
    }
    for (let i = 0; i < quantityIterations; i += 1) {
        const car = getObjCar(allCarsData[i]);
        garage?.append(car);
    }
}

export const deleteAllCars = async () => {
    const garageTitle = document.querySelector('.garage-title');
    const allCars = await getCars();
    const idAllCars = allCars.map((car: Car) => car.id);
    idAllCars.forEach((id: number) => deleteCar(id));
    const wrapCars = document.querySelectorAll('.wrap-car');
    wrapCars.forEach((car) => car.remove());
    if (garageTitle?.children[0]) {
        garageTitle.children[0].textContent = '';
    }
}