import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserRoute from './routes/UserRoute'
import AdminRoute from './routes/AdminRoute';
import PrivateRoute from './routes/PrivateRoute';
import { Provider } from 'react-redux';
import { configureStore } from './user/Redux/store';
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  const {store ,persistor } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <Routes>
          <Route path='/*' element={<UserRoute />} />

          <Route element={<PrivateRoute />}>
            <Route path='/admin/*' element={<AdminRoute />} />
          </Route>

          {/* <Route path='/admin/*' element={<AdminRoute />} /> */}
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
