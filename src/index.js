import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './common/Footer';
import Mainbar from './common/Mainbar';
import Blog from './components/Blog';
import Shop from './components/Shop';
import Sobrenosotros from './components/Sobrenosotros';

ReactDOM.render(
  <BrowserRouter>
    <Mainbar/>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/sobrenosotros' element={<Sobrenosotros/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
