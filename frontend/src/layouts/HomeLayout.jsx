import styled from "styled-components";
const StyledHomeLayout = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 1rem;
  @media only screen and (min-width: 550px) {
    margin: 0 auto;
    width: 25%;
  }
`;
const HomeLayout = ({ body }) => {
  return <StyledHomeLayout>{body}</StyledHomeLayout>;
};
export default HomeLayout;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   