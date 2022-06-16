import './App.css';
import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/layout/Alert';

const App = () => {
  return (
    <Provider store={store}>
    <Fragment>
      <Navbar />
      <div className='container'>
      <Alert />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </div>
    </Fragment>
    </Provider>
  );
};

export default App;
