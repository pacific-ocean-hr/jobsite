import React, { useState } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import styled from "styled-components";

import Theme from "../Theme.jsx";
const PageContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  border: 1px solid black;
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
  margin: 10px 0;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > input {
    border-color: ${(props) => `${props.theme.colors.lightBlue}`};
  }
`;
const Title = styled.div`
  border: ${(props) => `1px solid ${props.theme.colors.lightBlue}`};
  width: 90%;
  box-shadow: ${(props) => `1px 5px 5px ${props.theme.colors.lightBlue}`};
  text-align: center;
  & > h1,
  h4,
  h3 {
    margin: 3px;
  }
`;
const Button = styled.button`
  text-align: center;
  background-color: ${(props) => `${props.theme.colors.onyx}`};
  color: ${(props) => `${props.theme.colors.powderWhite}`};
  padding: 5px 40px;
`;

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/api/signin", {
      password,
      email,
    });
    if (response.data === "incorrect") {
      alert("incorrect username or password");
    } else {
      document.cookie = `token=${response.data}`;
      setAuthorized(true);
    }
  };

  if (authorized) {
    return <Redirect to="/" />;
  } else {
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
            <label>email: </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </FormInput>

          <FormInput>
            <label>password: </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormInput>
          <Button type="submit">Go</Button>
        </Form>
      </PageContainer>
    );
  }
};

export default Signin;
