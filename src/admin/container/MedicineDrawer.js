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

  let medicineschema = yup.object({
    name: yup.string().required().matches(/^[a-zA-Z ]+$/, 'please enter a valid name')
    .test(
      function (val) {
          let arr = val.split("")
          console.log(arr);
          if (arr.length < 3) {
              return false;
          } else {
              return true;
          }
      }),

    date: yup.date().min(new Date(),"please entre a valid date").required(),
    price: yup.number().required(),
    desc:yup.string().required()
    .test('desc', 'maxmium 3 word allowed.',
     function (val){
      let arr = val.split(" ")

      if(arr.length > 3){
        return false
      }else{
        return true
      }
    })
  });

  const formik = useFormik({
    validationSchema: medicineschema,

    initialValues: {
      name: '',
      date:'',
      price:'',
      desc:''
    }
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

  return (
    <>
      <h1>Medicine</h1>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form Medicine
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Medicine</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
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
          <span style={{color: 'red'}}>{errors.name && touched.name ? errors.name : null } </span>
          <TextField
            autoFocus
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
          <span style={{color: 'red'}}>{errors.date && touched.date ? errors.date : null} </span>
          <TextField
            autoFocus
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
           <span style={{color: 'red'}}>{errors.price && touched.price ? errors.price : null} </span>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Medicine Description"
            name='desc'
            rows={5}
            type="address"
            fullWidth
            variant="standard"
            value={values.desc}
            onChange={handleChange}
            onBlur={handleBlur}
          />
           <span style={{color: 'red'}}>{errors.desc && touched.desc ? errors.desc : null} </span>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} onSubmit={handleSubmit}>submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}