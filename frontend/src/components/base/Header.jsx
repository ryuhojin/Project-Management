import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
const StyledHeader = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;
const StyledLogo = styled.div`
  cursor: pointer;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <h3>PPM</h3>
      </StyledLogo>
      <Menu size={20} />
    </StyledHeader>
  );
};
export default Header;
