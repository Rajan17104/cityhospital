import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetalert } from '../../Redux/slice/AlertSlice';

function Alert(props) {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const dispatch = useDispatch()

    const alert = useSelector(state => state.alert);
    console.log(alert);

    useEffect(() => {
        if (alert.text != '') {
            enqueueSnackbar(alert.text, {
                variant: alert.color,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center'
                }
            })
        }

        const timer = setTimeout(() => {
            dispatch(resetalert())
        }, 2000)

        return () => {
            clearTimeout(timer)
        }

    }, [alert.text])



    return (
        <div>

        </div>
    );
}

export default Alert;