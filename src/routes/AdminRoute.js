import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DepartmentsDrawer from '../admin/container/DepartmentsDrawer';
import MedicineDrawer from '../admin/container/Medicine/MedicineDrawer'
import AppointmentDrawer from '../admin/container/AppointmentDrawer'
import Layout from '../admin/component/Layout'
import Dashboard from '../admin/container/Dashboard/Dashboard';
import Doctor from '../admin/container/Doctor/Doctor';

function adminRoute(props) {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/department_drawer' element={<DepartmentsDrawer />} />
                <Route path='/doctor' element={<Doctor />} />

                {/* <Route path='/doctor_drawer' element={<DoctorDrawer />} /> */}
                <Route path='/medicine_drawer' element={<MedicineDrawer />} />
                <Route path='/appointment_drawer' element={<AppointmentDrawer />} />
            </Routes>
        </Layout>
    );
}

export default adminRoute;