import './App.css';
import {Route, Routes } from 'react-router-dom';
import UserRoute from './routes/UserRoute'
import AdminRoute from './routes/AdminRoute';


function App() {
  return (
        <Routes>
          <Route path='/*' element={<UserRoute />} />
          <Route path='/admin/*' element={<AdminRoute />} />
        </Routes>
  );
}

export default App;
