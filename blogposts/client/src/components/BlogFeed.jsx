import React from 'react';
import propTypes from 'prop-types';
import * as BlogsStyles from './BlogsStyles';

const BlogFeed = (props) => {
  const { focusBlog, blogs, photos } = props;

  const handleBlogClick = (post, photo) => {
    focusBlog(post, photo);
  };

  return (
    <BlogsStyles.BlogFeed>
    <div className="blogFeed">
      {blogs.map((blog) => {
        const { id, title, body } = blog;
        return (
          <div className="blog" key={id}>
            <h1 className="title">
              {title}
            </h1>
            {photos.map((photo) => {
              const { url, id } = photo;
              return (
                <img
                  src={url}
                  key={id}
                  alt="Could not load"
                  onClick={() => handleBlogClick(blog, photo)}
                  role="button"
                />
              );
            })}
            <h4 className="author">By: Mock Author</h4>
            <p className="body">{body}</p>
          </div>
        );
      })}
    </div>
    </BlogsStyles.BlogFeed>
  );
};

// BlogFeed.propTypes = {
//   focusBlog: propTypes.func.isRequired,
//   blogs: propTypes.arrayOf.isRequired,
//   photos: propTypes.shape.isRequired,
// };

export default BlogFeed;
