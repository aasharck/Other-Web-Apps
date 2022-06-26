import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileEducation = ({ profile }) => {
  return (
    <Fragment>
      <div className='profile-edu bg-white p-2'>
        <h2 className='text-primary'>Education</h2>
        {profile.education.school ? (
          <Fragment>
            {profile.education.map((edu) => (
              <div>
                <h3>{edu.school}</h3>
                <p>
                  <Moment format='MMMM YYYY'>{moment.utc(edu.from)}</Moment> -{' '}
                  {edu.to !== null ? (
                    <Moment format='MMMM YYYY'>{moment.utc(edu.to)}</Moment>
                  ) : (
                    'Now'
                  )}
                </p>
                <p>
                  <strong>Degree: </strong>
                  {edu.degree}
                </p>
                <p>
                  <strong>Field Of Study: </strong>
                  {edu.fieldofstudy}
                </p>
                {edu.description && (
                  <p>
                    <strong>Description: </strong>
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </Fragment>
        ) : (
          <Fragment>
            <h4>No Education Information</h4>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

ProfileEducation.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileEducation;
