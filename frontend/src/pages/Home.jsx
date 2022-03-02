import HomeLayout from "../layouts/HomeLayout";
import HomeContainer from "../containers/home/HomeContainer";
const HomePage = () => {
  return <HomeLayout body={<HomeContainer />} />;
};
export default HomePage;
