import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({ profile }) => {
  return (
    <Fragment>
      <div className='profile-top bg-primary p-2'>
        <img
          className='round-img my-1'
          src={profile.user.avatar}
          alt={profile.user.name}
        />
        <h1 className='large'>{profile.user.name}</h1>
        <p className='lead'>
          {profile.status && profile.status} at{' '}
          {profile.company && profile.company}
        </p>
        <p>{profile.location}</p>
        <div className='icons my-1'>
          {profile.social.website && (
            <a
              href={`https://website.com/${profile.social.website}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fas fa-globe fa-2x'></i>
            </a>
          )}
          {profile.social.twitter && (
            <a
              href={`https://twitter.com/${profile.social.twitter}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-twitter fa-2x'></i>
            </a>
          )}
          {profile.social.facebook && (
            <a
              href={`https://facebook.com/${profile.social.facebook}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-facebook fa-2x'></i>
            </a>
          )}
          {profile.social.linkedin && (
            <a
              href={`https://linkedin.com/${profile.social.linkedin}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin fa-2x'></i>
            </a>
          )}
          {profile.social.youtube && (
            <a
              href={`https://youtube.com/${profile.social.youtube}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-youtube fa-2x'></i>
            </a>
          )}
          {profile.social.instagram && (
            <a
              href={`https://instagram.com/${profile.social.instagram}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram fa-2x'></i>
            </a>
          )}
        </div>
      </div>
    </Fragment>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
