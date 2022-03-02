import styled from "styled-components";
const StyeldFooter = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.85rem;
`;
const Footer = () => {
  return (
    <StyeldFooter>
      <span>Made By 프론트엔드 개발자 류호진</span>
      <span>연락처 : 010-5547-6842</span>
    </StyeldFooter>
  );
};
export default Footer;
