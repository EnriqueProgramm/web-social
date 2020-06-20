import React from "react";
import {Switch, Route} from "react-router-dom";
import Menu from "./core/Menu";
import Home from "./core/Home";
import Signup from "./user/Signup";


const MainRouter = () =>(
    <div>
    <Menu />
    <Switch>
       
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/signup" component ={Signup} />
        
    </Switch>
    </div>
);

export default MainRouter;