import './App.css';
import {Route, Routes } from 'react-router-dom';
import UserRoute from './routes/UserRoute'
import AdminRoute from './routes/AdminRoute';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './admin/container/Dashboard/Dashboard';


function App() {
  return (
        <Routes>
          <Route path='/*' element={<UserRoute />} />

          <Route element={<PrivateRoute />}>
            <Route path='/admin/*' element={<AdminRoute />} />
          </Route>

          {/* <Route path='/admin/*' element={<AdminRoute />} /> */}
        </Routes>
  );
}

export default App;
