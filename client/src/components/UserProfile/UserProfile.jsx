import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ProfileEditForm from './ProfileEditForm';
import ProfileHeader from './ProfileHeader';

const ProfileContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const ProfileDiv = styled.div`
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

const Field = styled.p`
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px;
`;

const UserProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <ProfileContainer>
      {user && !isEditing
        && (
        <ProfileDiv>
          <ProfileHeader title="User Profile" />
          <Label>
            First Name
            <Field>{user.firstName}</Field>
          </Label>
          <Label>
            Last Name
            <Field>{user.lastName}</Field>
          </Label>
          <Label>
            Email
            <Field>{user.email}</Field>
          </Label>
          <Label>
            Resume
            <a rel="noreferrer" target="_blank" href={user.resume}>{user.resume ? 'Download Resume' : ''}</a>
          </Label>
          <Button type="button" onClick={() => setIsEditing(true)}>Edit</Button>
        </ProfileDiv>
        )}
      {isEditing
        && <ProfileEditForm setIsEditing={setIsEditing} user={user} />}
    </ProfileContainer>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    resume: PropTypes.string,
  }),
};

UserProfile.defaultProps = {
  user: {},
};

export default UserProfile;
