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
  successCheck: boolean,
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  userRole: string,
  passwordhash: string,
  houseId: string | null,
  sessionToken: string | null,
  roles: [
    {
      label: string;
      value: string;
    },
    {
      label: string;
      value: string;
    },
    {
      label: string;
      value: string;
    }
  ];
}

export interface RegisterAlerts {
  passAlert(): void;
  emailAlert(): void;
  sendAccount(): void;
  handleSubmit(): void;
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
  houseList: [
  ],
  house: any,
  editUserHouse: string
}

export interface IList {
  listName: string;
  listType: string;
  selectedType: string | null;
  types: [
    { label: string; value: string },
    { label: string; value: string },
    { label: string; value: string },
    { label: string; value: string },
    { label: string; value: string },
    { label: string; value: string }
  ];
  userId: string | null;
}

export interface IHouse {
  houseName: string | null;
  userId: string | null;
}

export interface IAccount {
  shouldRedirect: boolean;
  activeIndex: any;
}

export interface IHome {
  houseName: string;
  houseId: string | null;
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
      label: string;
      icon: string;
      command: any;
    },
    {
      label: string;
      icon: string;
      command: any;
    },
    {
      label: string;
      icon: string;
      command: any;
    },
    { label: string; icon: string; command: any }
  ];
  menubarItems: [
    {
      label: string;
      icon: string;
      items: [
        {
          label: string;
          icon: string;
          command: any;
        },
        {
          label: string;
          icon: string;
          command: any;
        },
        {
          label: string;
          icon: string;
          command: any;
        }
      ];
    }
  ];
  responsiveOptions: [
    {
      breakpoint: string;
      numVisible: number;
    },
    {
      breakpoint: string;
      numVisible: number;
    },
    {
      breakpoint: string;
      numVisible: number;
    }
  ];
  nodeService: any;
}

export interface IFindUser {
  userId: string | null;
  sessionToken: string | null;
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  houseId: string | null;
  passwordhash: string;
  userRole: string | null;
  userData: {};
}

export interface IDisplayList {
  listitems: [
    {
      id: string,
      itemName: string,
      itemQuantity: number,
      itemUrgent: boolean,
      itemFavorite: false,
      userId: string,
      houseId: string,
      listId: string
    }
  ],
  listName: string,
  listType: string
}

export interface IListMap {
  list: {
    listName: string;
    listType: string;
  };
}

export interface IOurLists {
  ourlists: [
    {
      id: string;
      listName: string;
      listType: string;
      houseId: string;
      userId: string;
    }
  ];
  // listData: [],
  // updateActive: boolean,
  // listToUpdate: any
  // ourlist: {
  //     id: string,
  //     listName: string,
  //     listType: string,
  //     houseId: string | null,
  //     userId: string
  // }
}

export interface IDisplayUser {
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
  updateActive: boolean;
  displayResponsive: boolean;
  userData: {};
  userToUpdate: {};
  
}

export interface IEditUser {
  displayResponsive: boolean;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  userRole: string;
  passwordhash: string;
  editFirstName: string;
  editLastName: string;
  editUserName: string;
  editEmail: string;
  editUserRole: string;
  editPasswordhash: string;
  selectedRole: any;
  roles: [
    {
      label: string;
      value: string;
    },
    {
      label: string;
      value: string;
    },
    {
      label: string;
      value: string;
    }
  ];
  // userData: {
  //   id: string,
  //   email: string,
  //   userName: string,
  //   passwordhash: string,
  //   firstName: string,
  //   lastName: string,
  //   houseId: string,
  //   userRole: string
  // }
}

export interface IHouseMembers {
  houseMembers: [
    {
      id: string;
      email: string;
      userName: string;
      passwordhash: string;
      firstName: string;
      lastName: string;
      userRole: string;
      houseId: string;
    }
  ];
}

export interface IMyItems {
  theseItems: [
    {
      id: string;
      itemName: string;
      itemQuantity: number;
      itemUrgent: boolean;
      itemFavorite: boolean;
    }
  ],
  thisItem: [
    {
      id: string;
      itemName: string;
      itemQuantity: number;
      itemUrgent: boolean;
      itemFavorite: boolean;
    }
  ],
  setUpdateActive: boolean
}

export interface IOurItems {
  theseItems: [
    {
      id: string;
      itemName: string;
      itemQuantity: number;
      itemUrgent: boolean;
      itemFavorite: boolean;
    }
  ],
  setUpdateActive: boolean,
  thisItem: any
}

export interface IMyLists {
  myLists: [
    {
      id: string;
      listName: string;
      listType: string;
    }
  ];
}

export interface IEditItem {

  editItemQuantity: number,
  editItemUrgent: boolean,
  editItemFavorite: boolean,
  editListId: string,
  dialog: boolean,
  setUpdateActive: false,
  editItemName: string
};

 

export interface IEditList {
  editListName: string,
  editListType: string
}

export interface IItemDisplay {
  itemUpdateActive: boolean,
  itemInfo: any
}