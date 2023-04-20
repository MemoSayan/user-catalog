import { Coordinate } from "./coordinate.interface";

export interface User {
    userid: string;
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    gender: string;
    address: string;
    dateOfBirth: string;
    phone: string;
    imageUrl: string;
    coordinate: Coordinate;
}