import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
`;

const SectionTitle = styled.h3`
  flex: 1;
  margin: 0;
  text-align: right;
`;

const AvatarImage = styled.div`
  border: 1px solid #bbb;
  border-radius: 3px;
  height: 150px;
  margin-bottom: 10px;
  width: 150px;
`;

const ProfileHeader = ({ title }) => (
  <Header>
    <AvatarImage>Image goes here</AvatarImage>
    <SectionTitle>{title}</SectionTitle>
  </Header>
);

export default ProfileHeader;
