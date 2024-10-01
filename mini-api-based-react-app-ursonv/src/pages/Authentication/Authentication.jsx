import React from 'react';
import {Route, Routes} from 'react-router-dom'
import ROUTES from '../../consts/Routes';
import Home from '../Home/Home';
import Detail from '../Detail/Detail';
import Notfound from '../Notfound/Notfound';

const Authentication = () => {
    return (
        <>

            <Routes>
                <Route path={ROUTES.home} element={<Home/>}/>
                
                <Route path={ROUTES.detail.path} element={<Detail/>}/>
                
                <Route path={ROUTES.notFound} element={<Notfound/>}/>
            </Routes>
            
        </>
    );
};

export default Authentication;