import React, {Component} from "react";

class Users extends Component {

    constructor(props){
        super(props);
        this.state = {name:"", email:"", password: "", error:"", open:false}};
 
        render(){
         return(<p>You are in Users Component</p>); 
        };
    };
 
 
export default Users;
     