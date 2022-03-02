import styled, { css } from "styled-components";
const bordStyle = css`
  border: 1px solid black;
`;
const StyledSideLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0 1fr;
  grid-template-areas: "side main";
  @media only screen and (min-width: 550px) {
    grid-template-columns: minmax(18rem, auto) 1fr;
    grid-template-areas: "side main";
    grid-gap: 0.2rem;
  }
`;
const StyledSideBar = styled.div`
  ${bordStyle}
  grid-area: side;
`;
const StyledMain = styled.div`
  ${bordStyle}
  grid-area: main;
`;

const SideLayout = () => {
  return (
    <StyledSideLayout>
      <StyledSideBar></StyledSideBar>
      <StyledMain></StyledMain>
    </StyledSideLayout>
  );
};
export default SideLayout;
