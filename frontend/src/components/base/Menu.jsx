import styled from "styled-components";
import MenuButton from "../common/MenuButton";
import { MdMenu, MdBackupTable, MdOutlineAccountCircle } from "react-icons/md";
const StyledMenu = styled.div`
  display: flex;
  span {
    font-weight: bold;
  }
  span + span {
    margin-left: 1rem;
  }
  .mobile {
    display: flex;
  }
  .desktop {
    display: none;
  }
  @media only screen and (min-width: 550px) {
    .mobile {
      display: none;
    }
    .desktop {
      display: flex;
    }
  }
`;

const Menu = ({ size }) => {
  return (
    <StyledMenu>
      <MenuButton className="mobile" icon={<MdMenu size={size} />}>
        메뉴
      </MenuButton>
      <MenuButton
        className="desktop"
        icon={<MdOutlineAccountCircle size={size} />}
      >
        땡땡땡님 반갑습니다.
      </MenuButton>
    </StyledMenu>
  );
};
export default Menu;
