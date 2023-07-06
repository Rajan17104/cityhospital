import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoute(props) {

    let localdata = localStorage.getItem('logindata');

    return(
        localdata ? <Outlet /> : <Navigate to={'/auth'}  replace /> 
    );

}

export default PrivateRoute;