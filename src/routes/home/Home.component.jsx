import { Outlet } from "react-router-dom";
import DirectoryComponent from "../../components/directory/Directory.component";
import { Button_Types } from "../../components/button/Button";

const Home = () => {
  return (
    <>
      <Outlet />
      <DirectoryComponent />
    </>
  );
};

export default Home;
