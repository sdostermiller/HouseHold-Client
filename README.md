# HouseHold (Client)
_A collaborative list sharing app_
---
---
HouseHold is a group list-sharing app designed to provide real-time updates to ongoing group lists.  Each user has access to the group's lists and can update them so that all members can see the changes.  This facilitates better access to information relevant to the group and allows better decision making without needing to collect information every time a task is completed.

The HouseHold client app is bootstrapped with React using class components and Typescript.

### Installation

To install, run 'git clone https://github.com/sdostermiller/HouseHold-Client.git' from your terminal in your target folder.  The React app should be included in the repository, but you will need to run 'npm update' to retrieve the included packages and dependencies.  

If you do not have node installed, you can find instructions and downloads here: [Node.js] (https://nodejs.org/ "Node.js")

### Styling

The app was styled using [PrimeReact]: (https://www.primefaces.org/primereact/showcase/#/ "PrimeReact") with modifications.

### Wireframe

The prototype wireframe can be found here: [HouseHold wireframe](https://xd.adobe.com/view/35df119e-ed1d-4cae-b617-e8717091ae20-608c/ "Adobe Xd Wireframe")

### Use

The prototype is a simple design meant for easy access.  Users can add items, assign them to lists, and edit lists.  All users in a group (Household) can see and collaborate on the group lists. There are three levels of user: Guest (read only), Member (can edit lists and items), and Head (can remove members from the house and edit userRoles).

Client-->server routing is provided in the ./helpers/environment file and optimized for deployment on Heroku.

The Server build can be found on Github [HouseHold server repository](https://github.com/sdostermiller/HouseHold-Server "Github Repository")

### Planned improvements

Version 2.0 will include:
* support for items being utilized in multiple lists
* addition of aisles/categories within lists
* color coding of categories/groups for easy access
* search and sorting functions

------
_This prototype was developed as a Web Development project for Eleven Fifty Academy_
&copy Shanna Ostermiller 2021

