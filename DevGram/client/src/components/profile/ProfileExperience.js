import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileExperience = ({ profile }) => {
  return (
    <Fragment>
      <div className='profile-exp bg-white p-2'>
        <h2 className='text-primary'>Experience</h2>
        {profile.experience.company ? (
          <Fragment>
            {profile.experience.map((p) => (
              <div>
                <h3 className='text-dark'>{p.company}</h3>
                <p>
                  <Moment format='MMMM YYYY'>{moment.utc(p.from)}</Moment> -{' '}
                  {p.to !== null ? (
                    <Moment format='MMMM YYYY'>{moment.utc(p.to)}</Moment>
                  ) : (
                    'Now'
                  )}
                </p>
                <p>
                  <strong>Position: </strong>
                  {p.title}
                </p>
                <p>
      <strong>Location: </strong> {p.location}
    </p>
                {p.description && (
                  <p>
                    <strong>Description: </strong>
                    {p.description}
                  </p>
                )}
              </div>
            ))}
          </Fragment>
        ) : (
          <Fragment>
            <h4>No Experience Information</h4>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

ProfileExperience.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileExperience;
