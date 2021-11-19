

export interface IApp {
  email: string;
  passwordhash: string;
  clearToken(): void;
  handleSubmit(): void;
}

export interface ILogin {
  email: string;
  passwordhash: string;
  sessionToken: string;
}

export interface IRegister {
  successCheck: boolean;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  userRole: string;
  passwordhash: string;
  houseId: string | null;
  sessionToken: string;
}

export interface RegisterAlerts {
  passAlert(): void;
  emailAlert(): void;
  sendAccount(): void;
  handleSubmit(): void;
}

export interface IAccount {
  redirectLogin(): void;
}

export interface ICreateItem {
  itemName: string;
  itemQuantity: number;
  itemUrgent: boolean;
  itemFavorite: boolean;
  userId: string | null;
  sessionToken: string | null;
}

export interface IItem {
  onItemChange(): void;
}

export interface IHouseList {
  houseName: string;
  houseId: string | null;
  userId: string | null;
  sessionToken: string | null;
  housedata: string[] | null;
}

export interface IList {
  listName: string;
  listType: string;
  selectedType: string | null;
  types: string[];
  sessionToken: string | null;
  userId: string | null;
}

export interface IHouse {
  houseName: string | null;
  userId: string | null;
}

export interface ListDrop {
  types: string[];
  onTypeChange(): void;
}

export interface IAccount {}

export interface IHome {
  houseName: string;
  houseId: string;
  houseHold: [];
  user: [];
}

export interface MyHouse {
  fetchHouseHold(): void;
  houseHoldMap(): void;
}

export interface IUserAccount {
  sessionToken: string | null;
}

export interface IDock {

  dockItems: [
    {
      label: string,
      icon: string,
      command: any
    
    },
    {
      label: string,
      icon: string,
      command: any,
    },
    {
      label: string,
      icon: string,
      command: any,
    },
    { label: string,
      icon: string,
      command: any,}
  ],
  menubarItems: 
   [
    // {
    //   label: string,
    //   className: string
    // },
    {
      label: string,
      icon: string,
      items: [
        {
          label: string,
          icon: string,
          command: any,
        },
        {
          label: string,
          icon: string,
          command: any,
        },
        
      ]
    }
  ],
  responsiveOptions: [
    {
      breakpoint: string,
      numVisible: number
    },
    {
      breakpoint: string,
      numVisible: number
    },
    {
      breakpoint: string,
      numVisible: number
    }
  ],
  nodeService: any,



}

export interface IFindUser {
  userId: string | null;
  sessionToken: string | null;
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  houseId: string | null;
  houseName: string | null;
  passwordhash: string;
  userRole: string | null;
}

export interface IDisplayList {
  listId: string,

}

export interface IListMap {
    list: {
      listName: string,
      listType: string
    }

}

export interface IOurLists {
    ourlists: [],
    listData: [],
    updateActive: boolean,
    listToUpdate: any
    ourlist: {}

}

