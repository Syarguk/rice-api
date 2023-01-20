import { CreateCar, QueryParams } from "../types/types";

const baseUrl = 'http://127.0.0.1:3000';
 
const garage = `${baseUrl}/garage`;
const engine = `${baseUrl}/engine`;
const winners = `${baseUrl}/winners`;

export const getCars = async () => {
    const response = await fetch(garage);
    const data = await response.json();
    return data;
}

export const createCar = async (body: CreateCar) => {
    const response = await fetch(garage, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const res = await response.json();
    return res;
}

export const deleteCar = async (id: number) => {
    const response = await fetch(`${garage}/${id}`, {
        method: 'DELETE',
    });
    return await response.json();
}

export const getCar = async (id: number) => {
    const response = await fetch(`${garage}/${id}`);
    return await response.json();
}

export const updateCar = async (id: number, body: CreateCar) => {
    const response = await fetch(`${garage}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    return await response.json();
}

const generateQueryString = (queryParams: QueryParams[] = []) => queryParams.length
? `?${queryParams.map(x => `${x.key}=${x.value}`).join('&')}`
: ''; 

export const startStopCar = async (queryParams: QueryParams[]) => {
    const response = await fetch(`${engine}${generateQueryString(queryParams)}`, {
        method: 'PATCH'
    });
    const data = await response.json();
    return data;
}

/* 

export const getNumberAllCars = async () => {
    const response = await fetch('http://127.0.0.1:3000/garage?_page=1');
    return response.headers.get('X-Total-Count');
} */