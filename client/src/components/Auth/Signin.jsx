import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';
import jwt from 'jwt-decode';
import PropTypes from 'prop-types';

const PageContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  border: ${(props) => `2px solid ${props.theme.color.black}`};
  padding: 80px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NavLink = styled(Link)`
  margin-bottom: 20px;
  margin-top: 10px;
`;
const FormInput = styled.div`
  margin: 10px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > input {
    border-color: ${(props) => `${props.theme.color.teal}`};
    width: 80%;
  }
`;
const Title = styled.div`
  border: ${(props) => `2px solid ${props.theme.color.green}`};
  width: 90%;
  box-shadow: ${(props) => `1px 5px 5px ${props.theme.color.green}`};
  text-align: center;
  & > h1,
  h4,
  h3 {
    margin: 3px;
  }
`;
const Button = styled.button`
  text-align: center;
  background-color: ${(props) => `${props.theme.color.purple}`};
  color: ${(props) => `${props.theme.color.white}`};
  border: ${(props) => `1px solid ${props.theme.color.teal}`};
  padding: 5px 40px;
`;

const Signin = ({ setUser }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = document.cookie;
    if (token) {
      setUser(jwt(token.slice(6)));
    }
  }, [document.cookie]);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:4000/api/signin', {
      password,
      email,
    });
    if (response.data === 'incorrect') {
      alert('incorrect username or password');
    } else {
      document.cookie = `token=${response.data}`;
      setAuthorized(true);
    }
  };

  if (authorized) {
    return <Redirect to="/" />;
  }
  return (
    <PageContainer>
      <Form onSubmit={onSubmitHandler}>
        <Title>
          <h1>Sign In</h1>
          <h3>Welcome back to JobSite</h3>
          <h4>Connect people with jobs and jobs with people</h4>
        </Title>
        <NavLink to="/signup">Create New Account?</NavLink>
        <FormInput>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </FormInput>

        <FormInput>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormInput>
        <Button type="submit">Go</Button>
      </Form>
    </PageContainer>
  );
};

Signin.propTypes = {
  setUser: PropTypes.func,
}.required;

export default Signin;
