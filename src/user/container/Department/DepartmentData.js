import { Button, Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import ListMedicines from './ListMedicines';
import { getMedicine } from '../../Redux/action/medicine.action';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../Redux/slice/CartSlice';
import { getDepartmentData } from '../../Redux/action/department.action';
import ListDepartment from './ListDepartment';
// import { addToCart } from '../../Redux/action/cart.action';

function DepartmentData(props) {

    // const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);

    const dispatch = useDispatch();
    const department = useSelector(state => state.department)

    // useEffect(() => {
    //     let localData = JSON.parse(localStorage.getItem("medicines"));

    //     if (localData) {
    //         setData(localData)
    //     }

    //     console.log(localData);

    // }, []);

    useEffect(() => {
        dispatch(getDepartmentData())
    }, [])

    const handlechange = (val) => {
        console.log(val);

        let localData = JSON.parse(localStorage.getItem("medicines"));

        let mdata = department.department

        let fData = mdata.filter((v, i) =>
            v.name.toLowerCase().includes(val.toLowerCase()) ||
            v.price.toString().includes(val) ||
            v.expiry.toString().includes(val) ||
            v.desc.toLowerCase().includes(val.toLowerCase())
        );

        console.log(fData);

        setSearch(fData)
    }

    // const handleCart = (id) => {
    //     dispatch(addCart(id))
    //     console.log("handle cart called" + id);
    // }

    // const onFavorite = (id) => {

    // }

    return (
        <>
            <input type='search' style={{ marginTop: '50px', width: '500px' , justifyContent: 'center' }} name='search' placeholder='Search....' onChange={(e) => handlechange(e.target.value)} />

            <div className='row' >
                <ListDepartment
                    mdata={search.length > 0 ? search : department.department}
                    // cart={handleCart}
                    // favorite={onFavorite}
                />
            </div>
        </>
    );


}

export default DepartmentData;