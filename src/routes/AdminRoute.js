import { React, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import DepartmentsDrawer from '../admin/container/DepartmentsDrawer';
import MedicineDrawer from '../admin/container/Medicine/MedicineDrawer'
import AppointmentDrawer from '../admin/container/AppointmentDrawer'
import Layout from '../admin/component/Layout'
import Dashboard from '../admin/container/Dashboard/Dashboard';
import Doctor from '../admin/container/Doctor/Doctor';
import Department from '../admin/container/Department/Department';
import { ThemeContext } from '../user/Context/ThemeContext';

function adminRoute(props) {

    // let theme = useContext(ThemeContext);


    return (
        // <div className={`${theme.theme}`}>
            <Layout>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/department' element={<Department />} />
                    <Route path='/doctor' element={<Doctor />} />

                    {/* <Route path='/doctor_drawer' element={<DoctorDrawer />} /> */}
                    <Route path='/medicine_drawer' element={<MedicineDrawer />} />
                    <Route path='/appointment_drawer' element={<AppointmentDrawer />} />
                </Routes>
            </Layout>
        // </div>
    );
}

export default adminRoute;