import { getCars, startStopCar } from "../api/api";
import { storage } from "../helpers/helpers";
import { QUANTITY_CARS_PAGE, SPEED_CORRECTION } from "../components/constants";

export const renderNumberCarsTitle = async () => {
    const elemTitle = document.querySelector('.page-title')?.children[0];
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

export const moveCar = async (idCar: string, velocity: number) => {
    const wrapCar = document.getElementById(`car${idCar}`);
    const imgCar = wrapCar?.children[1].children[0] as SVGSVGElement;
    const btnStart = wrapCar?.children[0].children[3];
    const btnStop = wrapCar?.children[0].children[4];
    const lengthCar = imgCar.clientWidth;
    let lengthTrack = 0;
    if (wrapCar?.clientWidth) lengthTrack = wrapCar.clientWidth - lengthCar;

    const velocityCar = velocity / SPEED_CORRECTION;
    function moveCarImg(step: number) {
        imgCar.style.transform = `translateX(${step}px)`;
    }
    let initPix = 0;
    let finish = false;
    let isStop = false;
    const id = setInterval(function() {
        if (initPix > lengthTrack || isStop) {
            clearInterval(id);
            if (btnStop) btnStop.removeAttribute('disabled');
            return;
        }
        moveCarImg(initPix);
        initPix += 3;
        if (initPix > lengthTrack - 5) finish = true;
    }, velocityCar);
    const startDrive = await startStopCar([
        {key: 'id', value: idCar}, 
        {key: 'status', value: 'drive'}
    ]);
    if (startDrive) {
    } else {
        const dataStop = await startStopCar([
            {key: 'id', value: idCar}, 
            {key: 'status', value: 'stopped'}
        ]);
        if (dataStop) {
            isStop = true;
        }
    }
    if (btnStart) btnStart.setAttribute('disabled', '');
    return finish ? idCar : false;
}
