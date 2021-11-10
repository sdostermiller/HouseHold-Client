import { ExecFileSyncOptionsWithBufferEncoding } from "child_process";

export interface IApp {
    email: string,
    passwordhash: string,
    clearToken(): void,
    sessionToken: string,
    handleSubmit() : void
}

export interface ILogin {
    email: string,
    passwordhash: string
}

export interface IRegister {
    successCheck: boolean,
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    userRole: string,
    passwordhash: string,
    houseId: string,
    sessionToken: string,
}

export interface RegisterAlerts {
    passAlert(): void,
    emailAlert(): void,
    sendAccount(): void,
    handleSubmit(): void,
}