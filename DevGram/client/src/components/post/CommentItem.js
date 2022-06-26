import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/post';

const CommentItem = ({ post, comment, auth, deleteComment }) => {
  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <a href='profile.html'>
          <img className='round-img' src={comment.avatar} alt='' />
          <h4>{comment.name}</h4>
        </a>
      </div>
      <div>
        <p className='my-1'>{comment.text}</p>
        <p className='post-date'>
          Posted on{' '}
          <Moment format='DD MMMM YYYY - HH:MM'>{comment.date}</Moment>
        </p>
      </div>
      {auth.isAuthenticated && auth.user._id === comment.user ? (
        <button
          onClick={() => deleteComment(post._id, comment._id)}
          type='button'
          className='btn btn-danger'
        >
          <i className='fas fa-times'></i>
        </button>
      ) : (
        <Fragment></Fragment>
      )}
    </div>
  );
};

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.register,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
