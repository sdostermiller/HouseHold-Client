import React from 'react';
import { IUserAccount } from '../../Interfaces';


interface UserAccountProps {
    sessionToken: string | null;
}

export default class UserAccount extends React.Component <UserAccountProps, IUserAccount> {
    constructor(props: UserAccountProps) {
        super(props);
        // this.state = {
            
        // }
    }
}

