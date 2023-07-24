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

function DoctorFrom({ onhandlesubmit, onupdate }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (onupdate) {
      formik.setValues(onupdate)
      handleClickOpen()
    }
  }, [onupdate])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  let medicineschema = yup.object({

    name: yup.string().required(),
    price: yup.number().required(),
    expiry: yup.date().required(),
    desc: yup.string().required()

  })

  const formik = useFormik({
    validationSchema: medicineschema,

    initialValues: {
      name: '',
      price: '',
      expiry: '',
      desc: ''
    },

    onSubmit: (values, action) => {
      action.resetForm()
      handleClose()

      onhandlesubmit(values)
    },
  })

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

  console.log(errors);

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form Medicine
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
              label="Medicine name"
              name='name'
              type="text"
              fullWidth
              variant="standard"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : null}  </span>
            <TextField

              margin="dense"
              id="name"
              label=""
              name='expiry'
              type="date"
              fullWidth
              variant="standard"
              value={values.expiry}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span style={{ color: 'red' }}>{errors.expiry && touched.expiry ? errors.expiry : null} </span>
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
              <Button type='submit'>submit</Button>
            </DialogActions>
          </form>

        </DialogContent>

      </Dialog>
    </>
  );
}

export default DoctorFrom;