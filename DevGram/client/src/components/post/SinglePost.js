import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPost } from '../../actions/post';
import { Link, useParams } from 'react-router-dom';
import Moment from 'react-moment';
import CommentForm from './CommentForm';
import Spinner from '../layout/Spinner';
import CommentItem from './CommentItem';

const SinglePost = ({ getPost, post: { post }, loading }) => {
  const { id } = useParams();

  useEffect(() => {
    getPost(id);
  }, [getPost, id]);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to='/posts' className='btn'>
        Back To Posts
      </Link>
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
        </div>
      </div>
      <CommentForm post={post} />
      <div className="comments">
      {post.comments.map((comment) => (
        <CommentItem key={comment._id} comment={comment} post={post}/>
      ))}
      </div>
    </Fragment>
  );
};

SinglePost.propTypes = {
  getPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(SinglePost);
