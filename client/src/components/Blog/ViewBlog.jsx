/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

export const BlogStyles = styled.div`
  margin: auto;
  width: 50%;
`;
const ViewBlog = ({ blogToView, backToBlogs }) => {
  const backButtonClick = () => {
    backToBlogs();
  };

  return (
    <BlogStyles>
      <div>
        <button className="back" type="button" onClick={backButtonClick}>
          BACK
        </button>
        <div className="blog">
          <h1 className="title">{blogToView.title}</h1>
          <img src={blogToView.urlToImage} alt="Could not load" />
          <h4 className="author">{blogToView.author}</h4>
          <p className="body">{blogToView.content}</p>
        </div>
      </div>
    </BlogStyles>
  );
};

export default ViewBlog;
