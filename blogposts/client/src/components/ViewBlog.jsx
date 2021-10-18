import React from 'react';
import * as BlogsStyles from './BlogsStyles';

const ViewBlog = (props) => {
  const { blogToView, backToBlogs} = props;

  const backButtonClick = () => {
    backToBlogs();
  };

  return (
    <BlogsStyles.BlogFeed>
    <div>
      <button className="back" type="button" onClick={backButtonClick}>BACK</button>
      <div className="blog">
        <h1 className="title">
          {blogToView.title}
        </h1>
        <img
          src={blogToView.url}
          alt="Could not load"
        />
        <h4 className="author">By: Mock Author</h4>
        <p className="body">{blogToView.body}</p>
      </div>
    </div>
    </BlogsStyles.BlogFeed>
  );
};

export default ViewBlog;
