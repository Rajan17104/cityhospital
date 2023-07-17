import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserRoute from './routes/UserRoute'
import AdminRoute from './routes/AdminRoute';
import PrivateRoute from './routes/PrivateRoute';
import { Provider } from 'react-redux';
import { configureStore } from './user/Redux/store';


function App() {

  const store = configureStore();

  return (
    <Provider store={store}>
      <Routes>
        <Route path='/*' element={<UserRoute />} />

        <Route element={<PrivateRoute />}>
          <Route path='/admin/*' element={<AdminRoute />} />
        </Route>

        {/* <Route path='/admin/*' element={<AdminRoute />} /> */}
      </Routes>
    </Provider>
  );
}

export default App;
