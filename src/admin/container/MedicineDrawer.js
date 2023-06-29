import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  // const [inputData,setInputData] = React.useState('');
  const [items, setItems] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = (data) => {
    console.log(data);

    let rno = Math.floor(Math.random() * 1000);

    let newData = { id: rno, ...data };

    let localdata = JSON.parse(localStorage.getItem("medicines"))

    console.log(localdata);

    if (localdata === null) {
      localStorage.setItem("medicines", JSON.stringify([newData]))
    } else {
      localdata.push(newData)
      localStorage.setItem("medicines", JSON.stringify(localdata))
    }

    handleClose()
  };

  useEffect( () => {
    let localData = JSON.parse(localStorage.getItem("medicines"));

    if (localData === null) {
      setItems('')
    } else {
      setItems(localData)
    }

  }
  ,);

  let d = new Date();
  let nd = new Date(d.setDate(d.getDate() - 1))

  let medicineschema = yup.object({
    name: yup.string().required(),
    date: yup.date().min(nd, "please entre a valid date").required(),
    price: yup.number().required(),
    desc: yup.string().required()
      .test('desc', 'maxmium 3 word allowed.',
        function (val) {
          let arr = val.split(" ")

          if (arr.length > 3) {
            return false
          } else {
            return true
          }
        })
  });

  const formik = useFormik({
    validationSchema: medicineschema,

    initialValues: {
      name: '',
      date: '',
      price: '',
      desc: ''
    },
    onSubmit: (values, action) => {
      handleAdd(values)
      action.resetForm()
      // window.location.reload(false);
    },

  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

  const columns = [

    // { field: 'id', headerName: 'ID', width: 70 },
    // { field: 'firstName', headerName: 'First name', width: 130 },
    // { field: 'lastName', headerName: 'Last name', width: 130 },
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 90,
    // },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name', 
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },

    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'date', headerName: 'ExpiryDate', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'desc', headerName: 'Description', width: 130 }

  ];

  const rows = [
  // //     // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  // //     // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  // //     // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  // //     // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  // //     // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  // //     // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  // //     // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  // //     // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  // //     // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  //   { id: 1, name: 'rajan' , date: '132' , price: '100' , desc: 'good'},


  ];

  return (
    <>
      <h1>Medicine</h1>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form Medicine
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Medicine</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <form onSubmit={handleSubmit}>
            <TextField

              margin="dense"
              id="name"
              label="Medicine name"
              name='name'
              type="text"
              fullWidth
              variant="standard"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : null} </span>
            <TextField

              margin="dense"
              id="name"
              label=""
              name='date'
              type="date"
              fullWidth
              variant="standard"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span style={{ color: 'red' }}>{errors.date && touched.date ? errors.date : null} </span>
            <TextField

              margin="dense"
              id="name"
              label="Medicine Price"
              name='price'
              type="text"
              fullWidth
              variant="standard"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span style={{ color: 'red' }}>{errors.price && touched.price ? errors.price : null} </span>
            <TextField

              margin="dense"
              id="name"
              label="Medicine Description"
              name='desc'
              multiline
              rows={4}
              type="address"
              fullWidth
              variant="standard"
              value={values.desc}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span style={{ color: 'red' }}>{errors.desc && touched.desc ? errors.desc : null} </span>

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type='submit' >submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows} 
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
  );
}