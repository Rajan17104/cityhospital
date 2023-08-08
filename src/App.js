import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserRoute from './routes/UserRoute'
import AdminRoute from './routes/AdminRoute';
import PrivateRoute from './routes/PrivateRoute';
import { Provider } from 'react-redux';
import { persistor, store } from './user/Redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { CounterProvider } from './user/Context/CounterContext';
import { ThemeProvider } from './user/Context/ThemeContext';

function App() {

  // const { store, persistor } = configureStore();


  return (
    // <CounterProvider >
    <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <Routes>
            <Route path='/*' element={<UserRoute />} />

            <Route element={<PrivateRoute />}>
              <Route path='/admin/*' element={<AdminRoute />} />
            </Route>

            {/* <Route path='/admin/*' element={<AdminRoute />} /> */}
          </Routes>
        </ThemeProvider>
      </PersistGate>
    </Provider >
    // {/* </CounterProvider> */ }  
  );
}

export default App;
