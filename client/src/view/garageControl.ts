import { button } from "../components/button";
import { input, inputColor } from "../components/input";
import { createCar, updateCar, startCars, startStopCar, getCars } from "../api/api";
import { getObjCar, getImageCar } from "./car";
import { storage, getRandomNameCar, getRandomColorHex } from "../helpers/helpers";
import { renderGaragePage, deleteAllCars } from "./garagePages";
import { renderNumberCarsTitle, onOffButtonsPage, moveCar } from "./additional";
import { ADD_CARS } from "../components/constants";

const createCarData = {
    name: '',
    color: '#ff0000'
}

const changeInputCreate = (e: Event) => {
    const target = e.target as HTMLInputElement;
    createCarData.name = target.value;
    storage.createName = target.value;
}

const changeInputUpdate = (e: Event) => {
    const target = e.target as HTMLInputElement;
    storage.updateName = target.value;
}

const changeInputColorCreate = (e: Event) => {
    const target = e.target as HTMLInputElement;
    createCarData.color = target.value;
    storage.createColor = target.value;
}

const changeInputColorUpdate = (e: Event) => {
    const target = e.target as HTMLInputElement;
    storage.updateColor = target.value;}

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
            name: storage.updateName,
            color: storage.updateColor
        });
        const updateImgCar = getImageCar(storage.updateColor);
        if (currentCarName) currentCarName.textContent = storage.updateName;
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
    inpCreate.value = storage.createName;
    inpColCreate.value = storage.createColor;
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
    inpUpdate.value = storage.updateName;
    inpColUpdate.value = storage.updateColor;
    inpUpdate.addEventListener('change', changeInputUpdate);
    inpColUpdate.addEventListener('change', changeInputColorUpdate);
    btnUpdate.addEventListener('click', sendDataForUpdate);
    wrapControls.append(inpUpdate);
    wrapControls.append(inpColUpdate);
    wrapControls.append(btnUpdate);
    return wrapControls;
}

const startRace = () => {
    const wrapCars = document.querySelectorAll('.wrap-car');
    let idCars: string[] = [];
    wrapCars.forEach( (el) => {
        idCars.push(el.id.slice(3));
    })
    const requests = startCars(idCars);
    Promise.all(requests)
    .then((responses) => Promise.all(responses.map((r) => r.json())))
    .then((vels) => vels.forEach((vel, ind) => {
        moveCar(idCars[ind], vel.velocity);
    }));
}

const resetRace = async () => {
    const wrapCar = document.querySelector('.wrap-car');
    let idCar = '';
    if (wrapCar) idCar = wrapCar.id.slice(3)
    const startButtons = document.querySelectorAll('.start-car');
    const stopButtons = document.querySelectorAll('.stop-car');
    const imgCar = document.querySelectorAll('.car-icon');
    const stopData = await startStopCar([
        {key: 'id', value: idCar},
        {key: 'status', value: 'stopped'}
    ]);
    if (stopData) {
        imgCar.forEach((el) => {
        const car = el as SVGElement;
        car.style.transform = `translateX(0)`;
        car.style.transition = '0s';
        });
        stopButtons.forEach((btn) => btn.setAttribute('disabled', ''));
        startButtons.forEach((btn) => btn.removeAttribute('disabled'));
    }
}

const generateCars = async () => {
    const btnDelete = document.getElementById('delete');
    for (let i = 0; i < ADD_CARS; i += 1) {
        const nameCar = getRandomNameCar();
        const colorCar = getRandomColorHex();
        await createCar({ name: nameCar, color: colorCar });
    }
    renderNumberCarsTitle();
    renderGaragePage(storage.numberCurrentPage);
    const allCars = await getCars();
    if (allCars.length !== 0 && btnDelete !== null) {
        btnDelete.removeAttribute('disabled');
    };
}

const deleteCars = (e: Event) => {
    const target = e.target as HTMLElement;
    deleteAllCars();
    storage.numberCurrentPage = 1;
    setTimeout(() => {onOffButtonsPage()}, 400) ;
    target.setAttribute('disabled', '');
    (async function name() {
        const allCars = await getCars();
        if (allCars.length === 0) renderNumberCarsTitle();
    })();
}

const getControlsRace = () => {
    const wrapControls = document.createElement('div');
    wrapControls.classList.add('groupe-controls', 'race');
    const btnRace = button('RACE', 'race');
    const btnReset = button('RESET', 'reset');
    const genCars = button('GENERATE CARS', 'generate');
    const delCars = button('DELETE CARS', 'delete');
    (async function name() {
        const allCars = await getCars();
        if (allCars.length === 0) delCars.setAttribute('disabled', '');
    })();
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