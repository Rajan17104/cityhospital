import logo from './logo.svg';
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
        <Route path='/doctor/:id' element={<Doctor />} />
      </Routes>
      <Footer /> 
    </>

  );
}

export default App;
