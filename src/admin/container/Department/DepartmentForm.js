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

function DepartmentForm({ onhandlesubmit, onupdate }) {
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


  let departmentSchema = yup.object({

    name: yup.string().required().matches(/^[a-zA-Z ]+$/, 'please enter a valid name'),
    desc: yup.string().required(),
    // img: yup.string().required()

  })

  const formik = useFormik({
    validationSchema: departmentSchema,

    initialValues: {
      name: '',
      desc: '',
      // img: ''
    },
    onSubmit: (values, action) => {
      action.resetForm()
      handleClose()

      onhandlesubmit(values)
    },
  })

  const { values, errors, touched, handleBlur, handleChange, handleSubmit,setFieldValue,setValues } = formik;

  console.log(errors);

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form Team
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
              label="Department name"
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
              id="desc"
              label="description"
              name='desc'
              type="text"
              fullWidth
              variant="standard"
              value={values.desc}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span style={{ color: 'red' }}>{errors.desc && touched.desc ? errors.price : null}</span>
            {/* <TextField
              margin="dense"
              id="img"
              label="image"
              name='img'
              type="file"
              fullWidth
              variant="standard"
              value={values.img}
              onChange={handleChange}
              onBlur={handleBlur}
            /> */}
            {/* <span style={{ color: 'red' }}>{errors.img && touched.img ? errors.img : null}</span> */}

            <div className="col-md-4 form-group mt-3">
              <input type="file"
                name="prec"
                id="datprece"
                onChange={(event => setFieldValue("prec", event.target.files[0]))}
                onBlur={handleBlur}
              />

              {/* <img src={typeof values.prec === "string" ? values.prec : URL.createObjectURL(values.prec)} width={'70px'} height={'50px'} /> */}
              <span style={{ color: 'red' }}>{errors.prec && touched.prec ? errors.prec : null}  </span>

            </div>

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

export default DepartmentForm;