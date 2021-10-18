import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { Button, PageContainer, Text, FormInput, Form } from "../AuthStyle.jsx";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
    }
  };

  return (
    <PageContainer>
      <Form onSubmit={onSubmitHandler}>
        <Text>
          <h1>Sign In</h1>
          <h3>Welcome back to JobSite</h3>
          <h4>Connect people with jobs and jobs with people</h4>
        </Text>
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
          Go
        </Button>
      </Form>
    </PageContainer>
  );
};

export default Signin;
