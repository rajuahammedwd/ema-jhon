import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Shop from '../components/Shob/Shop';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;