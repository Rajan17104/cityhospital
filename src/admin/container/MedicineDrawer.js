import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Dropdown from '../component/Layout';
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
  
  function Validation(props) {

    let userSchema = yup.object({
        name: yup.string().required('please enter a name').matches(/^[a-zA-Z ]+$/, 'please enter a valid name')
            .test(
                function (val) {
                    let arr = val.split(" ")
                    console.log(arr);
                    if (arr.length > 3) {
                        return false;
                    } else {
                        return true;
                    }
                }),
              })
            }

  const SignupForm = () => {
    const formik = useFormik({
      initialValues: {
        mname: '',
        mexp: '',
        mprice: '',
        mdesc:''
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  }

  return (
    <>
    <div className=''>
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
            name='mname'
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=""
            name='mexp'
            type="date"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Medicine Price"
            name='mprice'
            type="text"
            fullWidth
            variant="standard"
          />
              <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Medicine Description"
            name='mdesc'
            rows={5}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>submit</Button>
        </DialogActions>
      </Dialog>
    </div>
    </>
  );
}