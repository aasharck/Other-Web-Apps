import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileItem = ({ profiles }) => {
  return (
    <Fragment>
      {profiles.map((profile) => {
        return (
          <div className='profile bg-light' key={profile._id}>
            <img
              className='round-img'
              src={profile.user.avatar}
              alt={profile.user.name}
            />
            <div>
              <h2>{profile.user.name}</h2>
              <p>
                {profile.status && profile.status}{' '}
                {profile.company ? 'at ' + profile.company : ''}
              </p>
              <p>{profile.location}</p>
              <Link to={`/profile/${profile.user._id}`} className='btn btn-primary'>
                View Profile
              </Link>
            </div>
            <ul>
              {profile.skills.map((skill, index) => (
                <li key={index} className='text-primary'>
                  <i className='fas fa-check'></i> {skill}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </Fragment>
  );
};

ProfileItem.propTypes = {
  profiles: PropTypes.array.isRequired,
};

export default ProfileItem;
