import React from 'react';
import Footer from '../user/component/Footer';
import Header from '../user/component/Header';
import Home from '../user/container/Home';
import About from '../user/container/About';
import Contact from '../user/container/Contact';
import Appointment from '../user/container/Appointment';
import Departments from '../user/container/Departments';
import Doctors from '../user/container/Doctors';
import Doctor from '../user/container/Doctor';
import VisitingDoctor from '../user/container/VisitingDoctor';
import NotFound from '../user/container/Notfound';
import Auth from '../user/container/Auth';
import Extra from '../user/container/Extra';
import Validation from '../user/container/Validation';
import Contact1 from '../user/container/Contact1';
import { Route, Routes } from 'react-router-dom';
import Medicine from '../user/container/Medicines/Medicine';
import PrivateRoute from './PrivateRoute';

function userRoute(props) {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact' element={<Contact1 />} />
        <Route path='/appointment' element={<Appointment />} />
        // {/* <Route path='/doctor/:id' element={<Doctor />} />*/}
        // {/* <Route path='/doctor/visiting_doctor' element={<VisitingDoctor />} />   */}

        {/* <Route path='/doctor/'>
        <Route path=':id' element={<Doctor />} />
        <Route path='visiting_doctor' element={<VisitingDoctor />} />
        </Route> */}

        <Route path='*' element={<NotFound />} />
        <Route path='/auth' element={<Auth />} />
      //  {/* <Route path='/auth' element={<Auth1 />} /> */}
        <Route path='/extra' element={<Extra />} />
        <Route path='/validation' element={<Validation />} />

        <Route  element={<PrivateRoute />} >
          <Route path='medicine' element={<Medicine />} />
        </Route>

      </Routes>
      <Footer />
    </>
  );
}

export default userRoute;