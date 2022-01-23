import React from "react";
import "./style.scss";
import Sidebar from "./sidebar";
import Feeds from './feeds';
import Widgets from "./widgets";

const Home = () => {
    return(
        <div className="home-body">
           <Sidebar/>
           <Feeds/>
           <Widgets/>
        </div>
    )
}

export default Home