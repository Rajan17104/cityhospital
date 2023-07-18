import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Doctor(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDoctorData())
    } , [])

    return (
        <div>
            <h1>Doctors</h1>
        </div>
    );
}

export default Doctor;