import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './Header';

const Main = () => {
    const  navigation = useNavigate();
    return (
        <div>
            <Header></Header>
            <div  className={  navigation.state === "loading" && "loading"}></div>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;