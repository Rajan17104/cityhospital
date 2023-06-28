import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DepartmentsDrawer from '../admin/container/DepartmentsDrawer';
import DoctorDrawer from '../admin/container/DoctorDrawer'
import MedicineDrawer from '../admin/container/MedicineDrawer'
import AppointmentDrawer from '../admin/container/AppointmentDrawer'
import Layout from '../admin/component/Layout'

function adminRoute(props) {
    return (
        <Layout>
            <Routes>
                <Route path='/department_drawer' element={<DepartmentsDrawer />} />
                <Route path='/doctor_drawer' element={<DoctorDrawer />} />
                <Route path='/medicine_drawer' element={<MedicineDrawer />} />
                <Route path='/appointment_drawer' element={<AppointmentDrawer />} />
            </Routes>
        </Layout>
    );
}

export default adminRoute;