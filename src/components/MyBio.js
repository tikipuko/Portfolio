import React from 'react';
import Header from './Header'
import { Outlet } from 'react-router-dom';

const MyBio = (props) => (
    <div>
        <Header/>
        <Outlet/>
    </div>
)

export default MyBio