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
import Counter from '../user/Counter/Counter'
import Cart from '../user/container/Cart/Cart';
import Medicine_1 from '../user/container/Medicines/Medicine_1';
import Cart_1 from '../user/container/Cart/Cart_1';
import Favorite from '../user/container/Cart/Favorite';
import { useState } from 'react';

function userRoute(props) {

  // const [cartCount, setCartCount] = useState(0); 
  // const [cartCount, setCartCount] = useState([0])


  return (
    <>
      {/* <Header count={cartCount} /> */}
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/about' element={<About />} />
       // {/* <Route path='/contact' element={<Contact />} /> */}
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
        <Route path='/counter' element={<Counter />} />
        {/* <Route path='/cart' element={<Cart />} /> */}
        <Route path='/cart1' element={<Cart_1 />} />
        <Route path='/favorite' element={<Favorite />} />

        <Route element={<PrivateRoute />} >
          {/* <Route path='medicine' element={<Medicine />} /> */}
          {/* <Route path='medicine1' element={<Medicine_1  onUpdate={setCartCount()} />} /> */}
          <Route path='medicine1' element={<Medicine_1 />} />

        </Route>

      </Routes>
      <Footer />
    </>
  );
}

export default userRoute;