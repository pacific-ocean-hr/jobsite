/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const BlogStyles = styled.div`
  margin: auto;
  width: 80%;
  margin-top: 50px;
`;

const BlogItems = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 5px;
border: 1px solid black;
margin-bottom: 10px;
  `;

const ArticleImage = styled.div`
grid-column: span 1 / auto;
  `;

const Title = styled.div`
grid-column: span 2 / auto;
  `;

const Author = styled.div`
grid-row: span 3 / auto;
  `;

const Image = styled.div`
border: 1px solid black;
  `;

const Article = styled.div`
grid-row: span 3 / auto;
  `;

const BlogFeed = ({ focusBlog, blogs }) => {
  const handleBlogClick = (blog) => {
    focusBlog(blog);
  };

  return (
    <BlogStyles>
      <div className="blogFeed">
        {blogs.map((blog, index) => {
          const {
            author,
            title,
            urlToImage,
            content,
            publishedAt,
          } = blog;
          return (
            <BlogItems>
              <div className="blog" key={index}>
                <ArticleImage>
                  <Image>
                  <img
                    src={urlToImage}
                    alt="Could not load"
                    onClick={() => handleBlogClick(blog)}
                    height="475px"
                    width="900px"
                  />
                  </Image>
                  <div className="date">Published on: <strong>{moment(publishedAt).format("MMM Do YY")}</strong></div>
                </ArticleImage>
              </div>
              <div>
                <Title>
                  <h2 className="title" onClick={() => handleBlogClick(blog)}>{title}</h2>
                </Title>
                  <Author>
                  <h4 className="author">{author}</h4>
                  </Author>
                  <Article>
                    <p className="body">{content}</p>
                  </Article>
              </div>
            </BlogItems>
          );
        })}
      </div>
    </BlogStyles>
  );
};

export default BlogFeed;
