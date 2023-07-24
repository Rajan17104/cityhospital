import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctorData, deleteDoctor, getDoctorData, updateDoctor } from '../../../user/Redux/action/doctors.action';
import DoctorFrom from './DoctorFrom';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';


function Doctor(props) {

    const [update, setupdate] = React.useState(null);

    const dispatch = useDispatch();
    const doctors = useSelector(state => state.doctors)

    useEffect(() => {
        dispatch(getDoctorData())
    }, [])



    const handleDelete = (id) => {
        dispatch(deleteDoctor(id))
    }

    const handleUpdate = (data) => {
        setupdate(data)
    }

    const handlesubmit = (data) => {
        if (update) {
            dispatch(updateDoctor(data))
        } else {
            dispatch(addDoctorData(data))
        }
        setupdate(null)
    }

    const columns = [

        // { field: 'id', headerName: 'ID', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        {
            field: 'action', headerName: 'action', width: 130,
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

            {
                doctors.loading ? <CircularProgress style={{color: "red" }}/> :

                    <>
                        <DoctorFrom onhandlesubmit={handlesubmit} onupdate={update} />

                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={doctors.doctors}
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
                    </>
            }
        </div >

    );
}

export default Doctor;