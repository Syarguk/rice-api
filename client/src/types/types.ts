export interface Car {
    name: string;
    color: string;
    id: number;
}

export interface CreateCar {
    name: string;
    color: string;
}

export interface QueryParams {
    key: string;
    value: number | string;
}