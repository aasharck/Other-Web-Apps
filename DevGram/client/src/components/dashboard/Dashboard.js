import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

const Dashboard = ({ getCurrentProfile, auth:{user}, profile:{profile, loading} }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile===null ? <Spinner /> : (
    <Fragment>
       <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {profile !== null ? <Fragment>Profile found</Fragment>:<Fragment>
        <p className='lead'>You have not yet created a Profile. Create one now!</p>
        <Link to='/create-profile' className='btn btn-primary'>Create Profile</Link>
        </Fragment>} 
    </Fragment>
  )
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.register,
  profile: state.profileReducer,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
