/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const BlogStyles = styled.div`
  margin: auto;
  width: 80%;
  margin-top: 50px;
`;

const BlogItems = styled.div`
border: solid 2px black;
margin-top: 25px
`;

const Title = styled.div`
position: relative;
padding-left: 275px
`;

const Author = styled.div`
position: relative;
padding-left: 275px
`;

const BlogFeed = ({ focusBlog, blogs, photos }) => {
  const handleBlogClick = (blog) => {
    focusBlog(blog);
  };

  return (
    <BlogStyles>
      <div className="blogFeed">
        {blogs.map((blog) => {
          const {
            author,
            title,
            urlToImage,
            content,
          } = blog;
          return (
            <BlogItems>
              <div className="blog" key={blog.source.id}>
                <Title>
                  <h2 className="title" onClick={() => handleBlogClick(blog)}>{title}</h2>
                </Title>
                <img
                  src={urlToImage}
                  alt="Could not load"
                  onClick={() => handleBlogClick(blog)}
                  width="600px"
                  height="600px"
                />

                <Author>
                  <h4 className="author">{author}</h4>
                </Author>
                <p className="body">{content}</p>
              </div>
            </BlogItems>
          );
        })}
      </div>
    </BlogStyles>
  );
};

export default BlogFeed;
