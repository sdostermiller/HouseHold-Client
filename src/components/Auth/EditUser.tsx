import React from 'react'
import APIURL from '../../helpers/environment';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';
import { IEditUser } from '../../Interfaces';
import HouseList  from '../House/HouseList';

interface EditUserProps {
    sessionToken: string | null;
    onShow(): void,
    onHide(): void
   
}


 
 
export default class EditUser extends React.Component<EditUserProps, IEditUser> {
    constructor(props: EditUserProps) {
        super(props);
        this.state = { 
            editFirstName: '',
            editLastName: '',
            editUserName: '',
            editEmail: '',
            editUserRole: '',
            editPasswordhash: '',
            displayResponsive: true,
            roles: [
                {
                  label: "Guest",
                  value: "Guest"
                },
                {
                  label: "Member",
                  value: "Member"
                },
                {
                  label: "Head",
                  value: "Head"
                }
              ],
            firstName: '',
            lastName: '',
            userName: '',
            userRole: '',
            email: '',
            passwordhash: '',
            selectedRole: null,
            
            
      
      };

      this.userUpdate = this.userUpdate.bind(this);
      this.onHide = this.onHide.bind(this);
    }

componentDidMount(){

    // let sessionToken = 
    // (this.props.sessionToken ?  this.props.sessionToken : localStorage.getItem('token'));
 
}

userUpdate(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();

    let sessionToken = 
    (this.props.sessionToken ?  this.props.sessionToken : localStorage.getItem('token'));

console.log("UserEdit Mounted", sessionToken);

    fetch(`${APIURL}/user/edit`, {
        method: 'PUT',
        body: JSON.stringify({
            firstName: this.state.editFirstName,
            lastName: this.state.editLastName,
            userName: this.state.editUserName,
            email: this.state.editEmail,
            userRole: this.state.editUserRole,
            passwordhash: this.state.editPasswordhash
        }),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken}`
        })
    }).then((response) => response.json())
    .then((editedUser) => {
        console.log(editedUser);
    }).then(() => {
        this.onHide();
        this.editThis();
    }).catch((err) => console.log(err)); 

    
}
editThis = () => {
    setTimeout(() => {
        window.location.reload();
    }, 3000);
    };

onHide() {
    this.setState({
        displayResponsive: false
    });
}

        
onRoleChange(e: any) {
    this.setState({ selectedRole: e.value });
}


render() { 
    return ( 
        <div>
            <Dialog header="Edit Account Information" visible={this.state.displayResponsive} onHide={() => this.onHide()} breakpoints={{'960px': '75vw'}} style={{width: '50vw'}}>

            <form onSubmit={(event) => {this.userUpdate(event); this.onHide()}}>

            <span className="p-float-label">
                <InputText onChange={(e) => this.setState({firstName: e.target.value})} name="firstName" />
                <label htmlFor="firstName">First Name</label>
            </span>
            <span className="p-float-label">
                <InputText onChange={(e) => this.setState({lastName: e.target.value})} name="lastName" />
                <label htmlFor="lastName">Last Name</label>
            </span>
            <span className='p-float-label'>
                <InputText onChange={(e) => this.setState({userName: e.target.value})} name="userName" />
                <label htmlFor="userName">UserName</label>
            </span>
            <span className='p-float-label'>
                <InputText onChange={(e) => this.setState({email: e.target.value})} name="email" />
                <label htmlFor="email">Email</label>
                </span>
            <Dropdown value={this.state.userRole}
                  options={this.state.roles}
                  onChange={(e) => this.setState({ editUserRole: e.target.value })}
                  optionLabel="label"
                  optionValue="value"
                  placeholder="Select a User Role" ></Dropdown>    
            <span className="p-float-label">
                <InputText onChange={(e) => this.setState({passwordhash: e.target.value})} name="passwordhash" />
                <label htmlFor="passwordhash">Password</label>
            </span>
            <hr />
            <Button label="Cancel" icon="pi pi-times" onClick={() => this.onHide()} className='p-button-text' />
            <Button label="Edit" icon="pi-pi-check" type="submit"  autoFocus /> 


                  </form>
            </Dialog>
        </div>
        );
    }

 

}

