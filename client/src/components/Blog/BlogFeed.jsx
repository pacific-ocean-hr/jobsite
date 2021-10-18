import React from 'react';
import styled from 'styled-components';

export const BlogStyles = styled.div`
  margin: auto;
  width: 50%;
`;

const BlogFeed = ({ focusBlog, blogs, photos }) => {
  const handleBlogClick = (post, photo) => {
    focusBlog(post, photo);
  };

  return (
    <BlogStyles>
      <div className="blogFeed">
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <div className="blog" key={id}>
              <h1 className="title">{title}</h1>
              {photos.map((photo) => {
                const { url, id } = photo;
                return (
                  <img
                    src={url}
                    key={id}
                    alt="Could not load"
                    onClick={handleBlogClick}
                  />
                );
              })}
              <h4 className="author">By: Mock Author</h4>
              <p className="body">{body}</p>
            </div>
          );
        })}
      </div>
    </BlogStyles>
  );
};

export default BlogFeed;
