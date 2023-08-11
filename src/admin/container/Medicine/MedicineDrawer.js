import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MedicineForm from './MedicineForm'
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';
import { Addmedicine, deleteMedicine, getMedicine, updateMedicine } from '../../../user/Redux/action/medicine.action';


function MedicineDrawer(props) {

  const [update, setupdate] = React.useState(null);

  const dispatch = useDispatch();
  const medicines = useSelector(state => state.medicines)

  useEffect(() => {
    dispatch(getMedicine())
  }, [])



  const handleDelete = (id) => {
    console.log('fgfdhh');
    dispatch(deleteMedicine(id))
  }

  const handleUpdate = (data) => {
    setupdate(data)
  }

  const handlesubmit = (data) => {
    if (update) {
      dispatch(updateMedicine(data))
    } else {
      dispatch(Addmedicine(data))
    }
    setupdate(null)
  }

  const columns = [

    // { field: 'id', headerName: 'ID', width: 130 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'expiry', headerName: 'expiry', width: 130 },
    { field: 'desc', headerName: 'desc', width: 130 },
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
      <h1>Medicine</h1>

      {

        medicines.loading ? <div style={{textAlign: 'center'}}><CircularProgress style={{color: "red" }} /></div> :

          <>
            <MedicineForm onhandlesubmit={handlesubmit} onupdate={update} />


            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={medicines.medicines}
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

export default MedicineDrawer;