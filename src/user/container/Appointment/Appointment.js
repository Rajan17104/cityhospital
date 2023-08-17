import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { aptAdd } from '../../Redux/slice/AppointmentSlice';
import ListIcon from '@mui/icons-material/List';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useDispatch, useSelector} from 'react-redux';
import { deleteApt, getApt, updateApt } from '../../Redux/slice/AppointmentSlice';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


function Appointment(props) {

  const dispatch = useDispatch()

  const [value, setValue] = React.useState(0);
  const [update, setupdate] = useState(false);

  const appointment = useSelector(state => state.appointment);
  console.log(appointment);

  useEffect(() => {
    dispatch(getApt())
  }, [])


  const handleDelete = (id) => {
    dispatch(deleteApt(id))
  }

  const handleUpdate = (data) => {
    setupdate(true)
    setValue(0)
    setValues(data);
    // dispatch(updateApt(data))
  }


  const handleChanges = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  var d = new Date();
  let nd = new Date(d.setDate(d.getDate() - 1));

  let AppointmentSchema = yup.object({
    name: yup.string().required().matches(/^[a-zA-Z ]+$/, 'please enter a valid name'),
    email: yup.string().email().required('please enter a email'),
    phone: yup.string().required().matches(/^(\+\d{1,3}[- ]?)?\d{10}$/),
    date: yup.date().min(nd, 'enter valid date').required('Please enter date'),
    department: yup.string().required(),
    message: yup.string().required('please enter your address')
      .test('Address', 'maxmium 3 word allowed.', function (val) {
        let arr = val.split(" ");

        if (arr.length > 3) {
          return false
        } else {
          return true
        }
      }),

  })

  const formik = useFormik({
    validationSchema: AppointmentSchema,
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      department: '',
      message: ''
    },
    onSubmit: (values, action) => {
      console.log(values);
      setValue(1)
      if (update) {
        dispatch(updateApt(values))
      } else {
        dispatch(aptAdd(values))
      }
      action.resetForm();

    },
  });

  const { values, errors, touched, handleBlur, handleChange, setValues, handleSubmit } = formik;

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


  return (
    <>
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            <h2>Make an Appointment</h2>
            <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
              blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
              Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
          </div>

          <div className='d-flex justify-content-center'>
            <Tabs value={value} onChange={handleChanges} aria-label="icon label tabs example">
              <Tab icon={<EventNoteIcon />} value={0} label="Appointment Data" />
              <Tab icon={<ListIcon />} value={1} label="Appointment List" />
              {/* <Tab icon={<PersonPinIcon />} label="NEARBY" /> */}
            </Tabs>
          </div>

          {
            value === 0 &&
            <div className='mt-5'>
              <form onSubmit={handleSubmit} action method="post" role="form" className="php-email-form" >
                <div className="row">
                  <div className="col-md-4 form-group">
                    <input type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      data-msg="Please enter at least 4 chars"
                    />
                    <span style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : null}  </span>
                  </div>

                  <div className="col-md-4 form-group mt-3 mt-md-0">
                    <input type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      data-msg="Please enter a valid email"
                    />
                    <span style={{ color: 'red' }}>{errors.email && touched.email ? errors.email : null}  </span>
                  </div>

                  <div className="col-md-4 form-group mt-3 mt-md-0">
                    <input type="tel"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Your Phone"
                      data-rule="minlen:4"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      data-msg="Please enter at least 4 chars"
                    />
                    <span style={{ color: 'red' }}>{errors.phone && touched.phone ? errors.phone : null}  </span>
                    <div className="validate" />
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-4 form-group mt-3">
                    <input type="date"
                      name="date"
                      className="form-control datepicker"
                      id="date"
                      placeholder="Appointment Date"
                      data-rule="minlen:4"
                      value={values.date}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      data-msg="Please enter at least 4 chars"
                    />
                    <span style={{ color: 'red' }}>{errors.date && touched.date ? errors.date : null}  </span>


                  </div>

                  <div className="col-md-4 form-group mt-3">
                    <select
                      name="department"
                      id="department"
                      className="form-select"
                      value={values.department}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="">Select Department</option>
                      <option value="Department1">Department 1</option>
                      <option value="Department2">Department 2</option>
                      <option value="Department3">Department 3</option>
                    </select>
                    <span className='fromError' style={{ color: 'red' }}>{errors.department && touched.department ? errors.department : null}</span>

                  </div>
                </div>

                <div className="form-group mt-3">
                  <textarea className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Message (Optional)"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={""}
                  />
                  <span className='fromError' style={{ color: 'red' }}>{errors.message && touched.message ? errors.message : null}</span>
                </div>

                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Make an Appointment</button  ></div>
              </form>
            </div>
          }

          {
            value === 1 &&
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Book Apoointment (Name)</StyledTableCell>
                      <StyledTableCell >email</StyledTableCell>
                      <StyledTableCell >Mobile no.</StyledTableCell>
                      <StyledTableCell >Apt Date</StyledTableCell>
                      <StyledTableCell >Apt Department</StyledTableCell>
                      <StyledTableCell >Message</StyledTableCell>
                      <StyledTableCell >Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      appointment.apt.map((v) => (
                        <StyledTableRow >
                          <StyledTableCell >{v.name}</StyledTableCell>
                          <StyledTableCell >{v.email}</StyledTableCell>
                          <StyledTableCell >{v.phone}</StyledTableCell>
                          <StyledTableCell >{v.date}</StyledTableCell>
                          <StyledTableCell >{v.department}</StyledTableCell>
                          <StyledTableCell >{v.message}</StyledTableCell>
                          <IconButton style={{ color: 'red' }} aria-label="delete" onClick={() => handleDelete(v.id)}>
                            <DeleteIcon />
                          </IconButton>

                          <IconButton aria-label="edit" onClick={() => handleUpdate(v)}>
                            <EditIcon />
                          </IconButton>
                        </StyledTableRow>
                      ))
                    }
                  </TableBody>
                </>
              </Table>
            </TableContainer>
          }
        </div >
      </section >

    </>
  );
}

export default Appointment;