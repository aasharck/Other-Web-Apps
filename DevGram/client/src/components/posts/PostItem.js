import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { addLike, removeLike, deletePost } from '../../actions/post';
import { Link } from 'react-router-dom';

const PostItem = ({ post, auth, addLike, removeLike, deletePost }) => {
  return (
    <Fragment>
      <div className='post bg-white p-1 my-1'>
        <div>
          <Link to={`/profile/${post.user}`}>
            <img className='round-img' src={post.avatar} alt='' />
            <h4>{post.name}</h4>
          </Link>
        </div>
        <div>
          <p className='my-1'>{post.text}</p>
          <p className='post-date'>
            Posted on <Moment format='DD MMMM YYYY'>{post.date}</Moment>
          </p>
          <button
            onClick={(e) => addLike(post._id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-up'></i>
            {post.likes.length > 0 ? (
              <span> {post.likes.length}</span>
            ) : (
              <span> </span>
            )}
          </button>
          <button
            onClick={(e) => removeLike(post._id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-down'></i>
          </button>
          <Link to={`/posts/${post._id}`} className='btn btn-primary'>
            Discussion{' '}
            {post.comments.length > 0 ? (
              <span className='comment-count'> {post.comments.length}</span>
            ) : (
              <span> </span>
            )}
          </Link>
          {auth.isAuthenticated && auth.user._id === post.user ? (
            <button
              onClick={() => deletePost(post._id)}
              type='button'
              className='btn btn-danger'
            >
              <i className='fas fa-times'></i>
            </button>
          ) : (
            <Fragment></Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

PostItem.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.register,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
