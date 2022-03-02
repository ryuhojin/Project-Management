import BaseLayout from "../layouts/BaseLayout";
import SideLayout from "../layouts/SideLayout";
const DashBoard = () => {
  return <BaseLayout main={<SideLayout />} />;
};
export default DashBoard;
