import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {   useFormik } from 'formik';
import * as yup from 'yup';

function DoctorFrom({onhandlesubmit}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  let doctorschema = yup.object({
    
    name: yup.string().required().matches(/^[a-zA-Z ]+$/, 'please enter a valid name'),
    price: yup.string().required()

  })

  const formik = useFormik({
    validationSchema: doctorschema,

    initialValues: {
      name: '',
      price: '',
    },
    onSubmit: (values, action) => {
      action.resetForm()
      onhandlesubmit(values)
      handleClose()
    },
  })

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

console.log(errors);

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form Doctor
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Doctor</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="dense"
              id="name"
              label="Doctor name"
              type="text"
              name='name'
              fullWidth
              variant="standard"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : null}</span>
            <TextField
              margin="dense"
              id="price"
              label="price"
              name='price'
              type="text"
              fullWidth
              variant="standard"
              value={values.designation}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span style={{ color: 'red' }}>{errors.price && touched.price ? errors.price : null}</span>
           
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type='submit'>submit</Button>
            </DialogActions>
          </form>
          
        </DialogContent>

      </Dialog>
    </>
  );
}

export default DoctorFrom;