import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
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
const FormInput = styled.div`
  margin: 10px 0;
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
  h3,
  h4 {
    margin: 3px;
  }
`;
const Button = styled.button`
  text-align: center;
  background-color: ${(props) => `${props.theme.color.teal}`};
  color: ${(props) => `${props.theme.color.white}`};
  border: ${(props) => `1px solid ${props.theme.color.green}`};
  text-decoration: "none";
  padding: 5px 40px;
`;

const Signup = ({ setUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('seeker');
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = document.cookie;
    if (token) {
      setUser(jwt(token.slice(6)));
    }
  }, [document.cookie]);
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const response = await axios.post('http://localhost:4000/api/signup', {
      firstName,
      lastName,
      password,
      email,
      role,
    });
    if (response.data === 'exist') {
      alert('username exist');
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
          <h1>Sign Up</h1>
          <h3>Welcome to JobSite</h3>
        </Title>
        <FormInput
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <div>
            Seeker
            <input type="radio" value="seeker" name="role" defaultChecked />
          </div>
          <div>
            Employer
            <input type="radio" value="employer" name="role" />
          </div>
        </FormInput>
        <FormInput>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            required
          />
        </FormInput>
        <FormInput>
          <input
            type="text"
            name="lastNmae"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            required
          />
        </FormInput>
        <FormInput>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormInput>
        <Button type="submit">Create</Button>
      </Form>
    </PageContainer>
  );
};

Signup.propTypes = {
  setUser: PropTypes.func,
}.required;

export default Signup;
