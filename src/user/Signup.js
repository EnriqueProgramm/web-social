import React, {Component} from "react";


class Signup extends Component {

   constructor(props){
       super(props);
       this.state = {name:"", email:"", password: "", error:"", open:false}};

       render(){
        return(<p>You are ein Signup component</p>); 
       };
   };


   export default Signup;
    






