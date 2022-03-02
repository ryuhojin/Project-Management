import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      color: ${selected};
      &:hover {
        color: ${lighten(0.1, selected)};
      }
      &:active {
        color: ${darken(0.1, selected)};
      }
    `;
  }}
`;
const StyledMenuButton = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${colorStyles}
`;
const MenuButton = ({ icon, color, children, link, ...rest }) => {
  return (
    <StyledMenuButton color={color} {...rest}>
      {icon}
      &nbsp;&nbsp;{children}
    </StyledMenuButton>
  );
};
MenuButton.defaultProps = {
  color: "black",
};
export default MenuButton;
