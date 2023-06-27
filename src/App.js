import './App.css';
import Footer from './user/component/Footer';
import Header from './user/component/Header';
import {Route, Routes } from 'react-router-dom';
import Home from './user/container/Home';
import About from './user/container/About';
import Contact from './user/container/Contact';
import Appointment from './user/container/Appointment';
import Departments from './user/container/Departments';
import Doctors from './user/container/Doctors';
import Doctor from './user/container/Doctor';
import VisitingDoctor from './user/container/VisitingDoctor';
import NotFound from './user/container/Notfound';
import Auth from './user/container/Auth';
import Extra from './user/container/Extra';
// import Auth1 from './container/Auth1';
import Validation from './user/container/Validation';
import Dropdown from './user/container/Dropdown';
import DepartmentsDrawer from './admin/container/DepartmentsDrawer';
import DoctorDrawer from './admin/container/DoctorDrawer'
import MedicineDrawer from './admin/container/MedicineDrawer'
import AppointmentDrawer from './admin/container/AppointmentDrawer'

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        {/* <Route  path='/' element={<Home />}/>
        <Route  path='/departments' element={<Departments/>} />
        <Route  path='/doctors' element={<Doctors />}/>
        <Route  path='/about' element={<About />}/>
        <Route  path='/contact' element={<Contact />}/>
        <Route path='/appointment' element={<Appointment />} /> */}
        // {/* <Route path='/doctor/:id' element={<Doctor />} />*/}
        // {/* <Route path='/doctor/visiting_doctor' element={<VisitingDoctor />} />   */}

        {/* <Route path='/doctor/'>
        <Route path=':id' element={<Doctor />} />
        <Route path='visiting_doctor' element={<VisitingDoctor />} />
        </Route> */}

        {/* <Route path='*' element={<NotFound />} />
        <Route path='/auth'  element={<Auth />}/> */}
      //  {/* <Route path='/auth' element={<Auth1 />} /> */}
        {/* <Route path='/extra' element={<Extra />} />
        <Route path='/validation' element={<Validation />} /> */}
        <Route path='/dropdown' element={<Dropdown/>} />
        <Route path='/department_drawer' element={<DepartmentsDrawer />} />
        <Route path='/doctor_drawer' element={<DoctorDrawer />}/>
        <Route path='/medicine_drawer' element={<MedicineDrawer />}/>
        <Route path='/appointment_drawer' element={<AppointmentDrawer />}/>
      </Routes>
      {/* <Footer /> */}
  
    </>

   

  );
}

export default App;
