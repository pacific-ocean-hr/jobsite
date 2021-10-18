import styled from "styled-components";


const PageContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  border: 1px solid black;
  padding: 20px 15px;
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
`;
const Text = styled.div`
  width: 60%;
  text-align: center;
  & > h1,
  h4,
  h3 {
    margin: 3px;
  }
`;
const Button = styled.button`
  text-align: center;
`;

export { Button, PageContainer, Text, FormInput, Form };
