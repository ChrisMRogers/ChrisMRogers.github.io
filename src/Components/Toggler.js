import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoon, faSun } from '@fortawesome/free-solid-svg-icons'
const Button = styled.button`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  outline: none;
  font-size:2rem;
  cursor: pointer;
  border: none;
  transition: all 1.0s linear;
  }
`;
const Toggle = ({ theme, toggleTheme }) => {
    return (
        theme === 'light' ? <Button onClick={toggleTheme}><FontAwesomeIcon icon={faCloudMoon} /></Button> : <Button onClick={toggleTheme}><FontAwesomeIcon icon={faSun} /></Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
