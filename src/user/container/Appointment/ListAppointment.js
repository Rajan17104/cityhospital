import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteApt, getApt } from '../../Redux/slice/AppointmentSlice';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ListAppointment(props) {

    const dispatch = useDispatch();

    const appointment = useSelector(state => state.appointment);
    console.log(appointment);

    useEffect(() => {
        dispatch(getApt())
    }, [])

    const handleDelete = (id) => {
        dispatch(deleteApt(id))
    }

    const handleUpdate = () => {

    }

    return (
        <div className='row'>
            {
                appointment.apt.map((v, i) => {
                    return (
                        <>
                            <p>{v.id} ------- {v.name}</p>

                            <IconButton style={{ color: 'red' }} aria-label="delete" onClick={() => handleDelete(v.id)}>
                                <DeleteIcon />
                            </IconButton>

                            <IconButton aria-label="edit" onClick={() => handleUpdate(v)}>
                                <EditIcon />
                            </IconButton>
                        </>
                    )
                })
            }
        </div>
    );
}

export default ListAppointment;