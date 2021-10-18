import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";

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
  h3,
  h4 {
    margin: 3px;
  }
`;
const Button = styled.button`
  text-align: center;
  background-color: ${(props) => `${props.theme.colors.lightBlue}`};
  color: ${(props) => `${props.theme.colors.powderWhite}`};
  border: ${(props) => `${props.theme.colors.persianGreen}`};
  text-decoration: "none";
  padding: 5px 40px;
`;

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("seeker");
  const [authorized, setAuthorized] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:4000/api/signup", {
      firstName,
      lastName,
      password,
      email,
      role,
    });
    if (response.data === "exist") {
      alert("username exist");
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
            <h1>Sign Up</h1>
            <h3>Welcome to JobSite</h3>
            <h4>Connect people with jobs and jobs with people</h4>
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
            <label>First Name: </label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
            />
          </FormInput>
          <FormInput>
            <label>Last Name: </label>
            <input
              type="text"
              name="lastNmae"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            />
          </FormInput>
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
          <Button type="submit">Create</Button>
        </Form>
      </PageContainer>
    );
  }
};

export default Signup;
