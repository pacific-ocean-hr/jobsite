import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.div`
  display: flex;
`;

const SectionTitle = styled.h3`
  flex: 1;
  margin: 0;
`;

const AvatarImage = styled.div`
  background-image: url('../../../dist/assets/profile.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid #bbb;
  border-radius: 3px;
  height: 150px;
  margin-bottom: 10px;
  width: 150px;
`;

const ProfileHeader = ({ title }) => (
  <Header>
    <SectionTitle>{title}</SectionTitle>
    <AvatarImage />
  </Header>
);

ProfileHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProfileHeader;
