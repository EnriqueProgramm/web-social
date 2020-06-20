import React from "react";
import {Switch, Route} from "react-router-dom";
import Menu from "./core/Menu";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Users from "./user/Users";


const MainRouter = () =>(
    <div>
    <Menu />
    <Switch>
       
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/signup" component ={Signup} />
        <Route exact path ="/signin" component ={Signin} />
        <Route exact path ="/users" component ={Users} />

        
    </Switch>
    </div>
);

export default MainRouter;