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

export interface IAccount {
    redirectLogin(): void
}

export interface ICreateItem {
    itemName: string,
    itemQuantity: number,
    itemUrgent: boolean,
    itemFavorite: boolean,

}

export interface IItem {
    onItemChange(): void
}

export interface IHouseList {
    // houseName: string,
    // houseId: string,
    // houses: [],
    // house: []
}

export interface IList {
    listName: string,
    listType: string,
    selectedType: string | null,
    types: string[]
}

export interface IHouse {
    houseName: string
}

export interface ListDrop {
    types: string[],
    onTypeChange(): void
    }

export interface IAccount {

}

export interface IHome {
    houseName: string,
    houseId: string,
    houseHold: [],
    user: []

}

export interface MyHouse {
    fetchHouseHold(): void,
    houseHoldMap(): void,

}

export interface IUserAccount {

}

export interface INavbar {
    
}