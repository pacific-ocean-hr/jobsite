import React, { useState } from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const ProfileForm = styled.form`
  border: 1px solid dodgerblue;
  margin: 0 auto;
  padding: 20px;
  width: 50%;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
`;

const ProfileHeader = styled.div`
  display: flex;
`;

const SectionTitle = styled.h3`
  flex: 1;
  text-align: right;
`;

const AvatarImage = styled.div`
  border: 1px solid #bbb;
  border-radius: 3px;
  height: 200px;
  margin-bottom: 10px;
  width: 200px;
`;

const UserProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [resume, setResume] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('submitted', {
      firstName, lastName, address, city, state, zipCode, resume,
    });
  };

  return (
    <ProfileContainer>
      <ProfileForm onSubmit={handleSubmit}>
        <ProfileHeader>
          <AvatarImage>Image goes here</AvatarImage>
          <SectionTitle>User Profile</SectionTitle>
        </ProfileHeader>
        <Label>
          First Name
          <Input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
        </Label>
        <Label>
          Last Name
          <Input type="text" name="firstName" onChange={(e) => setLastName(e.target.value)} value={lastName} />
        </Label>
        <Label>
          Address
          <Input type="text" name="address" onChange={(e) => setAddress(e.target.value)} value={address} />
        </Label>
        <Label>
          City
          <Input type="text" name="city" onChange={(e) => setCity(e.target.value)} value={city} />
        </Label>
        <Label>
          State
          <Input type="text" name="state" onChange={(e) => setState(e.target.value)} value={state} />
        </Label>
        <Label>
          Zip Code
          <Input type="text" name="zipcode" onChange={(e) => setZipCode(e.target.value)} value={zipCode} />
        </Label>
        <Label>
          Upload Resume
          <Input type="file" name="resume" onChange={(e) => setResume(e.target.value)} value={resume} />
        </Label>
        <Input type="submit" value="Done" />
      </ProfileForm>
    </ProfileContainer>
  );
};

export default UserProfile;
