import React, { useState } from 'react';
import styled from 'styled-components';

import ProfileHeader from './ProfileHeader';

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

const ProfileEditForm = ({ user, setIsEditing }) => {
  const [firstName, setFirstName] = useState(user.firstName || '');
  const [lastName, setLastName] = useState(user.lastName || '');
  const [email, setEmail] = useState(user.email || '');
  const [resume, setResume] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('submitted', {
      firstName, lastName, email, resume,
    });

    setIsEditing(false);
  };

  return (
    <ProfileForm onSubmit={handleSubmit}>
      <ProfileHeader title="Edit Profile" />
      <Label>
        First Name
        <Input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
      </Label>
      <Label>
        Last Name
        <Input type="text" name="firstName" onChange={(e) => setLastName(e.target.value)} value={lastName} />
      </Label>
      <Label>
        Email
        <Input type="text" name="address" onChange={(e) => setEmail(e.target.value)} value={email} />
      </Label>
      <Label>
        Upload Resume
        <Input type="file" name="resume" onChange={(e) => setResume(e.target.value)} value={resume} />
      </Label>
      <Input type="submit" value="Done" />
    </ProfileForm>
  );
};

export default ProfileEditForm;
