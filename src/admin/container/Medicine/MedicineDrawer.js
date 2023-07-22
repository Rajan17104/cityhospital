import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MedicineForm from './MedicineForm';
import { useDispatch, useSelector } from 'react-redux';
import { Addmedicine, deleteMedicine, getMedicine, updateMedicine } from '../../../user/Redux/action/medicine.action';
import CircularProgress from '@mui/material/CircularProgress';

export default function FormDialog() {

  const [update, setupdate] = React.useState(null);

  const dispatch = useDispatch();
  const medicines = useSelector(state => state.medicine)


  React.useEffect(() => {
    dispatch(getMedicine())
  }, [])


  const handleDelete = (id) => {
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
    { field: 'date', headerName: 'ExpiryDate', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'desc', headerName: 'Description', width: 130 },
    {
      field: 'action',
      headerName: 'Action',
      width: 130,
      renderCell: (params) => (
        <>
          <IconButton style={{ color: 'red' }} aria-label="delete" onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label="edit" onClick={() => handleUpdate(params.row)}>
            <EditIcon />
          </IconButton>
        </>
      ),

    }

  ];

  return (
    <div>
      {
        medicines.loading ? <CircularProgress /> :

          <>
            <MedicineForm onhandlesubmit={handlesubmit} onupdate={update} />

            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={medicines.medicine}
                columns={columns}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            </div>
          </>
      }
    </div>

  );
}