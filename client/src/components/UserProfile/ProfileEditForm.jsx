import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

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
  margin: 10px 5px;
  padding: 10px;
`;

const ProfileEditForm = ({ user, setIsEditing }) => {
  const [firstName, setFirstName] = useState(user.firstName || '');
  const [lastName, setLastName] = useState(user.lastName || '');
  const [email, setEmail] = useState(user.email || '');
  const [resumeName, setResumeName] = useState('');
  const [resumeFile, setResumeFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataForm = new FormData();
    dataForm.append('file', resumeFile);
    dataForm.set('id', user.id);
    dataForm.set('firstName', firstName);
    dataForm.set('lastName', lastName);
    dataForm.set('email', email);

    axios.patch('http://localhost:4000/api/user-profile', dataForm)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));

    setIsEditing(false);
  };

  const handleUpload = (e) => {
    const pdfFile = e.target.files[0];

    setResumeFile(pdfFile);
    setResumeName(e.target.value);
  };

  return (
    <ProfileForm onSubmit={handleSubmit} enctype="multipart/form-data">
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
        <Input type="file" accept="application/pdf" name="resume" onChange={handleUpload} value={resumeName} />
      </Label>
      <Input type="button" value="Cancel" onClick={() => setIsEditing(false)} />
      <Input type="submit" value="Save" />
    </ProfileForm>
  );
};

ProfileEditForm.propTypes = {
  setIsEditing: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default ProfileEditForm;
