import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoute(props) {

    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     if (localStorage.getItem("isLoggedIn")) {
    //         setIsLoggedIn(true)
    //             return <Outlet />
    //     } else {
    //         setIsLoggedIn(false)
    //             return <Navigate to={"/auth"} />
    //     }
    // });

    let login = false;

    if (login) {
        return <Outlet />
    } else {
        return <Navigate to={"/auth"} />
    }

    // return isLoggedIn() ? <Outlet /> : <Navigate to={"/auth"} />

}

export default PrivateRoute;