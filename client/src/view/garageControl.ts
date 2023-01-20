import { button } from "../components/button";
import { input, inputColor } from "../components/input";
import { createCar, updateCar, getCars } from "../api/api";
import { getObjCar, getImageCar } from "./car";
import { storage, getRandomNameCar, getRandomColorHex } from "../helpers/helpers";
import { renderGaragePage, deleteAllCars } from "./garagePages";
import { renderNumberCarsTitle, onOffButtonsPage } from "./additional";
import { ADD_CARS } from "../components/constants";

const createCarData = {
    name: '',
    color: '#ff0000'
}

const changeInputCreate = (e: Event) => {
    const target = e.target as HTMLInputElement;
    createCarData.name = target.value;
}

const changeInputUpdate = (e: Event) => {
    const target = e.target as HTMLInputElement;
    storage.updateNameCar = target.value;}

const changeInputColorCreate = (e: Event) => {
    const target = e.target as HTMLInputElement;
    createCarData.color = target.value;
}

const changeInputColorUpdate = (e: Event) => {
    const target = e.target as HTMLInputElement;
    storage.updateColorCar = target.value;}

const sendDataForCreate = () => {
    const garage = document.querySelector('.garage');
    const res = async () => {
        const newCarData = await createCar(createCarData);
        const car = getObjCar(newCarData);
        garage?.append(car);
    }
    res();
}

const sendDataForUpdate = () => {
    const currentCar = document.getElementById(`car${storage.currentIdUpdate}`);
    const currentCarName = currentCar?.childNodes[0].childNodes[0];
    const currentCarImg = currentCar?.children[1];
    const inputNameUpdate = document.getElementById('inp-name-update') as HTMLInputElement;
    const inputColorUpdate = document.getElementById('inp-color-update') as HTMLInputElement;
    const update = document.getElementById('update') as HTMLElement;
    inputNameUpdate.setAttribute('disabled', '');
    inputColorUpdate.setAttribute('disabled', '');
    update.setAttribute('disabled', '');
    const res = async () => {
        const updatedCarData = await updateCar(storage.currentIdUpdate, {
            name: storage.updateNameCar,
            color: storage.updateColorCar
        });
        const updateImgCar = getImageCar(storage.updateColorCar);
        console.log(currentCarName);
        if (currentCarName) currentCarName.textContent = storage.updateNameCar;
        if (currentCarImg?.innerHTML) currentCarImg.innerHTML = updateImgCar.innerHTML;
    }
    res();
}

const getControlsCreate = () => {
    const wrapControls = document.createElement('div');
    wrapControls.classList.add('groupe-controls', 'create');
    const inpCreate = input('inp-name-create');
    const inpColCreate = inputColor('inp-color-create');
    const btnCreate = button('CREATE', 'create');
    inpCreate.addEventListener('change', changeInputCreate);
    inpColCreate.addEventListener('change', changeInputColorCreate);
    btnCreate.addEventListener('click', sendDataForCreate);
    wrapControls.append(inpCreate);
    wrapControls.append(inpColCreate);
    wrapControls.append(btnCreate);
    return wrapControls;
}

const getControlsUpdate = () => {
    const wrapControls = document.createElement('div');
    wrapControls.classList.add('groupe-controls', 'update');
    const inpUpdate = input('inp-name-update', 'disabled');
    const inpColUpdate = inputColor('inp-color-update', 'disabled');
    const btnUpdate = button('UPDATE', 'update', 'disabled');
    inpUpdate.addEventListener('change', changeInputUpdate);
    inpColUpdate.addEventListener('change', changeInputColorUpdate);
    btnUpdate.addEventListener('click', sendDataForUpdate);
    wrapControls.append(inpUpdate);
    wrapControls.append(inpColUpdate);
    wrapControls.append(btnUpdate);
    return wrapControls;
}

const startRace = () => {
    const startButtons = document.querySelectorAll('.start-car');
    const stopButtons = document.querySelectorAll('.stop-car');
    const imgCar = document.querySelectorAll('.car-icon');
    imgCar.forEach((el) => {
        const car = el as SVGElement;
        car.style.transform = `translateX(500px)`;
        car.style.transition = '2s';
    });
    startButtons.forEach((btn) => btn.setAttribute('disabled', ''));
    stopButtons.forEach((btn) => btn.removeAttribute('disabled'));
}

const resetRace = () => {
    const startButtons = document.querySelectorAll('.start-car');
    const stopButtons = document.querySelectorAll('.stop-car');
    const imgCar = document.querySelectorAll('.car-icon');
    imgCar.forEach((el) => {
        const car = el as SVGElement;
        car.style.transform = `translateX(0)`;
        car.style.transition = '0s';
    });
    stopButtons.forEach((btn) => btn.setAttribute('disabled', ''));
    startButtons.forEach((btn) => btn.removeAttribute('disabled'));
}

const generateCars = async () => {
    for (let i = 0; i < ADD_CARS; i += 1) {
        const nameCar = getRandomNameCar();
        const colorCar = getRandomColorHex();
        await createCar({ name: nameCar, color: colorCar });
    }
    renderNumberCarsTitle();
    renderGaragePage(storage.numberCurrentPage);
    console.log(storage.numberCurrentPage);
}

const deleteCars = () => {
    deleteAllCars();
    storage.numberCurrentPage = 1;
    setTimeout(() => {onOffButtonsPage()}, 400) ;
}

const getControlsRace = () => {
    const wrapControls = document.createElement('div');
    wrapControls.classList.add('groupe-controls', 'race');
    const btnRace = button('RACE', 'race');
    const btnReset = button('RESET', 'reset');
    const genCars = button('GENERATE CARS', 'generate');
    const delCars = button('DELETE CARS', 'delete');
    btnRace.addEventListener('click', startRace);
    btnReset.addEventListener('click', resetRace);
    genCars.addEventListener('click', generateCars);
    delCars.addEventListener('click', deleteCars);
    wrapControls.append(btnRace);
    wrapControls.append(btnReset);
    wrapControls.append(genCars);
    wrapControls.append(delCars);
    return wrapControls;
}

export const getGarageControls = () => {
    const wrapContr = document.createElement('div');
    wrapContr.classList.add('wrap-garage-control');
    const controlsCreate = getControlsCreate();
    const controlsUpdate = getControlsUpdate();
    const controlsRace = getControlsRace();
    wrapContr.append(controlsCreate);
    wrapContr.append(controlsUpdate);
    wrapContr.append(controlsRace);
    return wrapContr;
}