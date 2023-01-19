import { getCars } from "../api/api";

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