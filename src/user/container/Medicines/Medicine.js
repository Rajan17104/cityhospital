import { Button, Card, Input, InputAdornment, InputLabel } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import ListMedicines from './ListMedicines';
import { getMedicine } from '../../Redux/action/medicine.action';
import { addCart } from '../../Redux/slice/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { addToFavourite, removeToFavourite } from '../../Redux/action/favorite.action';
// import { ThemeContext } from 'styled-components';
import { ThemeContext } from '../../Context/ThemeContext';
// import { addToCart } from '../../Redux/action/cart.action';

function Medicine(props) {

    let theme = useContext(ThemeContext)
    console.log(theme);

    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);

    const dispatch = useDispatch();
    const medicines = useSelector(state => state.medicines)
    const favData = useSelector(state => state.favourite)

    useEffect(() => {
        dispatch(getMedicine())
    }, [dispatch])

    const handlechange = (val) => {
        console.log(val);


        let mdata = medicines.medicines

        let fData = mdata.filter((v, i) =>
            v.name.toLowerCase().includes(val.toLowerCase()) ||
            v.price.toString().includes(val) ||
            v.expiry.toString().includes(val) ||
            v.desc.toLowerCase().includes(val.toLowerCase())
        );

        console.log(fData);

        setSearch(fData)
    }

    const handleCart = (id) => {
        dispatch(addCart({ pid: id, qty: 1 }))
        console.log(addCart);
        console.log("handle cart called" + id);
    }

    const handlefav = (id) => {
        dispatch(addToFavourite(id))
        console.log("add favourite called" + id);
    }

    const removefav = (id) => {
        dispatch(removeToFavourite(id))
    }


    return (
        <>
            {/* <input type='search' style={{ marginTop: '50px', width: '500px', justifyContent: 'center' }} name='search' placeholder='Search....' onChange={(e) => handlechange(e.target.value)} /> */}

            <div className={`row justify-content-center , mt-3 ${theme.theme}`}>
                <Input
                    className={`${theme.theme}`}
                    style={{ width: '40rem' }}
                    onChange={(e) => handlechange(e.target.value)}
                    id="input-with-icon-adornment"
                    placeholder='Search Medicine....'
                    startAdornment={
                        <InputAdornment position="start"  className={`${theme.theme}`}>
                            <SearchIcon  className={` ${theme.theme}`}/>
                        </InputAdornment>
                    }
                />
            </div>
            <div className='row' >
                <ListMedicines
                    mdata={search.length > 0 ? search : medicines.medicines}
                    cart={handleCart}
                    handlefav={handlefav}
                    removefav={removefav}
                    item={favData.item}
                />
            </div>
        </>
    );


}

export default Medicine;