import { Button, Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ListMedicines from './ListMedicines';

function Medicine(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medicines"));

        if (localData) {
            setData(localData)
        }

        console.log(localData);

    }, []);

    const handlechange = (val) =>{
        console.log(val);

        let localData = JSON.parse(localStorage.getItem("medicines"));

        let fData = localData.filter((v,i) => 
            v.name.toLowerCase().includes(val.toLowerCase()) ||
            v.price.toString().includes(val) ||
            v.date.toString().includes(val) ||
            v.desc.toLowerCase().includes(val.toLowerCase())
        )

        
        

        console.log(fData);
    }

    return (
        <div className='row' >
            <input type='search' name='search' onChange={(e) => handlechange(e.target.value)}/>
            <ListMedicines mdata={data} />
        </div>
    );


}

export default Medicine;