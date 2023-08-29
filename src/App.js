import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserRoute from './routes/UserRoute'
import AdminRoute from './routes/AdminRoute';
import PrivateRoute from './routes/PrivateRoute';
import { Provider } from 'react-redux';
import { configureStore, persistor, store } from './user/Redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { CounterProvider } from './user/Context/CounterContext';
import { ThemeContext, ThemeProvider } from './user/Context/ThemeContext';
import Alert from './user/component/Alert/Alert';
import { SnackbarProvider } from 'notistack';
import { useContext } from 'react';
import './rsuite.css'

function App() {

  // const { store, persistor } = configureStore();

  // let theme = useContext(ThemeContext);
  // console.log(theme);

  return (
    // <CounterProvider >
    // <div className={`${theme.theme}`}>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <ThemeProvider>
            <PersistGate loading={null} persistor={persistor}>
              <Alert />
              <Routes>
                <Route path='/*' element={<UserRoute />} />

                {/* <Route >
                <Route path='/admin/*' element={<AdminRoute />} />
              </Route> */}

                <Route path='/admin/*' element={<AdminRoute />} />
              </Routes>
            </PersistGate>
          </ThemeProvider>
        </Provider>
      </SnackbarProvider>
    // </div >
    // </CounterProvider>
  );
}

export default App;
