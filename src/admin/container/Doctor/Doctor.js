import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctorData } from '../../../user/Redux/action/doctors.action';

function Doctor(props) {

    const dispatch = useDispatch();
    const Ddata = useSelector(state => state.data)

    useEffect(() => {
        dispatch(getDoctorData())
    }, [])

    const columns = [

        // { field: 'id', headerName: 'ID', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 }
    
      ];
    

    return (
        <div>
            <h1>Doctors</h1>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={Ddata.doctors}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default Doctor;