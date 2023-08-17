// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteApt, getApt, updateApt } from '../../Redux/slice/AppointmentSlice';
// import { IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';

// function ListAppointment(props) {

//     const dispatch = useDispatch();

//     // const [value, setValue] = React.useState(0);
//     const [update, setupdate] = useState(false);

//     const [value, setValue] = React.useState(0);

//     const appointment = useSelector(state => state.appointment);
//     console.log(appointment);

//     useEffect(() => {
//         dispatch(getApt())
//     }, [])

//     const handleDelete = (id) => {
//         dispatch(deleteApt(id))
//     }

//     const handleUpdate = (data) => {
//         // setupdate(true)
//         // setValue(0)
//         // setValues(data);
//         // dispatch(updateApt(data))
//     }

//     const StyledTableCell = styled(TableCell)(({ theme }) => ({
//         [`&.${tableCellClasses.head}`]: {
//             backgroundColor: theme.palette.common.black,
//             color: theme.palette.common.white,
//         },
//         [`&.${tableCellClasses.body}`]: {
//             fontSize: 14,
//         },
//     }));

//     const StyledTableRow = styled(TableRow)(({ theme }) => ({
//         '&:nth-of-type(odd)': {
//             backgroundColor: theme.palette.action.hover,
//         },
//         // hide last border
//         '&:last-child td, &:last-child th': {
//             border: 0,
//         },
//     }));

//     // function createData(name, email, phone, date, department, message) {
//     //     return { name, email, phone, date, department, message };
//     // }

//     // const rows = [
//     //     createData('name', 6.0, 24, 4.0),
//     //     createData('email', 237, 9.0, 37, 4.3),
//     //     createData('phone', 262, 16.0, 24, 6.0),
//     //     createData('date', 30, 3.7, 67, 4.3),
//     //     createData('department', 356, 16.0, 49, 3.9),
//     //     createData('message', 356, 16.0, 49, 3.9),

//     // ];

//     return (
//         // <div className='row'>
//         //     {
//         //         appointment.apt.map((v, i) => {
//         //             return (
//         //                 <>
//         //                     {v.name}
//         //                     {v.email}
//         //                     {v.phone}
//         //                     {v.date}
//         //                     {v.department}
//         //                     {v.message}
//         //                     <IconButton style={{ color: 'red' }} aria-label="delete" onClick={() => handleDelete(v.id)}>
//         //                         <DeleteIcon />
//         //                     </IconButton>

//         //                     <IconButton aria-label="edit" onClick={() => handleUpdate(v)}>
//         //                         <EditIcon />
//         //                     </IconButton>
//         //                 </>
//         //             )
//         //         })
//         //     }
//         // </div>
//         <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 700 }} aria-label="customized table">
//                 <>
//                     <TableHead>
//                         <TableRow>
//                             <StyledTableCell>Book Apoointment (Name)</StyledTableCell>
//                             <StyledTableCell >email</StyledTableCell>
//                             <StyledTableCell >Mobile no.</StyledTableCell>
//                             <StyledTableCell >Apt Date</StyledTableCell>
//                             <StyledTableCell >Apt Department</StyledTableCell>
//                             <StyledTableCell >Message</StyledTableCell>
//                             <StyledTableCell >Action</StyledTableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {
//                             appointment.apt.map((v) => (
//                                 <StyledTableRow >
//                                     <StyledTableCell >{v.name}</StyledTableCell>
//                                     <StyledTableCell >{v.email}</StyledTableCell>
//                                     <StyledTableCell >{v.phone}</StyledTableCell>
//                                     <StyledTableCell >{v.date}</StyledTableCell>
//                                     <StyledTableCell >{v.department}</StyledTableCell>
//                                     <StyledTableCell >{v.message}</StyledTableCell>
//                                     <IconButton style={{ color: 'red' }} aria-label="delete" onClick={() => handleDelete(v.id)}>
//                                         <DeleteIcon />
//                                     </IconButton>

//                                     <IconButton aria-label="edit" onClick={() => handleUpdate(v)}>
//                                         <EditIcon />
//                                     </IconButton>
//                                 </StyledTableRow>
//                             ))
//                         }
//                     </TableBody>
//                 </>
//             </Table>
//         </TableContainer>

//     );
// }

// export default ListAppointment;