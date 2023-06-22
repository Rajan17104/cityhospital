import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import {Route, Routes } from 'react-router-dom';
import Home from './container/Home';
import About from './container/About';
import Contact from './container/Contact';
import Appointment from './container/Appointment';
import Departments from './container/Departments';
import Doctors from './container/Doctors';
import Doctor from './container/Doctor';
import VisitingDoctor from './container/VisitingDoctor';
import NotFound from './container/Notfound';
import Auth from './container/Auth';
import Extra from './container/Extra';
import Auth1 from './container/Auth1';




function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/departments' element={<Departments/>} />
        <Route  path='/doctors' element={<Doctors />}/>
        <Route  path='/about' element={<About />}/>
        <Route  path='/contact' element={<Contact />}/>
        <Route path='/appointment' element={<Appointment />} />
        {/* <Route path='/doctor/:id' element={<Doctor />} />
        <Route path='/doctor/visiting_doctor' element={<VisitingDoctor />} /> */}

        <Route path='/doctor/'>
        <Route path=':id' element={<Doctor />} />
        <Route path='visiting_doctor' element={<VisitingDoctor />} />
        </Route>

        <Route path='*' element={<NotFound />} />
        {/* <Route path='/auth'  element={<Auth />}/> */}
        <Route path='/auth' element={<Auth1 />} />
        <Route path='/extra' element={<Extra />} />

      </Routes>
      <Footer /> 
    </>

  );
}

export default App;
