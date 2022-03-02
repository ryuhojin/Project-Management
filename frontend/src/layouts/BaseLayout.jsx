import styled, { css } from "styled-components";
import HeaderContainer from "../containers/base/HeaderContainer";
import FooterContainer from "../containers/base/FooterContainer";
const bordStyle = css`
  border: 1px solid black;
`;

const StyledSideLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(80px, auto) 1fr minmax(90px, auto);
  grid-template-areas:
    "head"
    "main"
    "foot";
  grid-gap: 0.2rem;
`;
const StyledHead = styled.header`
  ${bordStyle}
  grid-area: head;
`;
const StyledMain = styled.main`
  ${bordStyle}
  grid-area: main;
`;
const StyledFoot = styled.footer`
  ${bordStyle}
  grid-area: foot;
`;

const BaseLayout = ({ main }) => {
  return (
    <StyledSideLayout>
      <StyledHead>
        <HeaderContainer />
      </StyledHead>
      <StyledMain>{main}</StyledMain>
      <StyledFoot>
        <FooterContainer />
      </StyledFoot>
    </StyledSideLayout>
  );
};
export default BaseLayout;
