import React from 'react';
import styled from 'styled-components';

export const SeekerButton = styled.button`
  background: ${props => props.theme.color.teal};
  color: ${props => props.theme.color.black};
  font-size: ${props => props.theme.fontSize.small};
  font: ${props => props.theme.font.secondary};
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
`;

export const EmployerButton = styled.button`
  background: ${props => props.theme.purple};
  color: ${props => props.theme.white};
  font-size: ${props => props.theme.fontSize.medium};
  font: ${props => props.theme.font.primary};
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
`;


