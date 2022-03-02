import styled from "styled-components";
import Button from "../common/Button";
import Input from "../common/Input";
const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h1 {
    text-align: center;
  }
  input,
  button + input,
  button {
    margin-top: 1rem;
  }
`;
const Home = () => {
  return (
    <StyledHome>
      <h1>PMS SYSTEM</h1>
      <Input size="large" type="text" placeholder="아이디를 입력해주세요" />
      <Input
        size="large"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        autoComplete="false"
      />
      <Button color="gray" size="large" fullWidth>
        로그인
      </Button>
    </StyledHome>
  );
};
export default Home;
