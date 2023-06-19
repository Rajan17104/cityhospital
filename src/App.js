import logo from './logo.svg';
import './App.css';
import Main from './container/Main';
import Footer from './component/Footer';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './container/About';


function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer /> 
    </>

    // <BrowserRouter>
    //     <Header />
    //     <Main />
    //   <Routes>
    //     <Route path='/' element={<Main />} />
    //     <Route path='/about' element={<About />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
  );
}

export default App;
