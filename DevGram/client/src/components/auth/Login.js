import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign In To Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            minLength='6'
            required
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Sign In' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);
