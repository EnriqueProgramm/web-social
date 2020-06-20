import React, {Component} from "react";

class Signin extends Component {

    constructor(props){
        super(props);
        this.state = {name:"", email:"", password: "", error:"", open:false}};
 
        render(){
         return(<p>You are ein Signin</p>); 
        };
    };
 
 
    export default Signin;
     
 