import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctorData, deleteDoctor, getDoctorData } from '../../../user/Redux/action/doctors.action';
import DoctorFrom from './DoctorFrom';
import { IconButton } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Doctor(props) {

    const dispatch = useDispatch();
    const Ddata = useSelector(state => state.doctors)

    useEffect(() => {
        dispatch(getDoctorData())
    }, [])

    const handlesubmit = (data) =>{
        dispatch(addDoctorData(data))
    }

    const handleDelete = (id) => {
        dispatch(deleteDoctor(id))
    }

    const handleUpdate = () => {

    }

    const columns = [

        // { field: 'id', headerName: 'ID', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { 
            field: 'action', headerName: 'action', width: 130 ,
            renderCell: (params) => (
                <>
                  <IconButton style={{ color: 'red' }} aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                    <DeleteIcon />
                  </IconButton>
        
                  <IconButton aria-label="edit" onClick={() => handleUpdate(params.row)}>
                    <EditIcon />
                  </IconButton>
                </>
            )
        }
       
    
      ];
    

    return (
        <div>
            <h1>Doctors</h1>

        <DoctorFrom onhandlesubmit={handlesubmit}/>

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