import React, { useState } from "react";
import axios from "axios";

import { Button, PageContainer, Text, FormInput, Form } from "../AuthStyle.jsx";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("seeker");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:4000/api/signup", {
      username,
      password,
      email,
      role,
    });
    if (response.data === "exist") {
      alert("username exist");
    } else {
      document.cookie = `token=${response.data}`;
    }
  };

  return (
      <PageContainer>
        <Form onSubmit={onSubmitHandler}>
          <Text>
            <h1>Sign Up</h1>
            <h3>Welcome to JobSite</h3>
            <h4>Connect people with jobs and jobs with people</h4>
          </Text>
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
            <label>username: </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
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
          <Button type="submit" id="signup">
            Create
          </Button>
        </Form>
      </PageContainer>
  );
};

export default Signup;
