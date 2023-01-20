import { Car } from '../types/types';
import { button } from '../components/button';
import { deleteCar, getCar, startStopCar } from '../api/api';
import { storage } from '../helpers/helpers';
import { renderNumberCarsTitle } from './additional';
import { renderGaragePage } from './garagePages';
import { SPEED_CORRECTION } from '../components/constants';

const updateCarInGarage = (e: Event) => {
    const target = e.target as HTMLElement;
    const carId = Number(target.id[target.id.length - 1]);
    const inputNameUpdate = document.getElementById('inp-name-update') as HTMLInputElement;
    const inputColorUpdate = document.getElementById('inp-color-update') as HTMLInputElement;
    const update = document.getElementById('update') as HTMLElement;
    inputNameUpdate.removeAttribute('disabled');
    inputColorUpdate.removeAttribute('disabled');
    update.removeAttribute('disabled');
    const res = async () => {
        const carData = await getCar(carId);
        inputNameUpdate.value = carData.name;
        inputColorUpdate.value = carData.color;
        storage.currentIdUpdate = carData.id;
        storage.updateNameCar = carData.name;
        storage.updateColorCar = carData.color;
    }
    res();
}

const deleteCarFromGarage = async (e: Event) => {
    const target = e.target as HTMLElement;
    const carId = Number(target.id.slice(6));
    await deleteCar(carId);
    document.getElementById(`car${carId}`)?.remove();
    renderGaragePage(storage.numberCurrentPage);
    renderNumberCarsTitle();
}

const driveCar = async (e: Event) => {
    const target = e.target as HTMLElement;
    const btnId = Number(target.id.slice(5));
    const imgCar = target.parentElement?.nextElementSibling?.children[0] as SVGSVGElement;
    const lengthCar = imgCar.clientWidth;
    let lengthTrack = 0;
    if (target.parentElement) {
        lengthTrack = target.parentElement.clientWidth - lengthCar;
    }
    if (target.textContent === 'A') {
        const dataDrive = await startStopCar([
            {key: 'id', value: btnId}, 
            {key: 'status', value: 'started'}
        ]);
        const velocityCar = dataDrive.velocity / SPEED_CORRECTION;
        // imgCar.style.transform = `translateX(${lengthTrack}px)`;
        // imgCar.style.transition = `${velocityCar}ms`;
        function moveCar(step: number) {
            imgCar.style.transform = `translateX(${step}px)`;
        }
        let initPix = 0;
        const id = setInterval(function() {
            if (initPix > lengthTrack) {
                clearInterval(id);
                target.nextElementSibling?.removeAttribute('disabled');
                return;
            }
            moveCar(initPix);
            initPix += 3;
        }, velocityCar);
        target.setAttribute('disabled', '');
    } else {
        imgCar.style.transform = `translateX(0)`;
        imgCar.style.transition = '0s';
        target.previousElementSibling?.removeAttribute('disabled');
        target.setAttribute('disabled', '');
    }
}

export const getImageCar = (colorCar: string) => {
    const carImg = document.createElement('div') as HTMLElement;
    carImg.classList.add('car');
    carImg.innerHTML = `<svg class="car-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
    <defs>
    </defs>
    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
        <circle cx="70.735" cy="56.775" r="1.955" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${colorCar}; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
        <circle cx="19.765" cy="56.775" r="1.955" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${colorCar}; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
        <path d="M 75.479 36.045 l -7.987 -1.22 l -2.35 -2.574 c -5.599 -6.132 -13.571 -9.649 -21.874 -9.649 h -6.245 c -1.357 0 -2.696 0.107 -4.016 0.296 c -0.022 0.004 -0.044 0.006 -0.066 0.01 c -7.799 1.133 -14.802 5.468 -19.285 12.106 C 5.706 37.913 0 45.358 0 52.952 c 0 3.254 2.647 5.9 5.9 5.9 h 3.451 c 0.969 4.866 5.269 8.545 10.416 8.545 s 9.447 -3.679 10.416 -8.545 h 30.139 c 0.969 4.866 5.27 8.545 10.416 8.545 s 9.446 -3.679 10.415 -8.545 H 84.1 c 3.254 0 5.9 -2.646 5.9 -5.9 C 90 44.441 83.894 37.331 75.479 36.045 z M 43.269 26.602 c 7.065 0 13.848 2.949 18.676 8.094 H 39.464 l -3.267 -8.068 c 0.275 -0.009 0.55 -0.026 0.826 -0.026 H 43.269 z M 32.08 27.118 l 3.068 7.578 H 18.972 C 22.429 30.813 27.018 28.169 32.08 27.118 z M 19.767 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 s 6.623 2.971 6.623 6.623 C 26.39 60.427 23.419 63.397 19.767 63.397 z M 70.738 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 c 3.651 0 6.622 2.971 6.622 6.623 C 77.36 60.427 74.39 63.397 70.738 63.397 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${colorCar}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
    </g>
    </svg>`;
    return carImg;
}

export const getObjCar = (dataCar: Car) => {
    const wrapCar = document.createElement('div');
    wrapCar.classList.add('wrap-car');
    wrapCar.setAttribute('id', `car${dataCar.id}`);
    const control = document.createElement('div');
    const nameCar = document.createElement('h4');
    const selectCarBtn = button('SELECT', `select${dataCar.id}`);
    const removeCarBtn = button('REMOVE', `remove${dataCar.id}`);
    const startCarBtn = button('A', `start${dataCar.id}`);
    const stopCarBtn = button('B', `stopp${dataCar.id}`, 'disabled');
    startCarBtn.classList.add('start-car');
    stopCarBtn.classList.add('stop-car');
    selectCarBtn.addEventListener('click', updateCarInGarage);
    removeCarBtn.addEventListener('click', deleteCarFromGarage);
    startCarBtn.addEventListener('click', driveCar);
    stopCarBtn.addEventListener('click', driveCar);
    control.classList.add('control-car');
    nameCar.textContent = `${dataCar.name}`;
    control.append(nameCar);
    control.append(selectCarBtn);
    control.append(removeCarBtn);
    control.append(startCarBtn);
    control.append(stopCarBtn);
    const car = getImageCar(dataCar.color);
    wrapCar.append(control);
    wrapCar.append(car);
    return wrapCar;
}