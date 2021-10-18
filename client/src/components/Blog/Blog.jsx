import React, { useState, useEffect } from 'react';
import BlogFeed from './BlogFeed';
import ViewBlog from './ViewBlog';

const _ = require('underscore');
const axios = require('axios');

const Blog = () => {
  const [photos, setPhotos] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [viewOneBlog, setViewOneBlog] = useState(false);
  const [blogToView, setBlogToView] = useState({});

  const focusBlog = (blog, picture) => {
    setViewOneBlog(true);
    const combinedObj = _.extend(blog, picture);
    setBlogToView(combinedObj);
  };

  const backToBlogs = () => {
    setViewOneBlog(false);
  };

  const getPosts = () => {
    axios
      .get('http://localhost:4001/posts')
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPhotos = () => {
    axios
      .get('http://localhost:4001/photos')
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPosts();
    getPhotos();
  }, []);

  return (
    <>
      {viewOneBlog ? (
        <ViewBlog blogToView={blogToView} backToBlogs={backToBlogs} />
      ) : (
        <BlogFeed focusBlog={focusBlog} blogs={blogs} photos={photos} />
      )}
    </>
  );
};

export default Blog;
