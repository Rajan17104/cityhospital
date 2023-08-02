import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';
import DepartmentForm from './DepartmentForm';
// import { addDepartmentData, deleteDepartment, getDepartmentData, updateDepartment } from '../../../user/Redux/action/department.action';
import { getDepartmentApiData } from '../../../common/apis/department.api';
import { addDepartment, deleteDepartment, fetchDepartment, updateDepartment } from '../../../user/Redux/slice/DepartmentSlice';


function Department(props) {

    const [update, setupdate] = React.useState(null);

    const dispatch = useDispatch();
    const department = useSelector(state => state.department)

    useEffect(() => {
        dispatch(fetchDepartment())
    }, [])



    const handleDelete = (id) => {
        dispatch(deleteDepartment(id))
    }

    const handleUpdate = (data) => {
        setupdate(data)
    }

    const handlesubmit = (data) => {
        if (update) {
            dispatch(updateDepartment(data))
        } else {
            dispatch(addDepartment(data))
        }
        setupdate(null)
    }

    const columns = [

        // { field: 'id', headerName: 'ID', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'desc', headerName: 'desc', width: 250 },
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
            <h1>Department</h1>

            {
                department.loading ? <CircularProgress style={{ color: "red" }} /> :

                    <>
                        <DepartmentForm onhandlesubmit={handlesubmit} onupdate={update} />

                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={department.department}
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

export default Department;