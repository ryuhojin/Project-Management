import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem",
    paddingLeft: "1.25rem",
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem",
    paddingLeft: "1rem",
  },
  small: {
    height: "1.75rem",
    fontSize: "0.875rem",
    paddingLeft: "0.875rem",
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;
const StyledInput = styled.input`
  padding-left: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  ${sizeStyles}
`;

const Input = ({ size, ...rest }) => {
  return <StyledInput size={size} {...rest} />;
};
Input.defaultProps = {
  size: "medium",
};
export default Input;
