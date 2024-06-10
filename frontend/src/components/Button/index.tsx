import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void; 
  children: React.ReactNode; 
}

const StyledButton = styled.button<ButtonProps>`
  padding: 0.75rem 1rem;
  width: 19rem;
  margin-top: 8px;
  background-color: #e42626;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    outline: none;
  }
`;

export default function Button(ButtonProps: ButtonProps): JSX.Element {
    const { onClick, children } = ButtonProps;
    return (
      <StyledButton onClick={onClick}>
        {children}
      </StyledButton>
    );
  };