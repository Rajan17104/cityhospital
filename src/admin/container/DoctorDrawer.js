import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let doctorschema = yup.object({
    img: yup.string().required(),
    name: yup.string().required().matches(/^[a-zA-Z ]+$/, 'please enter a valid name')
      .test(
        function (val) {
          let arr = val.split("")
          if (arr.length < 3) {
            return false
          } else {
            return true
          }
        }
      ),
    designation: yup.string().required()
    .test('designation' ,'maxmium 3 word allowed.',
        function (val){
          let arr = val.split(" ")  
          
          if(arr.length > 3){
            return false
          }else{
            return true
          }
        }
      ),

      description: yup.string().required()
    .test('description' ,'maxmium 3 word allowed.',
        function (val){
          let arr = val.split(" ")  
          
          if(arr.length > 3){
            return false
          }else{
            return true
          }
        }
      )

  })

  const formik = useFormik({
    validationSchema: doctorschema,

    initialValues: {
      img:'',
      name: '',
      designation:'',
      description:''
    }
  })

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;



  return (
    <>
      <h1>Doctor</h1>
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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Doctor name"
            type='file'
            name='img'
            fullWidth
            variant="standard"
            value={values.img}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span style={{ color: 'red' }}>{errors.img && touched.img ? errors.img : null}</span>
          <TextField
            autoFocus
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
            autoFocus
            margin="dense"
            id="name"
            label="Doctor Designation"
            name='designation'
            type="text"
            fullWidth
            variant="standard"
            value={values.designation}
            onChange={handleChange}
            onBlur={handleBlur}
          />
           <span style={{ color: 'red' }}>{errors.designation && touched.designation ? errors.designation : null}</span>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name='description'
            label="Doctor Description"
            type="text"
            fullWidth
            variant="standard"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
           <span style={{ color: 'red' }}>{errors.description && touched.description ? errors.description : null}</span>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}